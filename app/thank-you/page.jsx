import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#f8fafc] via-white to-[#fff7ed] px-5 py-16 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-4xl border border-slate-200/70 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
          Message delivered
        </div>
        <p className="font-Ovo text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
          Thank you for reaching out!
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          I received your message and will get back to you soon. In the meantime, feel free to explore my portfolio or connect with me on LinkedIn.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Back to homepage
          </Link>
          <Link href="/#work" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
            View projects
          </Link>
        </div>
      </div>
    </main>
  )
}
