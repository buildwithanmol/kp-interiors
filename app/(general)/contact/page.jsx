import Link from 'next/link';
import React from 'react'
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri";

const page = () => {
  return (
    <section className="flex items-center justify-center p-5 flex-col space-y-5 max-w-5xl mx-auto my-0">
      <h1 className="md:text-[5vw] text-[10vw] text-stroke text-center">CONTACT US</h1>
      <section className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 w-full gap-5 md:gap-0'>
        <div className='lg:h-[500px] bg-slate-100 lg:row-span-1 lg:col-span-1 rounded-xl md:rounded-none  md:rounded-tl-3xl p-10 space-y-10 md:mr-1  ' >
          <h2 className='text-4xl'>Details</h2>
          <ul className='space-y-4'>
            <li className='flex gap-3 items-start'><span>
              <RiMapPin2Line className='text-2xl text-primary' /></span> Gala no.11, Gulshan compound, near Royal enfield service center, opp. Apollo tyre, azad nagar, linking road, goregaon west, Mumbai 400104 </li>
            <li className="flex items-start gap-3 ">
              <RiMailLine className="text-2xl text-primary" />
              <span className='flex items-start flex-col'>
                <a href="mailto:kpinteriorsindia@gmail.com">
                  kpinteriorsindia@gmail.com
                </a>
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <a href="tel:+919820325038" className='flex gap-3 items-start'>
                <RiPhoneLine className="text-2xl text-primary" />
                +91 9820325038
              </a>
            </li>
          </ul>
        </div>
        <div className='lg:h-[500px] bg-slate-100 lg:row-span-1 lg:col-start-2  lg:col-span-2 rounded-xl md:rounded-none md:rounded-tr-3xl p-10 space-y-6 md:ml-1'>
          <h2 className='text-4xl'>Connect</h2>
          <div className='flex  gap-3 flex-col '>
            <input type="text" placeholder='Name' className='border border-slate-300 p-2 rounded-lg' />
            <input type="number" placeholder='Phone' className='border border-slate-300 p-2 rounded-lg' />
            <textarea placeholder='Query' className='border border-slate-300 p-2 rounded-lg' cols="30" rows="7"></textarea>
          </div>
          <button type='submit' className='text-white bg-primary p-3 w-full rounded-full bg-accent-primary hover:opacity-80 transition-all'>Submit</button>
        </div>
        <div className='lg:h-96 bg-slate-100 md:mt-2  lg:row-span-2 lg:col-span-2 rounded-xl md:rounded-none  md:rounded-b-3xl overflow-hidden relative'>
          <iframe className='h-full w-full' id="gmap_canvas" src="https://maps.google.com/maps?q=Gala+no.11%2C+Gulshan+compound%2C+near+Royal+enfield+service+center%2C+opp.+Apollo+tyre%2C+azad+nagar%2C+linking+road%2C+goregaon+west%2C+Mumbai+400104&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"  ></iframe>
        </div>
      </section>
    </section>
  )
}


export const metadata = {
  title: "Contact | K.P. Interiors",
  description: "K.P. Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.",
  openGraph: {
    title: 'K.P. Interiors - Transforming Homes into Dream Spaces',
    description: 'K.P. Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.',
    siteName: 'K.P. Interiors',
    images: [
      // {
      //   url: 'https://nextjs.org/og.png',
      //   width: 800,
      //   height: 600,
      // },
      // {
      //   url: 'https://nextjs.org/og-alt.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
      // Add this asap
    ],
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.kpinteriors.com'
  },
  keywords: [
    'interior website', 'kp interiors', 'kp interior designer',
    'kp interior designer website', 'home interiors', 'kp home interiors'
  ]
};

export default page
