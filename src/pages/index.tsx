import Head from "next/head";
import styles from "@/styles/pages/Top.module.scss";
import Mv from "@/components/section/top/Mv";
import About from "@/components/section/top/About";
import Service from "@/components/section/top/Service";
import Recruit from "@/components/section/top/Recruit";
import News from "@/components/section/top/News";
import Contact from "@/components/section/common/Contact";
import Access from "@/components/section/common/Access";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
        <Head>
          <title>Aarth Security | 堂々たる技術、誠実なサービス</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <motion.div
          className='box'
          initial={{ clipPath: "inset(0 0% 0 0%)" }} // 初期状態
          animate={{ clipPath: 'inset(0 0 0 100%)' }} // マウント時
          transition={{ delay: .5, duration: .4, ease: 'easeInOut' }} // アニメーションの設定
          exit={{ clipPath: "inset(0 0% 0 0%)" }}    // アンマウント時
        ></motion.div>
        <Header />
        <div className={styles.container}>
          <main>
            <Mv />
            <About />
            <Service />
            <Recruit />
            <News />
            <Contact />
            <Access />
          </main>
        </div>
        <Footer></Footer>
    </>
  );
}
