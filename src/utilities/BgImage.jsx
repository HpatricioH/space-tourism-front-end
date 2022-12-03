import { useState, useEffect } from 'react'

export const BgImage = (props) => {
  const [mobileScreen, setMobileScreen] = useState(true)
  const [tabletScreen, setTabletScreen] = useState(false)

  const { imageBgMobile, imageBgTablet, imageBgDesktop } = props

  const handleWindowScreen = () => {
    window.innerWidth <= 425 ? setMobileScreen(true) : setMobileScreen(false)
    window.innerWidth > 425 && window.innerWidth < 800 ? setTabletScreen(true) : setTabletScreen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowScreen)
  })

  return (
    <img src={mobileScreen ? imageBgMobile : tabletScreen ? imageBgTablet : imageBgDesktop} alt='Earth picture' className='fixed top-0 left-0 min-h-full min-w-full -z-10 object-cover' />
  )
}
