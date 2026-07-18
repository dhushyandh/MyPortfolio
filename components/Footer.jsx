"use client"

import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-3 cursor-pointer">
            <span className="font-semibold text-lg">Dhushyandh.</span>
          </a>
          <p className="text-sm text-black ">Full-stack developer building responsive, accessible web apps.</p>
        </div>

        <div className="flex flex-col">
          <p className="font-semibold mb-3">Projects</p>
          <nav className="flex flex-col gap-2 text-sm">
            <a className='text-black' href="https://cvpilot.dhushyandh.me" target="_blank">CVPilot</a>
            <a className='text-black' href="https://projectmanage.dhushyandh.me" target="_blank">Project Workspace</a>
            <a className='text-black' href="https://vipstore.dhushyandh.me" target="_blank">Ecommerce</a>
            <a className='text-black' href="https://chat.dhushyandh.me" target="_blank">Chat</a>
            <a className='text-black' href="https://api.dhushyandh.me/docs" target="_blank">API Documentation</a>
          </nav>
        </div>

        <div className="flex flex-col">
          <p className="font-semibold mb-3">Contact</p>
          <a href="mailto:dhushyandhneduncheziyan4896@gmail.com" className="text-sm text-black">dhushyandhneduncheziyan4896@gmail.com</a>
          <div className="flex gap-3 mt-4 text-black">
            <a href="https://github.com/dhushyandh" aria-label="GitHub" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:border-black hover:text-black transition">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/dhushyandh" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:border-blue-700 hover:text-blue-700 transition">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/mr_d7x" aria-label="Instagram" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 p-2 hover:border-pink-500 hover:text-pink-500 transition">
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Dhushyandh. All rights reserved.</div>
    </footer>
  )
}
