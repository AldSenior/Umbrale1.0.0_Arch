import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import {cn} from '@/shadcn-lib/utils'

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({className, ...props}, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			// Removing `disabled:cursor-not-allowed` so that we can disable switch while it's going to the server without changing the cursor
			'peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-[background,color,box-shadow] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/6 focus-visible:ring-offset-1 focus-visible:ring-offset-white/20 disabled:opacity-50 data-[state=checked]:bg-brand data-[state=unchecked]:bg-white/10',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				'pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
			)}
		/>
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export {Switch}
