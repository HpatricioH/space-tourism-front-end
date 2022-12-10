import homeBgMobile from '../../assets/background-home/background-home-mobile.jpg'
import homeBgTablet from '../../assets/background-home/background-home-tablet.jpg'
import homeBgDesktop from '../../assets/background-home/background-home-desktop.jpg'
import { BgImage } from '../../utilities/BgImage'

export const HomePage = () => {
  return (
    <>

      <section className='flex flex-col justify-center items-center gap-20 w-full h-full text-[#fff] font-bellefair mb-[2rem]'>
        <div className='w-full h-full lg:flex lg:flex-row'>
          <BgImage imageBgMobile={homeBgMobile} imageBgTablet={homeBgTablet} imageBgDesktop={homeBgDesktop} />
          <div className='lg:flex lg:flex-row lg:m-auto lg:w-[80%] lg:pt-[13.5rem] lg:gap-[10rem]'>
            <div className='text-center flex flex-col px-4 min-[468px]:m-auto min-[468px]:w-[80%] min-[640px]:w-[30rem] lg:text-left'>
              <p className='text-[1rem] font-barlow tracking-[0.20rem] pt-[8rem] text-[#D0D6F9] lg:text-[1.5rem]'>SO, YOU WANT TO TRAVEL TO</p>
              <h1 className='text-[5.3rem] mt-[1rem] min-[468px]:text-[7.3rem] min-[468px]:mt-[0.1rem]'>SPACE</h1>
              <p className='text-[1.2rem] pt-[0.5rem] text-[#D0D6F9] font-barlow min-[468px]:pt-[0] lg:leading-[2rem]'>
                Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className='mt-[6rem] flex justify-center items-center'>
              <button className='bg-white text-[#333] rounded-full w-[10rem] h-[10rem] text-[1.5rem] hover:ring-[2.5rem] hover:outline-none hover:ring-gray-700/[.6] lg:w-[13rem] lg:h-[13rem] lg:hover:ring-[3rem]'>EXPLORE</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
