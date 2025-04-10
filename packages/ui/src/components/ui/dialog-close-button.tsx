import * as DialogPrimitive from '@radix-ui/react-dialog'
import {RiCloseCircleFill} from 'react-icons/ri'

import {cn} from '@/shadcn-lib/utils'
import {dialogHeaderCircleButtonClass} from '@/utils/element-classes'
import {t} from '@/utils/i18n'

export const DialogCloseButton = ({className}: {className?: React.ReactNode}) => (
	<DialogPrimitive.Close className={cn(dialogHeaderCircleButtonClass, className)}>
		<RiCloseCircleFill className='h-5 w-5 lg:h-6 lg:w-6' />
		<span className='sr-only'>{t('close')}</span>
	</DialogPrimitive.Close>
)
