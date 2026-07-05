'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef()
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='bg' className='w-full' />
            </div>
            <nav className={`w-full fixed top-0 left-0 z-50 px-5 py-4 ${isScroll ? 'bg-opacity-50 backdrop-blur-lg shadow-sm':''}`}>
                <div className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-4'>
                    <a href="#home" className='font-extrabold tracking-tight text-xl md:text-2xl'>
                        Dhushyandh<span className='text-primary dark:text-lightPrimary'>.</span>
                    </a>

                    <div className='hidden md:flex flex-1 justify-center'>
                        <ul className={`flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 ${isScroll ? '':'bg-white/80 shadow-sm backdrop-blur/60'} `}>
                            <li><a className='font-Ovo text-sm md:text-base' href="#home">Home</a></li>
                            <li><a className='font-Ovo text-sm md:text-base' href="#about">About</a></li>
                            <li><a className='font-Ovo text-sm md:text-base' href="#services">Services</a></li>
                            <li><a className='font-Ovo text-sm md:text-base' href="#mywork">My Work</a></li>
                            <li><a className='font-Ovo text-sm md:text-base' href="#achievements">Achievements</a></li>
                            <li><a className='font-Ovo text-sm md:text-base' href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
         
                        <a className='hidden lg:inline-flex items-center gap-2 rounded-full border border-gray-500 px-6 py-2.5 font-Ovo text-sm' href="#contact">
                            Contact <Image alt='Contact' src={assets.arrow_icon} className='w-3' />
                        </a>
                        <button className='block md:hidden ml-3' onClick={openMenu}>
                            <Image src={assets.menu_black} alt='menu' className='w-6' />
                        </button>
                    </div>
                </div>

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-6 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-lg transition-transform duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#home">Home</a></li>
                    <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#about">About</a></li>
                    <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#mywork">My Work</a></li>
                    <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
