import React from 'react'
import Image from 'next/image'
import styles from '@/styles/section/top/Mv.module.scss'
import Link from 'next/link'

function Mv() {
  return (
    <section className={styles.mv}>
      <div className={styles.container}>

          <div className={styles.main}>
            <h1 className={styles.title+' c-top-mv-title bk'}>
                堂々たる技術<br/>
                誠実なサービス
            </h1>
            <div className={styles.company}>
                <div className={styles.logoArea}>
                    <Image
                        src="/top/mv/logo.png"
                        alt="Aarth Security Logo"
                        className={styles.logo}
                        width={300}
                        height={300}
                    />
                </div>
                <div className={styles.textArea}>
                    <p className={styles.name+' c-top-mv-company-name bk'}>Aarth Security</p>
                    <span className={styles.span}></span>
                    <p className={styles.parent+' c-top-mv-parent-company-name bk'}>株式会社アールウェイブ</p>
                </div>
            </div>
          </div>

          <div className={styles.sub}>
            <div className={styles.bannerArea}>
              <Link className={styles.banner} href="/recruit">
                <span className={styles.btn__text+' c-btn-text wh-gr'}>仲間募集中！採用情報をcheck</span>
                <span className={styles.arrow+' c-btn-arrow wh-gr'}>→</span>
              </Link>
            </div>
            <ul className={styles.list}>
              <li className={styles.item}><Link className={styles.link+' c-top-mv-link-text bk'} href="/service">サービス内容</Link></li>
              <li className={styles.item}><Link className={styles.link+' c-top-mv-link-text bk'} href="/about">私たちについて</Link></li>
              <li className={styles.item}><Link className={styles.link+' c-top-mv-link-text bk'} href="/recruit">採用情報</Link></li>
            </ul>
          </div>
      </div>

      <div className={styles.thumbnailArea}>
        <Image
          src="/top/mv/thumb.png"
          alt="堂々たる技術、誠実なサービス"
          className={styles.thumbnail}
          width={4000}
          height={2000}
        />
      </div>
    </section>
  )
}

export default Mv
