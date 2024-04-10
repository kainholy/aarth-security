import DetailMv from '@/components/element/DetailMv'
import Footer from '@/components/layout/Footer'
import Access from '@/components/section/common/Access'
import Contact from '@/components/section/common/Contact'
import Head from 'next/head'
import React, { useState } from 'react'
import styles from '@/styles/pages/Service.module.scss'
import Tab from '@/components/section/service/Tab'
import Content from '@/components/section/service/Content'
import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'

function Service() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
        <Head>
            <title>Service | Aarth Security</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header />
        <motion.div
          className='box'
          initial={{ clipPath: "inset(0 0% 0 0%)" }} // 初期状態
          animate={{ clipPath: 'inset(0 0 0 100%)' }} // マウント時
          transition={{ delay:.5, duration: .4, ease: 'easeInOut' }} // アニメーションの設定
          exit={{ clipPath: "inset(0 0% 0 0%)" }}    // アンマウント時
          onAnimationStart={() => document.body.style.overflow = 'hidden'}
          onAnimationComplete={() => document.body.style.overflow = 'auto'}
        ></motion.div>
        <div className={styles.container}>
            <main>
                <DetailMv en='Service' ja='サービス内容' />
                <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
                <Content currentTab={currentTab} />
                <Contact />
                <Access />
                <Footer />
            </main>
        </div>
    </>
  )
}

export default Service
