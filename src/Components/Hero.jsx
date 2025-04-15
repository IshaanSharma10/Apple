import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import HeroVideo from '../../public/assets/videos/hero.mp4'
import smallvid from '../../public/assets/videos/smallHero.mp4'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== 'undefined' && window.innerWidth < 760 ? smallvid : HeroVideo
  )

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallvid)
    } else {
      setVideoSrc(HeroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
    })

    gsap.to('#cta' ,{
      opacity:1,
      y:-50,
      delay:1.5
    })
  }, [])

  return (
    <section className='w-full min-h-screen bg-black flex flex-col items-center justify-center relative text-white overflow-hidden'>
      <div className='flex flex-col items-center justify-center mb-6'>
        <p
          id='hero'
          className='text-4xl md:text-6xl font-semibold tracking-wide opacity-0 transition-all duration-500'
        >
          iPhone 16 Pro
        </p>
      </div>
      <div className='w-11/12 md:w-3/4 lg:w-1/2'>
        <video
          className='w-full h-auto rounded-xl shadow-xl pointer-events-none'
          autoPlay
          muted
          playsInline
          key={videoSrc}
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 mt-8 space-y-4'>
  <a
    href="#highlights"
    className='bg-white text-black px-6 py-3 rounded-full font-semibold text-lg shadow-md  hover:text-blue hover:border-blue hover:scale-105 transition-all duration-300'
  >
    Buy
  </a>
  <p className='font-normal text-xl text-white'>From $199/month or $999</p>
</div>

    </section>
  )
}

export default Hero
