import React from 'react'
import Image from 'next/image'

const Retailer = () => {
  const Img = 'https://images.unsplash.com/photo-1707926015396-af7c943bbe7f?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <section className='w-full  grid md:grid-cols-4 md:grid-rows-4 grid-rows-7 grid-cols-1 gap-3 h-[200vh] md:px-12 px-4  mt-10'>
    <div className=' md:row-span-2 md:col-span-2  overflow-hidden'>
      <Image src={Img} width={500} height={500} alt='image' className='object-cover w-full h-full object-center'/>
    </div>
    <div className=' md:row-span-2 md:col-start-3 overflow-hidden'>
      <Image src={Img} width={500} height={500} alt='image' className='object-cover w-full h-full object-center'/>
    </div>
    <div className=' md:col-start-4 md:col-span-4 overflow-hidden'>
      <Image src={Img} width={500} height={500} alt='image' className='object-cover w-full h-full object-center'/>
    </div>
    <div className=' md:row-start-2 md:col-start-4 md:col-span-4 overflow-hidden'>
      <Image src={Img} width={500} height={500} alt='image' className='object-cover w-full h-full object-center'/>
    </div>
    <div className=' md:col-span-2 md:col-start-1 overflow-hidden'>
      <Image src={Img} width={500} height={500} alt='image' className='object-cover w-full h-full object-center'/>
    </div>
    <div className='  md:col-span-2 md:row-start-4 md:row-span-4 overflow-hidden'>
      <Image src={Img} width={500} height={500} alt='image' className='object-cover w-full h-full object-center'/>
    </div>
    <div className=' md:row-start-3 md:row-span-5 md:col-span-5 overflow-hidden'>
      <Image src={Img} width={500} height={500} alt='image' className='object-cover w-full h-full object-center'/>
    </div>
  </section>
  )
}

export default Retailer