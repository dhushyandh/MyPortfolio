'use client'
import { motion } from 'framer-motion'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <motion.section
          id="home"
          className='min-h-screen flex flex-col items-center justify-center px-5 py-24 text-center'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className='mx-auto max-w-4xl space-y-6'>
                <Image src={assets.profile_img} alt='Profile' className='mx-auto  w-42 mt-8 h-36 sm:w-52 sm:h-52 rounded-full object-cover shadow-xl' />
                <div className='inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm'>
                    <span className='h-2 w-2 rounded-full bg-emerald-500 mr-2 inline-block'></span>
                    Open To Work
                </div>
                <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl font-Ovo'>
                    Hi! I'm Dhushyandh <Image src={assets.hand_icon} alt='wave' className='w-6' />
                </h3>
                <h1 className='font-Ovo text-4xl sm:text-5xl lg:text-[66px] font-semibold leading-tight tracking-tight text-slate-950'>
                    Full-Stack Web Developer
                    <span className='block'>based in India.</span>
                </h1>
                <p className='mx-auto max-w-2xl text-base leading-8 text-slate-600 font-Ovo'>
                    I’m a Full Stack Web Developer passionate about building modern, scalable web applications. I focus on creating clean user interfaces, efficient backend APIs, and real-world solutions using JavaScript and the Full stack.
                </p>
                <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
                    <a href="#contact" className='inline-flex items-center justify-center gap-2 rounded-full bg-black px-10 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5'>
                        Contact Me <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
                    </a>
                    <a href="/Dhushyandh_Resume.pdf" download className='inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-10 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50'>
                        My Resume <Image src={assets.download_icon} alt='download' className='w-4' />
                    </a>
                </div>
            </div>
        </motion.section>
    )
}

export default Header
