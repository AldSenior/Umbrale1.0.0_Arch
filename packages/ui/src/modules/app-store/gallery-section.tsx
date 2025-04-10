import PhotoSwipeLightbox from 'photoswipe/lightbox'
import {Link} from 'react-router-dom'

import 'photoswipe/style.css'

import {useEffect} from 'react'

import {FadeInImg} from '@/components/ui/fade-in-img'
import {Banner} from '@/routes/app-store/use-discover-query'
import {cn} from '@/shadcn-lib/utils'
import {tw} from '@/utils/tw'

export const AppsGallerySection: React.FC<{banners: Banner[]}> = ({banners}) => {
	return (
		<div className={galleryRootClass}>
			{banners.map((banner, i) => (
				<Link
					key={banner.id}
					to={`/app-store/${banner.id}`}
					className={cn(galleryItemClass, 'aspect-2.25 h-[140px] rounded-20 md:h-[316px]')}
					style={{
						animationDelay: `${i * 0.1}s`,
					}}
				>
					<FadeInImg src={banner.image} className='group-focus-visible:opacity-80' alt='' />
				</Link>
			))}
		</div>
	)
}

export const AppGallerySection: React.FC<{gallery: string[]; galleryId: string}> = ({gallery, galleryId}) => {
	useEffect(() => {
		let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
			gallery: '#' + galleryId,
			children: 'a',
			pswpModule: () => import('photoswipe'),
		})
		lightbox.init()

		return () => {
			lightbox?.destroy()
			lightbox = null
		}
	}, [galleryId])

	return (
		<div className={cn(galleryRootClass, 'pswp-gallery')} id={galleryId}>
			{gallery.map((src, i) => (
				<a
					key={src}
					href={src}
					data-pswp-width={2880}
					data-pswp-height={1800}
					className={cn(galleryItemClass, 'aspect-1.6 h-[200px] rounded-12 md:h-[292px]')}
					style={{
						animationDelay: `${i * 0.1}s`,
					}}
					target='_blank'
					rel='noreferrer'
				>
					<FadeInImg src={src} className='group-focus-visible:opacity-80' alt='' />
				</a>
			))}
		</div>
	)
}

export const galleryRootClass = tw`-mx-[70px] px-[70px] umbrel-hide-scrollbar flex gap-2 md:gap-5 overflow-x-auto`

export const galleryItemClass = tw`group shrink-0 bg-white/10 bg-cover outline-none ring-inset focus-visible:ring-4 ring-white/80 animate-in fade-in fill-mode-both slide-in-from-right-10 overflow-hidden`
