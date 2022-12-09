
export const BgImage = ({ imageBgMobile, imageBgTablet, imageBgDesktop }) => {
  return (
    <picture>
      <source type='image/jpg' srcSet={imageBgTablet} media='(max-width: 1023px)' />
      <source type='image/jpg' srcSet={imageBgDesktop} media='(min-width: 1024px)' />
      <img src={imageBgMobile} alt='Earth picture' className='fixed min-h-full min-w-full -z-10  object-center' />
    </picture>
  )
}
