import { useSelector, useDispatch } from 'react-redux'
import { getTechAsync, showTech } from '../../store/features/technologySlice'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import techBg from '../../assets/background technology/background-technology-mobile.jpg'
import '../../styles/activeNavBar.css'

export const TechnologyPage = () => {
  const techData = useSelector(showTech)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getTechAsync(id))
  }, [id])

  return (
    <section className='flex flex-col justify-center items-center gap-20 w-full h-full text-[#fff] font-bellefair mb-[3rem]'>
      <div className='w-full h-full'>
        <img src={techBg} alt='Earth picture' className='fixed min-h-full min-w-full -z-10' />
        <div className='text-center flex flex-col'>
          <p className='text-[1.1rem] font-barlow tracking-[0.25rem] pt-[5.5rem]'><span className='text-[#49494b] font-extrabold'>03 </span>SPACE LAUNCH 101</p>
        </div>
        <div>
          {techData.map((tech) => {
            return (
              <div key={tech.id} className='font-barlow'>
                <div className='relative w-full h-[10rem] pt-[2rem]'>
                  <img src={tech.imglandscape} alt='rocket launching' className='absolute w-full h-full' />
                </div>
                <div className='p-4 flex flex-col justify-center items-center gap-6 pt-[4rem] tracking-wider'>
                  <div>
                    <ul className='flex flex-row gap-8'>
                      <li><Link to='/technology/1' className={Number(id) === 1 ? 'nav__tech-active' : 'nav__tech'}>1</Link></li>
                      <li><Link to='/technology/2' className={Number(id) === 2 ? 'nav__tech-active' : 'nav__tech'}>2</Link></li>
                      <li><Link to='/technology/3' className={Number(id) === 3 ? 'nav__tech-active' : 'nav__tech'}>3</Link></li>
                    </ul>
                  </div>
                  <div className='text-center [&_h2]:text-[#D0D6F9] [&_p]:text-[#D0D6F9]'>
                    <h2>The Terminology...</h2>
                    <h3 className='text-[1.9rem] uppercase'>{tech.name}</h3>
                    <p>{tech.description}</p>
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
