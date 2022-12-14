import { useSelector, useDispatch } from 'react-redux'
import { getCrewAsync, showCrew } from '../../store/features/crewSlice'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import crewBg from '../../assets/background-crew/background-crew-mobile.jpg'
import crewBgTablet from '../../assets/background-crew/background-crew-tablet.jpg'
import crewBgDesktop from '../../assets/background-crew/background-crew-desktop.jpg'
import { BgImage } from '../../utilities/BgImage'
import '../../styles/activeNavBar.css'

export const CrewPage = () => {
  const crewMembers = useSelector(showCrew)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getCrewAsync(id))
  }, [id])

  return (
    <section className='flex flex-col justify-center items-center gap-20 w-full h-full text-[#fff] font-bellefair mb-[3rem]'>
      <div className='w-full h-full'>
        <BgImage imageBgMobile={crewBg} imageBgTablet={crewBgTablet} imageBgDesktop={crewBgDesktop} />
        <div className='text-center flex flex-col min-[640px]:text-left min-[640px]:pl-[1.5rem]'>
          <p className='text-[1.1rem] font-barlow tracking-[0.25rem] pt-[5.5rem] lg:pt-[10.5rem] lg:pl-[3.8rem] lg:text-[1.5rem]'><span className='text-[#49494b] font-extrabold'>02 </span>MEET YOUR CREW</p>
        </div>
        {crewMembers.map((crew) => {
          return (
            <div key={crew.id} className='px-[1rem] min-[640px]:pt-[2rem] lg:p-0 '>
              <div className='flex flex-col justify-center items-center gap-4 tracking-wide min-[640px]:flex-col-reverse min-[640px]:m-auto min-[640px]:w-[35rem] lg:flex-row-reverse lg:w-[85%] lg:top-[21rem] lg:absolute lg:left-[5rem] '>
                <div className='border-b-[1px] border-[#59595f] w-full flex justify-center items-center min-[640px]:border-none min-[640px]:relative'>
                  <img src={crew.images} alt='crew member' className='w-[13rem] pt-[2.5rem] min-[640px]:w-[auto] min-[640px]:h-[26.7rem] min-[640px]:pt-0 min-[640px]:absolute min-[640px]:top-[0.5rem] lg:h-[35rem] lg:top-[-15.8rem] ' />
                </div>
                <div className='flex flex-col min-[640px]:flex-col-reverse lg:w-[63.6rem]'>
                  <div className='self-center py-[0.5rem] lg:self-start'>
                    <ul className='relative flex flex-row gap-4 py-2 m-0 p-0 list-none'>
                      <li className='nav__dot-container'><Link to='/crew/1' className={Number(id) === 1 ? 'nav__dot-active' : 'nav__dot'} /></li>
                      <li className='nav__dot-container'><Link to='/crew/2' className={Number(id) === 2 ? 'nav__dot-active' : 'nav__dot'} /></li>
                      <li className='nav__dot-container'><Link to='/crew/3' className={Number(id) === 3 ? 'nav__dot-active' : 'nav__dot'} /></li>
                      <li className='nav__dot-container'><Link to='/crew/4' className={Number(id) === 4 ? 'nav__dot-active' : 'nav__dot'} /></li>
                    </ul>
                  </div>
                  <div className='text-center lg:text-left lg:pb-[5rem]'>
                    <h3 className='uppercase tracking-[1px] text-[1rem] text-[#838386] min-[640px]:text-[1.3rem]'>{crew.role}</h3>
                    <h2 className='text-[1.5rem] uppercase pt-[0.2rem] pb-[0.8rem] text-[#fff] min-[640px]:text-[1.9rem] lg:text-[2.5rem]'>{crew.name}</h2>
                    <p className='font-barlow tracking-[0.2px] text-[1.08rem] text-[#D0D6F9] min-[640px]:tracking-[0.5px] lg:w-[24.5rem]'>{crew.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
