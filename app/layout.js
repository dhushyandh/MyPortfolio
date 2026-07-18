import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop'
import { GoogleAnalytics } from "@next/third-parties/google";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://dhushyandh.in"),

  title: {
    default: "Dhushyandh | MERN Stack Developer",
    template: "%s | Dhushyandh",
  },

  description:
    "Dhushyandh is a MERN Stack Developer specializing in React, Node.js, Express, MongoDB, and modern web applications. View projects and get in touch.",

  keywords: [
    "Dhushyandh",
    "Dhushy",
    "dhushyandh",
    "dhushy",
    "dhushyanth",
    "CAHCET",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Full Stack Developer",
    "Portfolio",
    "India",
    "Software Engineer",
    "Web Portfolio",
    "React Portfolio",
    "Next.js Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Open Source",
  ],

  authors: [
    {
      name: "Dhushyandh",
      url: "https://dhushyandh.in",
    },
  ],

  creator: "Dhushyandh",

  publisher: "Dhushyandh",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://dhushyandh.in",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Dhushyandh | MERN Stack Developer",

    description:
      "Modern full-stack web applications built using React, Next.js, Node.js, Express & MongoDB.",

    url: "https://dhushyandh.in",

    siteName: "Dhushyandh",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhushyandh Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Dhushyandh | MERN Stack Developer",

    description:
      "Modern full-stack web applications built using React, Next.js, Node.js, Express & MongoDB.",

    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} h-full antialiased leading-8 overflow-x-hidden scroll-smooth`}>
      <body
        className="min-h-full flex flex-col"
        style={{ "--font-ovo": ovo.style.fontFamily }}
      >
        <ScrollToTop />
        {children}
        <GoogleAnalytics gaId="G-B04T18BJG1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dhushyandh",
              url: "https://dhushyandh.in",
              image: "https://dhushyandh.in/images/user-image.png",
              jobTitle: "MERN Stack Developer",
              description:
                "MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "Tailwind CSS",
              ],
              sameAs: [
                "https://github.com/dhushyandh",
                "https://linkedin.com/in/dhushyandh",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
