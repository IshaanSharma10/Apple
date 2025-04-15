import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import watchImg from '../../public/assets/images/watch.svg'
import rightimg from '../../public/assets/images/right.svg'
import VideoCarousel from './Videocarousel'

const Highlights = () => {

 useGSAP(()=>{
     gsap.to('#title', {
      opacity:1,
      y:0
     })

     gsap.to('.link', {
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25
     })
 },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
       <div className='screen-max-width'>
        <div className='mb-12 w-full flex items-end justify-between'>
            <h1 id='title' className='section-heading'>
              Get the highlights.
            </h1>

            <div className='flex flex-wrap items-end gap-5'>
              <p className='link'>
                Watch the film
                <img src={watchImg} alt="Watch"  className='ml-2'/>
              </p>
              <p className='link'>
                Watch the Event
                <img src={rightimg} alt="Watch"  className='ml-2'/>
              </p>
            </div>
        </div>

        <VideoCarousel/>
       </div>
    </section>
  )
}

export default Highlights
