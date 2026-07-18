import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Pagenotfound = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-linear-to-br from-[#f8fafc] via-white to-[#fff7ed] px-5 py-16 text-slate-900">
      <div className="relative mx-auto flex max-w-5xl flex-col overflow-hidden rounded-4xl border border-slate-200/70 bg-white/80 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
        <div className="p-10 lg:px-10 lg:py-14">
          <span className="mb-5 inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-700">
            404 • Page not found
          </span>
          <p className="font-Ovo text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Oops! This page went missing.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            The link you opened doesn’t exist on my portfolio. It may be a typo, an old URL, or a page that moved.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/"
              className="rounded-full bg-linear-to-r from-[#b820e6] to-[#da7d20] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Go to homepage
            </a>
            <a
              href="/#work"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              See my projects
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-600">
            Broken URL: <span className="font-semibold text-slate-900">{typeof window !== 'undefined' ? window.location.pathname : '/'}</span>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center rounded-[28px] bg-linear-to-br from-[#fdf2f8] via-white to-[#fff7ed] p-6 shadow-inner sm:p-8">
          <Image src={assets.profile_img} alt="Dhushyandh profile" width={176} height={176} className="rounded-full border-4 border-white object-cover shadow-lg" />
          <div className="mt-6 text-center">
            <p className="font-Ovo text-2xl text-slate-800">Dhushyandh</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">MERN stack developer</p>
          </div>
          <div className="mt-6 flex gap-3">
            <span className="h-3 w-3 rounded-full bg-fuchsia-500"></span>
            <span className="h-3 w-3 rounded-full bg-orange-500"></span>
            <span className="h-3 w-3 rounded-full bg-slate-500"></span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pagenotfound
