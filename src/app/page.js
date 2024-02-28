'use client';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "@/app/components/Navber";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
    return (
      <HelmetProvider>
          <Navbar/>
          <HeroSection/>
          <Footer/>
      </HelmetProvider>
  );
}
