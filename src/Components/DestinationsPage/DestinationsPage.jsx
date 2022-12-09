import { useSelector, useDispatch } from 'react-redux'
import { getDestinationsAsync, showDestinations } from '../../store/features/destinationsSlice'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import destinationBg from '../../assets/background-destination/background-destination-mobile.jpg'
import destinationBgTablet from '../../assets/background-destination/background-destination-tablet.jpg'
import destinationBgDesktop from '../../assets/background-destination/background-destination-desktop.jpg'
import { BgImage } from '../../utilities/BgImage'
import '../../styles/activeNavBar.css'

export const DestinationsPage = () => {
  const destinations = useSelector(showDestinations)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getDestinationsAsync(id))
  }, [id])

  return (
    <section className='flex flex-col justify-center items-center gap-20 w-full h-full text-[#fff] font-bellefair mb-[3rem]'>
      <div className='w-full h-full'>
        <BgImage imageBgMobile={destinationBg} imageBgTablet={destinationBgTablet} imageBgDesktop={destinationBgDesktop} />
        <div className='text-center flex flex-col min-[640px]:text-left min-[640px]:pl-[1.5rem] '>
          <p className='text-[1.1rem] font-barlow tracking-[0.25rem] pt-[5.5rem]'><span className='text-[#49494b] font-extrabold'>01 </span>PICK YOUR DESTINATION</p>

        </div>

        <div>
          {destinations.map((destination) => {
            return (
              <div key={destination.id} className='px-[1rem]'>
                <div className='flex flex-col justify-center items-center gap-4 uppercase [&_h3]:font-barlow [&_h3]:text-[0.875rem] [&_h3]:tracking-[2.35px] [&_h3]:text-[#D0D6F9] min-[640px]:m-auto min-[640px]:w-[30rem]'>
                  <img src={destination.images} className='w-[13rem] pt-[2rem]' alt='moon destination' />
                  <ul className='flex flex-row gap-5 justify-center items-center pt-[0.5rem] font-barlow text-[1rem] tracking-[2.7px] text-[#D0D6F9]'>
                    <li><Link to='/destinations/1' className={Number(id) === 1 ? 'nav__active' : 'nav__hover'}>MOON</Link></li>
                    <li><Link to='/destinations/2' className={Number(id) === 2 ? 'nav__active' : 'nav__hover'}>MARS</Link></li>
                    <li><Link to='/destinations/3' className={Number(id) === 3 ? 'nav__active' : 'nav__hover'}>EUROPA</Link></li>
                    <li><Link to='/destinations/4' className={Number(id) === 4 ? 'nav__active' : 'nav__hover'}>TITAN</Link></li>
                  </ul>
                  <h1 className='text-[3.5rem] font-bellefair pt-[1rem]'>{destination.name}</h1>
                  <p className='text-center normal-case tracking-[0.5px] leading-[1.7rem] font-barlow pb-[1.5rem] text-[#D0D6F9]'>{destination.description}</p>
                  <div className='flex flex-col justify-center items-center border-t-[0.5px] w-full border-[#59595f] gap-3 min-[640px]:flex-row min-[640px]:gap-[8rem] min-[640px]:items-baseline'>
                    <div>
                      <h3 className='pt-[1.8rem] text-center'>AVG. DISTANCE</h3>
                      <p className='text-[1.75rem]'>{destination.distance}</p>
                    </div>
                    <div>
                      <h3 className='text-center'>EST. TRAVEL TIME</h3>
                      <p className='text-[1.75rem] text-center'>{destination.travel}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
