import React from 'react'
import Head from 'next/head'
import DetailMv from '@/components/element/DetailMv'
import Contact from '@/components/section/common/Contact'
import Access from '@/components/section/common/Access'
import Footer from '@/components/layout/Footer'
import WeReLookingFor from '@/components/section/recruit/WeReLookingFor'
import OurLogo from '@/components/section/common/OurLogo'
import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'
import RecruitInfo from '@/components/section/recruit/RecruitInfo'

const headData = {
  title: "採用情報 | Aarth Security",
  description: "アースセキュリティでのキャリアを始めませんか？私たちは情熱を持って安全な社会を作り上げる仲間を求めています。豊富な研修プログラム、競争力のある給与体系、そして成長の機会があなたを待っています。一緒に社会に貢献しましょう。",
  keywords: "アースセキュリティ採用, セキュリティ職, 安全業界キャリア, 新卒採用, 経験者採用, 職場環境, 社会貢献, 研修プログラム, 競争力のある給与, 成長機会",
  ogUrl: "http://aarth-security/recruit/"
}

function Recruit() {
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
          <meta property="og:site_name" content={headData.title}/>
        </Head>

        <Header />
        <motion.div
          className='box'
          initial={{ clipPath: "inset(0 0% 0 0%)" }} // 初期状態
          animate={{ clipPath: 'inset(0 0 0 100%)' }} // マウント時
          transition={{ duration: .6, ease: 'easeInOut' }} // アニメーションの設定
          exit={{ clipPath: "inset(0 0% 0 0%)" }}    // アンマウント時
        ></motion.div>
        <div className={'container'}>
            <main>
                <DetailMv en='Recruit' ja='採用情報' />
                <WeReLookingFor />
                <OurLogo />
                <RecruitInfo />
                <Contact />
                <Access />
                <Footer />
            </main>
        </div>
    </>
  )
}

export default Recruit
