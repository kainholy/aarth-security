'use client'
import DetailMv from '@/components/element/DetailMv'
import Footer from '@/components/layout/Footer'
import MessageFromCEO from '@/components/section/about/MessageFromCEO'
import Mission from '@/components/section/about/Mission'
import OurLogo from '@/components/section/common/OurLogo'
import OurUniform from '@/components/section/about/OurUniform'
import Philosophy from '@/components/section/about/Philosophy'
import Access from '@/components/section/common/Access'
import Contact from '@/components/section/common/Contact'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/pages/About.module.scss'
import Header from '@/components/layout/Header'
import CompanyOverview from '@/components/section/about/CompanyOverview'
import { motion } from 'framer-motion'

const headData = {
  title: "会社概要 | Aarth Security",
  description: "アースセキュリティは、安全と安心を社会に提供することを使命とする警備会社です。「堂々たる技術で安全を届ける」「誠実なサービスを提供する」「初心を忘れない」を経営理念に掲げ、業界のリーダーとしての地位を築いています。私たちの物語、使命、そして未来のビジョンを知ってください。",
  keywords: "アースセキュリティ, 会社概要, 経営理念, ミッション, 代表者メッセージ, 安全保障サービス, 社会貢献, セキュリティ業界, 企業文化, 安全と安心",
  ogUrl: "http://aarth-security/about/index.html"
}

function About() {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <title>{headData.title}</title>
            <meta name="description" content={headData.description} />
            <meta name="keywords" content={headData.keywords}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={headData.title}/>
            <meta property="og:description" content={headData.description}/>
            <meta property="og:url" content={headData.ogUrl} />
        </Head>

        <Header />
        <motion.div
          className='box'
          initial={{ clipPath: "inset(0 0% 0 0%)" }} // 初期状態
          animate={{ clipPath: 'inset(0 0 0 100%)' }} // マウント時
          transition={{ duration: .6, ease: 'easeInOut' }} // アニメーションの設定
          exit={{ clipPath: "inset(0 0% 0 0%)" }}    // アンマウント時
        ></motion.div>
        <div className={styles.container}>
            <main>
                <DetailMv en='About Us' ja='私たちについて' />
                <Mission />
                <Philosophy />
                <MessageFromCEO />
                <OurUniform />
                <OurLogo />
                <CompanyOverview />
                <Contact />
                <Access />
                <Footer />
            </main>
        </div>
    </>
  )
}

export default About
