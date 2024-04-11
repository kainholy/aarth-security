'use client'
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

const headData = {
  title: "サービス内容 | Aarth Security",
  description: "アースセキュリティのサービス内容ページへようこそ。私たちは雑踏警備、交通誘導、イベント警備など、あらゆるニーズに応じた専門的なセキュリティサービスを提供します。安心と安全を守るために、最先端の技術と熟練のプロフェッショナルがあなたのニーズに応えます。",
  keywords: "セキュリティサービス, 雑踏警備, 交通誘導, イベント警備, プロフェッショナル警備, 安全管理, セキュリティ技術, 安心安全, アースセキュリティサービス",
  ogUrl: "http://aarth-security/service/index.html"
}

function Service() {
  const [currentTab, setCurrentTab] = useState(1)
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
