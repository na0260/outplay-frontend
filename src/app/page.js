'use client';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "@/app/components/Navber";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
      <HelmetProvider>
          <Navbar/>
          <Footer/>
      </HelmetProvider>
  );
}
