import type { FC } from 'react'

interface DomeGalleryProps {
  grayscale?: boolean
  fit?: number
  overlayBlurColor?: string
  openedImageWidth?: string
  openedImageHeight?: string
  [key: string]: any
}

declare const DomeGallery: FC<DomeGalleryProps>
export default DomeGallery
