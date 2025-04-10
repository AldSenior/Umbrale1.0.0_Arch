import {SVGProps, useId} from 'react'

export const AppsIcon = (props: SVGProps<SVGSVGElement>) => {
	const id = useId()
	return (
		<svg width={15} height={18} viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g filter={`url(#filter-${id})`}>
				<path
					d='M7.70623 8.79459C7.57331 8.87543 7.50684 8.91585 7.43305 8.9167C7.35927 8.91754 7.2919 8.87864 7.15716 8.80085L1.51977 5.54611C1.46272 5.51317 1.60535 5.59552 1.60249 5.59377C1.47862 5.51807 1.47585 5.21481 1.59833 5.13686C1.60116 5.13506 1.3865 5.26426 1.47237 5.21258L7.39013 1.61321C7.47462 1.56181 7.57136 1.53403 7.67025 1.53278C7.76915 1.53154 7.86656 1.55686 7.95232 1.60612L13.6712 4.90789C13.7797 4.97061 13.7509 5.11836 13.6438 5.18351L7.70623 8.79459Z'
					fill='hsl(var(--color-brand))'
				/>
				<path
					d='M7.70623 8.79459C7.57331 8.87543 7.50684 8.91585 7.43305 8.9167C7.35927 8.91754 7.2919 8.87864 7.15716 8.80085L1.51977 5.54611C1.46272 5.51317 1.60535 5.59552 1.60249 5.59377C1.47862 5.51807 1.47585 5.21481 1.59833 5.13686C1.60116 5.13506 1.3865 5.26426 1.47237 5.21258L7.39013 1.61321C7.47462 1.56181 7.57136 1.53403 7.67025 1.53278C7.76915 1.53154 7.86656 1.55686 7.95232 1.60612L13.6712 4.90789C13.7797 4.97061 13.7509 5.11836 13.6438 5.18351L7.70623 8.79459Z'
					fill={`url(#gradient1-${id})`}
				/>
				<path
					d='M7.8946 16.8549L13.8118 13.2552C13.9706 13.1595 14.1026 13.025 14.1953 12.8643C14.2881 12.7037 14.3386 12.5222 14.342 12.3367L14.4997 5.41177C14.5042 5.21402 14.4556 5.01869 14.3589 4.84616C14.2622 4.67363 14.1209 4.53024 13.9498 4.43095L8.23097 1.12918C8.05944 1.03067 7.86462 0.980016 7.66684 0.98251C7.46906 0.985004 7.27558 1.04055 7.1066 1.14335L1.18823 4.74239C1.02938 4.83813 0.897402 4.97261 0.804663 5.13324C0.711923 5.29387 0.661449 5.4754 0.657962 5.66084L0.500291 12.5858C0.495753 12.7836 0.544387 12.9789 0.641117 13.1514C0.737847 13.324 0.879125 13.4673 1.0502 13.5666L6.76844 16.8681C6.94008 16.9671 7.13518 17.0181 7.33332 17.0158C7.53145 17.0135 7.72532 16.9579 7.8946 16.8549ZM13.2464 12.0178C13.2432 12.162 13.2415 12.2341 13.2071 12.2938C13.1726 12.3534 13.111 12.3909 12.9877 12.4658L8.67542 15.0869C8.30447 15.3124 8.11899 15.4251 7.98083 15.3453C7.84268 15.2656 7.84757 15.0486 7.85736 14.6146L7.97112 9.56948C7.97437 9.42527 7.97599 9.35317 8.01045 9.2935C8.0449 9.23383 8.10653 9.19637 8.22979 9.12145L12.5421 6.50037C12.9131 6.2749 13.0985 6.16216 13.2367 6.24193C13.3749 6.32169 13.37 6.53869 13.3602 6.97268L13.2464 12.0178ZM12.0228 4.59403C12.3737 4.7966 12.5491 4.89788 12.5508 5.05128C12.5526 5.20467 12.3795 5.30994 12.0334 5.52047L7.70266 8.15468C7.56973 8.23553 7.50326 8.27596 7.42947 8.2768C7.35567 8.27765 7.2883 8.23875 7.15356 8.16095L3.08669 5.81295C2.73595 5.61045 2.56057 5.50919 2.5588 5.35582C2.55702 5.20245 2.73 5.09717 3.07597 4.88659L7.40527 2.25156C7.53822 2.17064 7.60469 2.13018 7.67851 2.12932C7.75232 2.12847 7.81971 2.16738 7.9545 2.2452L12.0228 4.59403ZM1.72706 7.22397C1.73628 6.81891 1.7409 6.61638 1.87462 6.54119C2.00835 6.466 2.18379 6.56729 2.53467 6.76988L6.59892 9.11637C6.73361 9.19413 6.80095 9.23301 6.83712 9.29731C6.87328 9.36161 6.87153 9.43935 6.86804 9.59484L6.75405 14.6636C6.74494 15.0688 6.74038 15.2714 6.60664 15.3466C6.4729 15.4218 6.29741 15.3205 5.94643 15.1178L1.88074 12.7705C1.74601 12.6927 1.67864 12.6538 1.64248 12.5895C1.60631 12.5252 1.60808 12.4474 1.61162 12.2919L1.72706 7.22397Z'
					fill='hsl(var(--color-brand))'
				/>
				<path
					d='M7.8946 16.8549L13.8118 13.2552C13.9706 13.1595 14.1026 13.025 14.1953 12.8643C14.2881 12.7037 14.3386 12.5222 14.342 12.3367L14.4997 5.41177C14.5042 5.21402 14.4556 5.01869 14.3589 4.84616C14.2622 4.67363 14.1209 4.53024 13.9498 4.43095L8.23097 1.12918C8.05944 1.03067 7.86462 0.980016 7.66684 0.98251C7.46906 0.985004 7.27558 1.04055 7.1066 1.14335L1.18823 4.74239C1.02938 4.83813 0.897402 4.97261 0.804663 5.13324C0.711923 5.29387 0.661449 5.4754 0.657962 5.66084L0.500291 12.5858C0.495753 12.7836 0.544387 12.9789 0.641117 13.1514C0.737847 13.324 0.879125 13.4673 1.0502 13.5666L6.76844 16.8681C6.94008 16.9671 7.13518 17.0181 7.33332 17.0158C7.53145 17.0135 7.72532 16.9579 7.8946 16.8549ZM13.2464 12.0178C13.2432 12.162 13.2415 12.2341 13.2071 12.2938C13.1726 12.3534 13.111 12.3909 12.9877 12.4658L8.67542 15.0869C8.30447 15.3124 8.11899 15.4251 7.98083 15.3453C7.84268 15.2656 7.84757 15.0486 7.85736 14.6146L7.97112 9.56948C7.97437 9.42527 7.97599 9.35317 8.01045 9.2935C8.0449 9.23383 8.10653 9.19637 8.22979 9.12145L12.5421 6.50037C12.9131 6.2749 13.0985 6.16216 13.2367 6.24193C13.3749 6.32169 13.37 6.53869 13.3602 6.97268L13.2464 12.0178ZM12.0228 4.59403C12.3737 4.7966 12.5491 4.89788 12.5508 5.05128C12.5526 5.20467 12.3795 5.30994 12.0334 5.52047L7.70266 8.15468C7.56973 8.23553 7.50326 8.27596 7.42947 8.2768C7.35567 8.27765 7.2883 8.23875 7.15356 8.16095L3.08669 5.81295C2.73595 5.61045 2.56057 5.50919 2.5588 5.35582C2.55702 5.20245 2.73 5.09717 3.07597 4.88659L7.40527 2.25156C7.53822 2.17064 7.60469 2.13018 7.67851 2.12932C7.75232 2.12847 7.81971 2.16738 7.9545 2.2452L12.0228 4.59403ZM1.72706 7.22397C1.73628 6.81891 1.7409 6.61638 1.87462 6.54119C2.00835 6.466 2.18379 6.56729 2.53467 6.76988L6.59892 9.11637C6.73361 9.19413 6.80095 9.23301 6.83712 9.29731C6.87328 9.36161 6.87153 9.43935 6.86804 9.59484L6.75405 14.6636C6.74494 15.0688 6.74038 15.2714 6.60664 15.3466C6.4729 15.4218 6.29741 15.3205 5.94643 15.1178L1.88074 12.7705C1.74601 12.6927 1.67864 12.6538 1.64248 12.5895C1.60631 12.5252 1.60808 12.4474 1.61162 12.2919L1.72706 7.22397Z'
					fill={`url(#gradient2-${id})`}
				/>
			</g>
			<defs>
				<filter
					id={`filter-${id}`}
					x={0.223691}
					y={0.706113}
					width={14.4145}
					height={16.4477}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dx={0.276309} dy={0.276309} />
					<feGaussianBlur stdDeviation={0.0690772} />
					<feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
					<feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
					<feBlend mode='normal' in2='shape' result='effect1_innerShadow_1136_3196' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dx={-0.276309} dy={-0.276309} />
					<feGaussianBlur stdDeviation={0.138154} />
					<feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
					<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
					<feBlend mode='normal' in2='effect1_innerShadow_1136_3196' result='effect2_innerShadow_1136_3196' />
				</filter>
				<linearGradient
					id={`gradient1-${id}`}
					x1={7.5}
					y1={0.982422}
					x2={7.5}
					y2={17.0158}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0.315} stopOpacity={0} />
					<stop offset={0.965} stopOpacity={0.48} />
				</linearGradient>
				<linearGradient
					id={`gradient2-${id}`}
					x1={7.5}
					y1={0.982422}
					x2={7.5}
					y2={17.0158}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0.315} stopOpacity={0} />
					<stop offset={0.965} stopOpacity={0.48} />
				</linearGradient>
			</defs>
		</svg>
	)
}
