'use client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import LatestWork from "@/components/LatestWork";
import Achievements from "@/components/Achievements";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Services />
      <LatestWork />
      <Achievements />
      <GetInTouch />
      <Footer />
      <Chatbot />
    </>
  );
}
