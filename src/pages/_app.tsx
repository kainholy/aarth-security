import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import { useEffect } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

const routeChange = () => {
  const tempFix = () => {
    const allStyleElements = document.querySelectorAll('link')
    allStyleElements.forEach((elem) => {
      if (elem.as === 'style') {
        elem.rel = 'stylesheet'
      }
    })
  }
  tempFix()
}
Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );