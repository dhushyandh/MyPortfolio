"use client"

import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

export default function GetInTouch() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section
      id="contact"
      className="relative w-full px-[12%] py-10 scroll-mt-20"
      data-aos="fade-up"
    >
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                  <Image src={assets.header_bg_color} alt='bg' className='w-full' />
              </div>
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo">Have a project or idea? Let’s build something great together.</p>

      <form method="post" action="https://api.web3forms.com/submit" className="max-w-3xl mx-auto">
        <input type="hidden" name="access_key" value="385195b5-efaa-4e75-9797-ec04ec4b17b7" />
        <input type="hidden" name="redirect" value="https://dhushyandh.in/thank-you" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={10}
          className="w-full mt-6 rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400"
          required
        />

        <div className="text-center mt-8">
          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-full shadow hover:opacity-95 cursor-pointer"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </section>
  )
}
