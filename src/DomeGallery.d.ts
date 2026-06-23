declare module './DomeGallery' {
  interface DomeGalleryProps {
    grayscale?: boolean
    fit?: number
    overlayBlurColor?: string
    openedImageWidth?: string
    openedImageHeight?: string
    [key: string]: any
  }
  export default function DomeGallery(props: DomeGalleryProps): JSX.Element
}
