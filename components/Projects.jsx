'use client'
import React, { useRef } from 'react'
import { qwitcher } from "../utils/font";
import Image from 'next/image';
import gsap from 'gsap';
import ModalGallery from "./ModalGallery"

const Projects = () => {
  const paragraphRef = useRef(null)
  const mouseEnterFunction = (textClass, imageClass) => {
    gsap.to(paragraphRef.current.querySelector(textClass), {
      duration: 0.5,
      height: 'auto',
      overflow: 'visible',
      zIndex: 999,
      color: 'white'
    })
    gsap.to(paragraphRef.current.querySelector(imageClass), {
      duration: 0.5,
      filter: 'brightness(0.5)'
    })
  }
  const mouseLeaveFunction = (textClass, imageClass) => {
    gsap.to(paragraphRef.current.querySelector(textClass), {
      duration: 0.5,
      height: 0,
      overflow: 'hidden'
    })
    gsap.to(paragraphRef.current.querySelector(imageClass), {
      duration: 0.5,
      filter: 'brightness(1)'
    })
  }
  return (
    <section >
      <div className=' hidden md:grid grid-cols-4 grid-rows-2 h-[60vh] space-x-2 space-y-2  w-full ' ref={paragraphRef}>
        <div className='col-span-2 row-span-2  grid place-content-center text-5xl text-center '>
          <h2 className='uppercase tracking-[2px] text-black'>Projects</h2>
          <p className={`${qwitcher.className} text-accent-primary text-6xl font-bold`}>What We Do</p>

          <span className='text-sm space-x-2 mt-6'>
            {
              [
                "Residential",
                "Commercial",
                "Retail",
                "Workshop",
              ].map((item, index) => {
                return <ModalGallery key={index} title={item} />
              })
            }

          </span>
        </div>
        <div className='relative overflow-hidden hover_hidden_div' onMouseEnter={() => {
          mouseEnterFunction('.hidden_text_1', '.image_1')
        }} onMouseLeave={() => {
          mouseLeaveFunction('.hidden_text_1', '.image_1')
        }}>
          <Image alt='residential_image' src='https://images.unsplash.com/photo-1633119713175-c53c29479984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} className='w-full object-cover h-full rounded-tl-3xl image_1' />
          <div className='absolute bottom-8 right-9 z-[99] text-right p-2'>
            <h1 className='text-2xl text-white'> Residential </h1>
            <p className=' hidden_text_1 h-0 overflow-hidden'>
              We take over complete residential projects from scratch.
            </p>
          </div>
          <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
        </div>
        <div className='relative overflow-hidden'
          onMouseEnter={() => {
            mouseEnterFunction('.hidden_text_2', '.image_2')
          }} onMouseLeave={() => {
            mouseLeaveFunction('.hidden_text_2', '.image_2')
          }}
        >
          <Image alt='project_image' src='https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} className='w-full object-cover h-full rounded-tr-3xl image_2' />
          <div className='absolute bottom-8 right-9 z-[99] text-right p-2'>
            <h1 className='text-2xl text-white '> Commercial </h1>
            <p className="hidden_text_2  h-0 overflow-hidden">
              We take over complete commercial projects from scratch.
            </p>
          </div>
          <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
        </div>
        <div className='relative col-start-3 col-span-3 overflow-hidden'
          onMouseEnter={() => {
            mouseEnterFunction('.hidden_text_3', '.image_3')
          }} onMouseLeave={() => {
            mouseLeaveFunction('.hidden_text_3', '.image_3')
          }}
        >
          <Image src='https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} alt='project_image' className='w-full object-cover h-full rounded-b-3xl image_3' />
          <div className=' absolute bottom-7 right-7   bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-44 h-8 rounded-full' />
          <div className='absolute bottom-8 right-9 z-[99] text-right'>
            <h1 className='text-2xl text-white '> Retail </h1>
            <p className="hidden_text_3  h-0 overflow-hidden">
              We take over complete retail projects from scratch.
            </p>
          </div>
        </div>
      </div>

      <div className='md:hidden px-[1rem] md:px-0' >
        <div className=' text-3xl text-center  my-4'>
          <h2 className='uppercase tracking-[2px] text-black'>Projects</h2>
          <p className={`${qwitcher.className} text-accent-primary  font-bold`}>What We Do</p>
          <div className='text-sm space-x-2 my-6 flex items-center overflow-x-scroll'>

            {
              [
                "Residential",
                "Commercial",
                "Retail",
                "Workshop",
              ].map((item, index) => {
                return <ModalGallery key={index} title={item} />
              })
            }
          </div>
        </div>
        <div className='grid grid-cols-1 gap-2' >
          <div className='relative overflow-hidden'>
            <Image alt='residential_image' src='https://images.unsplash.com/photo-1633119713175-c53c29479984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} className='w-full object-cover h-full rounded-t-3xl ' />
            <div className='absolute bottom-8 right-9 z-[99] text-right'>
              <h1 className='text-2xl text-white '> Residential </h1>
            </div>
            <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
          </div>
          <div className='relative overflow-hidden'>
            <Image alt='project_image' src='https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} className='w-full object-cover h-full  image_2' />
            <div className='absolute bottom-8 right-9 z-[99] text-right'>
              <h1 className='text-2xl text-white '> Commercial </h1>
            </div>
            <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
          </div>
          <div className="relative overflow-hidden">
            <Image alt='project_image' src='https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} className='w-full object-cover h-full rounded-b-3xl image_3' />
            <div className='absolute bottom-8 right-9 z-[99] text-right'>
              <h1 className='text-2xl text-white '> Retailers </h1>
            </div>
            <div className='absolute bottom-0  right-16  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-[60%] h-16 ' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects