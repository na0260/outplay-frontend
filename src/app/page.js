'use client';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "@/app/components/Navber";

export default function Home() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
      <HelmetProvider>
          <Navbar/>
          {ScrollToTop}
      </HelmetProvider>
  );
}
