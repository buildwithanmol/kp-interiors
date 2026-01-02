'use client'
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
const Portfolio = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section className="relative mx-[1rem] md:px-0" >
      <div className=" grid-cols-4 grid-rows-3 h-[80vh] gap-3 w-full relative hidden md:grid ">
        <div className="relative col-start-1 col-span-2 row-span-2 rounded-tl-3xl overflow-hidden transition-all duration-300 parent_hover"

        >
          <Image alt="portfolio_image"  src={`https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} width={500} height={500} className='w-full h-full object-cover' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> A.K. Advani's Project </h1>
          </div>
        </div>
        <div className=" col-start-3  row-span-3  overflow-hidden transition-all duration-300 parent_hover relative">
          <Image alt="portfolio_image"  src={`https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} width={500} height={500} className='w-full h-full object-cover' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> A.K. Advani's Project </h1>
          </div>
        </div>
        <div className="parent_hover relative col-start-4  row-span-3 rounded-r-3xl overflow-hidden transition-all duration-300 ">
          <Image alt="portfolio_image"  src={`https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} width={500} height={500} className='w-full h-full object-cover' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> A.K. Advani's Project </h1>
          </div>
        </div>
        <div className="parent_hover relative rounded-bl-3xl transition-all duration-300 ">
          <Image alt="portfolio_image"  src={`https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} width={500} height={500} className='w-full h-full object-cover overflow-hidden rounded-bl-2xl' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> A.K. Advani's Project </h1>
          </div>
        </div>
        <div className="parent_hover relative  transition-all duration-300 ">
          <Image alt="portfolio_image"  src={`https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} width={500} height={500} className='w-full h-full object-cover overflow-hidden' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> A.K. Advani's Project </h1>
          </div>
        </div>
        <div>
          <button className="p-4 bg-black text-white px-20 rounded-full absolute  bottom-8 left-1/2 transform -translate-x-1/2 hover:shadow-lg transition-all flex items-center gap-2 button_hover">PORTFOLIO <ArrowRight className="arrow_right" /> </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:hidden relative w-full">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container ">
            {
              [
                'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              ].map((item, index) => (
                <div className="embla__slide " key={index}>
                  <Image alt="portfolio_image"  src={item} width={500} height={500} className="rounded-3xl w-full" />
                </div>
              ))
            }
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
          <button className=" bg-black text-white px-5 py-3  rounded-full  hover:shadow-lg transition-all flex items-center gap-2 button_hover">PORTFOLIO <ArrowRight className="arrow_right" /> </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
