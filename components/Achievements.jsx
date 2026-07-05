"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'

const certificates = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2026',
    description:
      'Completed foundational AWS training covering cloud concepts, core AWS services, security, architecture, pricing, and support.',
    preview: '/certificates/aws.png',
    file: '/certificates/aws.png',
    previewType: 'image',
  },
  {
    title: 'IBM Front-End Development',
    issuer: 'IBM',
    year: '2026',
    description:
      'Completed coursework focused on frontend fundamentals, responsive interfaces, and real-world web development practices.',
    preview: '/certificates/IBM-frontend.png',
    file: '/certificates/IBM-Frontend.pdf',
    previewType: 'image',
  },
  {
    title: 'Python Programming Certificate',
    issuer: 'GUVI',
    year: '2026',
    description: 'Earned certification by completing Python programming modules and practical exercises.',
    preview: '/certificates/Python Certificate - GUVI.png',
    file: '/certificates/Python Certificate - GUVI.pdf',
    previewType: 'image',
  },
  {
    title: 'MERN Stack Development',
    issuer: 'Codec Technologies',
    year: '2026',
    description:
      'Completed MERN stack training covering MongoDB, Express, React, and Node.js backend integration.',
    preview: '/certificates/MERN_Intern.png',
    file: '/certificates/MERN_Intern.png',
    previewType: 'image',
  },
  {
    title: 'OCI AI Foundations',
    issuer: 'Oracle',
    year: '2025',
    description:
      'Completed Oracle Cloud Infrastructure AI Foundations and gained core understanding of AI concepts, services, and use cases.',
    preview: '/certificates/Oracle - oci.png',
    file: '/certificates/Oracle - oci.png',
    previewType: 'image',
  },
  {
    title: 'Amazon Full Stack Development',
    issuer: 'Amazon',
    year: '2026',
    description:
      'Completed Amazon Full Stack certification focused on end-to-end web application development, deployment, and best practices.',
    preview: '/certificates/FullStack - Amazon.png',
    file: '/certificates/FullStack - Amazon.png',
    previewType: 'image',
  },
]

export default function Achievements() {
  const [selected, setSelected] = useState(null)

  const open = (cert) => {
    setSelected(cert)
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
  }
  const close = () => {
    setSelected(null)
    if (typeof document !== 'undefined') document.body.style.overflow = ''
  }

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <motion.div
      id="achievements"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Milestones</h4>
      <h2 className="text-center text-5xl font-Ovo">Achievements & Certifications</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Click any certificate to view details and open the original certificate file.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c, index) => (
          <motion.div
            key={c.title}
            onClick={() => open(c)}
            className="certificate-card aspect-square flex flex-col border border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && open(c)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
          >
            <div className="w-full h-2/3 overflow-hidden relative bg-white">
              {c.previewType === 'image' ? (
                <Image src={c.preview} alt={c.title} fill className="object-cover" />
              ) : (
                <object
                  data={`${c.preview}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="w-full h-full bg-white pointer-events-none"
                />
              )}
            </div>
            <div className="p-3 flex-1">
              <h3 className="text-sm md:text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="text-xs md:text-sm">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-5xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 md:h-auto md:min-h-105 w-full bg-white">
              {selected.previewType === 'image' ? (
                <Image src={selected.preview} alt={selected.title} fill className="object-cover" />
              ) : (
                <object
                  data={`${selected.preview}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="w-full h-full bg-white pointer-events-auto"
                />
              )}
            </div>
            <div className="p-6 flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase text-indigo-600 mb-2">{selected.issuer} • {selected.year}</div>
                  <h3 className="text-2xl font-bold">{selected.title}</h3>
                </div>
                <button onClick={close} aria-label="Close details" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-black mt-3">{selected.description}</p>
              <div className="mt-auto flex gap-3">
                <a
                  href={selected.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded hover:opacity-90"
                >
                  View Certificate
                </a>
                <a
                  href={selected.file}
                  download
                  className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded hover:opacity-90"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
