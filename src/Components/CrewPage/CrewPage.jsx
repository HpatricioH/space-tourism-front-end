import { useSelector, useDispatch } from 'react-redux'
import { getCrewAsync, showCrew } from '../../store/features/crewSlice'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import crewBg from '../../assets/background crew/background-crew-mobile.jpg'
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
        <img src={crewBg} alt='Earth picture' className='fixed min-h-full min-w-full -z-10' />
        <div className='text-center flex flex-col'>
          <p className='text-[1.1rem] font-barlow tracking-[0.25rem] pt-[5.5rem]'><span className='text-[#49494b] font-extrabold'>02 </span>MEET YOUR CREW</p>
        </div>
        <div>
          {crewMembers.map((crew) => {
            return (
              <div key={crew.id} className='px-[1rem]'>
                <div className='flex flex-col justify-center items-center gap-4 tracking-wide'>
                  <div className='border-b-[1px] border-[#59595f] w-full flex justify-center items-center'>
                    <img src={crew.images} alt='crew member' className='w-[13rem] pt-[2.5rem]' />
                  </div>
                  <div className='self-center'>
                    <ul className='relative flex flex-row gap-4 py-2 m-0 p-0 list-none'>
                      <li className='nav__dot-container'><Link to='/crew/1' className={Number(id) === 1 ? 'nav__dot-active' : 'nav__dot'} /></li>
                      <li className='nav__dot-container'><Link to='/crew/2' className={Number(id) === 2 ? 'nav__dot-active' : 'nav__dot'} /></li>
                      <li className='nav__dot-container'><Link to='/crew/3' className={Number(id) === 3 ? 'nav__dot-active' : 'nav__dot'} /></li>
                      <li className='nav__dot-container'><Link to='/crew/4' className={Number(id) === 4 ? 'nav__dot-active' : 'nav__dot'} /></li>
                    </ul>
                  </div>
                  <div className='text-center'>
                    <h3 className='uppercase tracking-[1px]  text-[1rem] text-[#838386]'>{crew.role}</h3>
                    <h2 className='text-[1.5rem] uppercase pt-[0.2rem] pb-[0.8rem] text-[#fff]'>{crew.name}</h2>
                    <p className='font-barlow tracking-[0.2px] text-[1.08rem] text-[#D0D6F9]'>{crew.bio}</p>
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
