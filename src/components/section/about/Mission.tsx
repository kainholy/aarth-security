import React from 'react'
import styles from '@/styles/section/about/Mission.module.scss'
import Image from 'next/image'

function Mission() {
  return (
    <section id='mission' className={styles.mission}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.textArea}>
            <h2 className={styles.title+' c-about-mission-title2'}>
              <span className={styles.titleEn+' c-about-mission-title2-en blue'}>Mission</span>
              <span className={styles.titleJa+' c-about-mission-title2-ja bk'}>堂々たる技術<br />誠実なサービス</span>
            </h2>
            <p className={styles.text+' c-body1 gr'}>
              私たちは警備のプロ集団としての誇りを持ち、<br />
              堂々たる技術と誠実なサービスをご提供いたします。<br />
              皆さまの安心安全と信頼のために全力を注ぎます。<br />
              常に最高品質を心掛け、人とのつながりを大切にし、<br />
              より安全で笑顔あふれる未来を築きます。
            </p>
          </div>
        </div>
        <div className={styles.imgArea}>
          <Image
            src='/about/mission/1.png'
            alt='堂々たる技術、誠実なサービス'
            className={styles.img}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default Mission
