import { useSelector, useDispatch } from 'react-redux'
import { getDestinationsAsync, showDestinations } from '../../store/features/destinationsSlice'
import destinationBg from '../../assets/background destination/background-destination-mobile.jpg'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const DestinationsPage = () => {
  const destinations = useSelector(showDestinations)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getDestinationsAsync(id))
  }, [id])

  return (
    <section className='flex flex-col justify-center items-center gap-20 w-full h-full text-[#fff] font-bellefair'>
      <div className='w-full h-full'><img src={destinationBg} alt='Earth picture' className='object-cover h-fit w-full absolute -z-10' />
        <div className='text-center flex flex-col'>
          <p className='text-[1.1rem] font-barlow tracking-[0.25rem] pt-[6.5rem]'><span className='text-[#49494b] font-extrabold'>01 </span>PICK YOUR DESTINATION</p>

        </div>

        <div>
          {destinations.map((destination) => {
            return (
              <div key={destination.id} className='px-[1rem]'>
                <div className='flex flex-col justify-center items-center gap-4 uppercase'>
                  <img src={destination.images} className='w-[13rem] pt-[2rem]' alt='moon destination' />
                  <ul className='flex flex-row gap-5 justify-center items-center pt-[0.5rem]'>
                    <li><Link to='/destinations/1'>MOON</Link></li>
                    <li><Link to='/destinations/2'>MARS</Link></li>
                    <li><Link to='/destinations/3'>EUROPA</Link></li>
                    <li><Link to='/destinations/4'>TITAN</Link></li>
                  </ul>
                  <h1 className='text-[3rem]'>{destination.name}</h1>
                  <p className='text-center normal-case tracking-[.029em]'>{destination.description}</p>
                  <div className='border-t-[0.5px] border-[#404046] w-full text-center pt-[1rem]'>
                    <h3>AVG. DISTANCE</h3>
                  </div>
                  <p>{destination.distance}</p>
                  <h3>EST. TRAVEL TIME</h3>
                  <p>{destination.travel}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
