import {tw} from '@/utils/tw'

export const dialogOverlayClass = tw`fixed inset-0 z-50 bg-black/60 contrast-more:bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`

export const dialogContentClass = tw`fixed left-[50%] top-[50%] z-50 flex flex-col translate-x-[-50%] translate-y-[-50%] gap-5 rounded-20 bg-dialog-content/70 contrast-more:bg-dialog-content p-8 shadow-dialog backdrop-blur-3xl contrast-more:backdrop-blur-none duration-200 outline-none max-h-[calc(100%-16px)]`
// TODO: maybe put outline ring when focus: focus:ring-4 ring-black/50
export const dialogContentAnimationClass = tw`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2`
export const dialogContentAnimationSlideClass = tw`data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]`

export const dialogFooterClass = tw`flex flex-col gap-2.5 md:flex-row`
