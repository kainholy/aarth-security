import React from 'react'
import styles from '@/styles/section/about/OurUniform.module.scss'
import Image from 'next/image'

function OurUniform() {
  return (
    <section id='our-uniform' className={styles.ourUniform}>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h2 className={styles.title+' c-title3'}>
            <span className={styles.titleEn+' c-title3-en blue'}>Our Uniform</span>
            <span className={styles.titleJa+' c-title3-ja bk'}>制服の紹介</span>
          </h2>
          <p className={styles.text+' c-body1 gr'}>
            私たちの制服は、ただの作業服ではありません。最高品質と機能性を追求し細部にわたるこだわりが詰まっています。堂々と胸を張って着用できるデザインで、各警備員のプロフェッショナリズムと自信を高めます。また、現場での視認性や動きやすさも考慮されており、最前線で活躍するあなたを全面的にサポートします。
          </p>
        </div>
        <div className={styles.imgArea}>
          <Image
            src='/about/our-uniform/1.webp'
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

export default OurUniform
