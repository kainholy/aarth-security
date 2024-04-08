import React from 'react'
import Image from 'next/image'
import styles from '@/styles/section/top/Mv.module.scss'
import Link from 'next/link'

function Mv() {
  return (
    <section className={styles.mv}>
      <div className={styles.container}>

          <h1 className={styles.title+' c-top-mv-title ind'}>
              Aarth Security
          </h1>

          <div className={styles.main}>
            <div className={styles.bannerArea}>
              <Link className={styles.banner} href="/recruit">
                <span className={styles.btn__text+' c-btn-text wh'}>仲間募集中！採用情報をcheck</span>
                <span className={styles.arrow+' c-btn-arrow wh'}>→</span>
              </Link>
            </div>
            <p className={styles.text + ' c-top-mv-text ind'}>安心と安全を、先導します。</p>
          </div>
      </div>

      <div className={styles.thumbnailArea}>
        <div className={styles.scrollArea + ' pc'}>
          <div className={styles.circle}>
              <p className={styles.scrollArrow}>↓</p>
          </div>
        </div>
        <Image
          src="/top/mv/thumb.png"
          alt="堂々たる技術、誠実なサービス"
          className={styles.thumbnail + ' pc'}
          width={4000}
          height={2000}
        />
        <Image
          src="/top/mv/thumb_sp.png"
          alt="堂々たる技術、誠実なサービス"
          className={styles.thumbnail + ' sp'}
          width={4000}
          height={2000}
        />
      </div>
    </section>
  )
}

export default Mv
