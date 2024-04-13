import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}