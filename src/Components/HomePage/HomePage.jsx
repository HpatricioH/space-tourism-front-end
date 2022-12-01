import homeBackground from '../../assets/background-home/background-home-mobile.jpg'

export const HomePage = () => {
  return (
    <>

      <section className='flex flex-col justify-center items-center gap-20 w-full h-full text-[#fff] font-bellefair mb-[2rem]'>
        <div className='w-full h-full'><img
          src={homeBackground} alt='Earth picture' className='fixed top-0 left-0 min-h-full min-w-full -z-10'
                                       />
          <div className='text-center flex flex-col px-4'>
            <p className='text-[1rem] font-barlow tracking-[0.20rem] pt-[8rem] text-[#D0D6F9]'>SO, YOU WANT TO TRAVEL TO</p>
            <h1 className='text-[5.3rem] mt-[2rem]'>SPACE</h1>
            <p className='text-[1.2rem] pt-[2rem] text-[#D0D6F9] font-barlow'>
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className='mt-[6rem] flex justify-center items-center'>
            <button className='bg-white text-[#333] rounded-full w-[10rem] h-[10rem] text-[1.5rem] hover:ring-[2.5rem] hover:outline-none hover:ring-gray-700/[.6]'>EXPLORE</button>
          </div>
        </div>
      </section>

    </>
  )
}
