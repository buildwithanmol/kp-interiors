import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from '../components/Menu'
const Header = () => {
  return (
    <nav className={`flex items-center justify-between py-4 px-[1rem] md:px-none`}>
            <Link href="/" className='flex items-end gap-5 '>
                <Image src="/logo.png" alt='logo' width={90}  height={90} className='w-[80px] md:w-auto'  />
                <h2 className='text-3xl md:text-4xl text-zinc-600 transform -translate-y-3 uppercase'> KP Interiors</h2> 
            </Link>
            <Menu/>
            <ul className='items-center gap-5 hidden md:flex'>
                {
                    [
                        {
                            name: 'Home',
                            link: '/'
                        },
                        {
                            name: 'About',
                            link: '/about'
                        },
                        {
                            name: 'Portfolio',
                            link: '/portfolio'
                        },
                        {
                            name: 'Contact',
                            link: '/contact'
                        },
                        {
                            name: 'Call Now',
                            link: 'tel:9820325038'
                        },

                    ].map((item, index) => {
                        return (
                            <Link href={item.link} key={index}>
                                <li className={` text-lg ${index === 4 ? 'bg-accent-primary px-4 py-2 rounded-full text-white hover:bg-accent-primary/70 transition-all' : 'underline_animation'}`}>
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
    </nav>
  )
}

export default Header