import process from 'node:process'

import {createTRPCProxyClient, httpLink} from '@trpc/client'
import fse from 'fs-extra'

import * as jwt from './jwt.js'

import type {AppRouter} from './server/trpc/index.js'

// TODO: Maybe just read the endpoint from the data dir
const dataDir = process.env.UMBREL_DATA_DIR ?? '/home/umbrel/umbrel'
const trpcEndpoint = process.env.UMBREL_TRPC_ENDPOINT ?? `http://localhost/trpc`

async function signJwt() {
	const secret = await fse.readFile(`${dataDir}/secrets/jwt`, {encoding: 'utf8'})
	const token = await jwt.sign(secret)
	return token
}

const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpLink({
			url: trpcEndpoint,
			headers: async () => ({
				Authorization: `Bearer ${await signJwt()}`,
			}),
		}),
	],
})

function parseValue(value: string): any {
	// Check if the value can be parsed as JSON
	try {
		return JSON.parse(value)
	} catch {
		// If not, check if the value can be converted to a number
		if (/^\d+\.?\d*$/.test(value)) {
			return Number(value)
		}

		// Check if the value is a comma-separated list
		if (value.includes(',')) {
			return value.split(',').map((v) => parseValue(v))
		}

		// Return as string
		return String(value)
	}
}

function parseArgs(args: string[]): any {
	if (args.length === 1) return parseValue(args[0])

	const result: Record<string, any> = {}
	for (let i = 0; i < args.length; i++) {
		if (!args[i].startsWith('--')) throw new Error('Invalid argument')
		const key = args[i].slice(2)
		const value = parseValue(args[i + 1])
		result[key] = value
		i++ // Skip next item which is the current value
	}

	return result
}

type CliClientOptions = {
	query: string
	args: string[]
}

export const cliClient = async ({query, args}: CliClientOptions) => {
	const parsedArgs = parseArgs(args)

	let procedure: any = trpc
	for (const part of query.split('.')) procedure = procedure[part]

	try {
		console.log(await procedure(parsedArgs))
	} catch (error) {
		console.log(error)
	}
}
