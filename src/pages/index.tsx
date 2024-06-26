import Head from "next/head";
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
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "@/../libs/client";

const headData = {
  title: "Aarth Security | アースセキュリティは安全と安心を、先導します。",
  description: "アースセキュリティは、企業やイベントの安全を守るための専門警備会社です。雑踏警備、交通誘導、イベント警備など、幅広いサービスで安心を提供します。新入社員募集情報もこちらから。",
  keywords: "アースセキュリティ, 警備会社, 雑踏警備, 交通誘導警備, イベント警備, 企業警備, 採用情報, 安全保障, セキュリティサービス, Aarth Security, Aarth, セキュリティ",
  ogUrl: "http://aarth-security/"
}

type Props =  InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "topnews" });
  return {
      props: {
          news: data.contents,
      },
  };
}

const main: NextPage<Props> = ({ news }) => {
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
        
        <motion.div
          className='box'
          initial={{ clipPath: "inset(0 0% 0 0%)" }} // 初期状態
          animate={{ clipPath: 'inset(0 0 0 100%)' }} // マウント時
          transition={{ duration: .6, ease: 'easeInOut' }} // アニメーションの設定
          exit={{ clipPath: "inset(0 0% 0 0%)" }}    // アンマウント時
        ></motion.div>
        <Header />
        <div className={'container'}>
          <main>
            <Mv />
            <About />
            <Service />
            <Recruit />
            <News news={news}/>
            <Contact />
            <Access />
          </main>
        </div>
        <Footer></Footer>
    </>
  );
}

export default main;
