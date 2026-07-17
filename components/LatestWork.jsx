'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'


const projects = [
  {
    title: 'Project Management App',
    description: 'Full-stack project management app for task tracking, teams, and dashboards.',
    repo: 'https://github.com/dhushyandh/ProjectManagement',
    live: 'https://projectmanage.dhushyandh.in/',
    image: assets.projectmanagementapp,
    tech: 'React,Node.js,Express,MongoDB',
    features: 'Projects,Tasks,Teams,Status tracking',
  },
  {
    title: 'AI Resume Analyser',
    description: 'AI-powered resume analysis tool with automated feedback and suggestions.',
    repo: 'https://github.com/dhushyandh/AIResumeAnalyser',
    live: 'https://cvpilot.dhushyandh.me',
    image: assets.airesume,
    tech: 'Typescript,React,Node.js,Express,PostgreSQL,Gemini API',
    features: 'Resume parsing,Feedback generation,Job matching,Suggestions',
  },
  {
    title: 'E-commerce Website',
    description: 'Ecommerce MERN app with product catalog, cart and checkout.',
    repo: 'https://github.com/dhushyandh/SmartMart',
    live: 'http://campuscart.duckdns.org/',
    image: assets.smartmart,
    tech: 'React,Node.js,Express,MongoDB,AWS S3,EC2,Razorpay',
    features: 'Product listing,Cart,Checkout,Auth,Admin',
  },
  {
    title: 'Online Voting System',
    description: 'Secure online voting platform with admin dashboard.',
    repo: 'https://github.com/dhushyandh/OVS',
    live: 'https://onlinevotingsystem-gexa.onrender.com/',
    image: assets.onlinevoting,
    tech: 'React,Node.js,Express,MongoDB',
    features: 'Voter auth,Admin panel,Result dashboard',
  }, 
]

const moreProjects = [
  {
    title: 'API Integration',
    description: 'Sample API integration project demonstrating external APIs and auth.',
    repo: 'https://github.com/dhushyandh/Weather-App',
    live: 'https://weather-app-rgww.onrender.com',
    image: assets.weatherapp,
    tech: 'APIs,HTML,CSS,JavaScript',
    features: 'Third-party APIs,Token auth,Error handling',
  },
  {
    title: 'Todo-List',
    description: "Todo application built with MERN stack for task creation and management.",
    repo: 'https://github.com/dhushyandh/Todo-List',
    live: 'https://todonotes-seven.vercel.app',
    image: assets.todo,
    tech: 'MongoDB,Express,Node.js,React',
    features: "Listing tasks,Update tasks,Delete tasks",
  },
  {
    title: 'VipStore',
    description: 'Ecommerce website using MERN stack with product listing, cart, checkout and admin.',
    repo: 'https://github.com/dhushyandh/Ecommerce-Website/',
    live: 'https://vipstore-ecom.onrender.com',
    image: assets.vipstore,
    tech: 'React,Node.js,Express,MongoDB,Stripe',
    features: 'OAuth,Product listing,Cart,Checkout,Admin',
  },
  {
    title: 'Authentication App',
    description: 'Authentication app with registration, login, OAuth, and protected routes.',
    repo: 'https://github.com/dhushyandh/authentication',
    live: 'https://auth-c3n9.onrender.com/',
    image: assets.authapp,
    tech: 'React,Node.js,Express,MongoDB,OAuth,Firebase',
    features: 'User registration,Login,OAuth,Protected routes',
  },
]

const LatestWork = () => {
  const [showMore, setShowMore] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    // prevent body scroll while modal open
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    if (typeof document !== 'undefined') document.body.style.overflow = ''
  }

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <motion.section
      id="mywork"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My-PortFolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        These projects represent my hands-on learning and practical experience in web development,
        showcasing full-stack applications built with modern tools and technologies.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-10 gap-5 dark:text-black">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            onClick={() => openModal(project)}
            className="project-card aspect-square flex flex-col border border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="w-full h-2/3 overflow-hidden relative">
              <Image src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`GitHub — ${project.title}`}
                  aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                  className="bg-white p-3 rounded-full shadow hover:bg-black hover:text-white transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.73 .5 .5 5.73 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98.01 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Live demo — ${project.title}`}
                  aria-label={`Open ${project.title} live demo (opens in new tab)`}
                  className="bg-white p-3 rounded-full shadow hover:bg-lime-400 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-3 flex-1">
              <h3 className="text-lg font-semibold text-black">{project.title}</h3>
              <p className="text-xs text-gray-400 mt-2">{project.description}</p>
            </div>
          </motion.article>
        ))}

        {showMore &&
          moreProjects.map((project, index) => (
            <motion.article
              key={project.title}
              onClick={() => openModal(project)}
              className="project-card aspect-square flex flex-col border border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-title={project.title}
              data-description={project.description}
              data-repo={project.repo}
              data-live={project.live}
              data-image={project.image}
              data-tech={project.tech}
              data-features={project.features}
            >
              <div className="w-full h-2/3 overflow-hidden relative">
                <Image src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`GitHub — ${project.title}`}
                      aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                      className="bg-white p-3 rounded-full shadow hover:bg-black hover:text-white transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.73 .5 .5 5.73 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98.01 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Live demo — ${project.title}`}
                    aria-label={`Open ${project.title} live demo (opens in new tab)`}
                    className="bg-white p-3 rounded-full shadow hover:bg-lime-400 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-3 flex-1">
                <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                <p className="text-xs text-gray-400 mt-2">{project.description}</p>
              </div>
            </motion.article>
          ))}
      </div>

        <div className="text-center">
        <button
          type="button"
          id="showMoreBtn"
          aria-expanded={showMore}
          onClick={() => setShowMore((current) => !current)}
          className="flex mt-12 items-center justify-center gap-2 text-gray-700 border border-gray-300 rounded-full py-3 px-10 mx-auto my-20 bg-white shadow-md relative z-30 hover:bg-lightHover duration-500 dark:text-white dark:bg-gray-900 dark:border-white dark:hover:bg-darkHover"
        >
          {showMore ? 'Show Less' : 'Show More'}
          <Image
            src={assets.right_arrow_bold}
            alt="right-arrow"
            width={16}
            height={16}
            className={`w-4 dark:hidden transition-transform ${showMore ? 'rotate-180' : 'rotate-0'}`}
          />
          <Image
            src={assets.right_arrow_bold_dark}
            alt="right-arrow-dark"
            width={16}
            height={16}
            className={`w-4 hidden dark:block transition-transform ${showMore ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
        {/* Modal */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-5xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 md:h-auto md:min-h-105 w-full bg-white">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col bg-white ">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={closeModal}
                    aria-label="Close details"
                    className="p-2 rounded-md cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm mt-3">{selectedProject.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 border border-gray-500 rounded-full p-2 ">
                  {selectedProject.tech?.split(',').map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded">{t.trim()}</span>
                  ))}
                </div>
                <ul className="mt-4 list-disc list-inside text-sm">
                  {selectedProject.features?.split(',').map((f) => (
                    <li key={f} className="mb-1">{f.trim()}</li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-3">
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded hover:opacity-90"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded hover:opacity-90"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
    </motion.section>
  )
}

export default LatestWork
