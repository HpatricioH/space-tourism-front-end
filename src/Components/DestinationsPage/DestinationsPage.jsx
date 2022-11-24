import destinationBg from '../../assets/background destination/background-destination-mobile.jpg'

export const DestinationsPage = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-20 w-full h-full text-[#fff] font-bellefair'>
      <div className='w-full h-full'><img src={destinationBg} alt='Earth picture' className='object-cover h-fit w-full absolute -z-10' />
        <div className='text-center flex flex-col'>
          <p className='text-[1.1rem] font-barlow tracking-[0.25rem] pt-[6.5rem]'><span className='text-[#49494b] font-extrabold'>01 </span>PICK YOUR DESTINATION</p>

        </div>

      </div>
    </section>
  )
}
