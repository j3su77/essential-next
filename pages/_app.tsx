import "../styles/globals.css";
import "../styles/essential.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import { BottomNavbar } from "../components/BottomNavbar/BottomNavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <BottomNavbar />
    </>
  );
}

export default MyApp;
