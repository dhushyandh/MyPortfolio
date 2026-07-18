'use client'
import { motion } from 'framer-motion'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <motion.div
          id='about'
          className='w-full px-[12%] py-10 scroll-mt-20'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <p className='text-center mb-2 text-lg font-Ovo'>Introduction</p>
            <p className='text-center text-5xl font-Ovo'>About me</p>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none relative'>
                    <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl' />

                    <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/4 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
                        <div className='relative w-full h-full'>
                            <Image src={assets.mern_dev_icon} alt='mern-dev-icon' className='w-full h-full animate-spin_slow object-contain' />
                            <Image src={assets.dev_icon} alt='dev-icon' className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <p
                        className='mb-10 max-w-2xl font-Ovo'
                    >I’m a Full Stack Web Developer and Computer Science student who enjoys building modern, scalable web applications. I focus on creating clean user interfaces, efficient backend APIs, and real-world solutions using JavaScript, React, Node.js, Express, and MongoDB.</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li key={index}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black'>
                                <Image src={icon} alt={title} className='' />
                                <p className='my-4 font-semibold text-gray-700'>{title}</p>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <p className='my-6 text-gray-700 font-Ovo'>Tools I Use</p>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default About
