import React from 'react'
import styles from '@/styles/section/top/About.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <section className={styles.about} id='about'>
        <div className={styles.container}>
            <div className={styles.overflow}>
                <div className={styles.bgTextArea}>
                    <p className={styles.bgText + ' c-top-about-bg-text ind'}>About Us</p>
                    <p className={styles.bgText + ' c-top-about-bg-text ind'}>About Us</p>
                    <p className={styles.bgText + ' c-top-about-bg-text ind'}>About Us</p>
                </div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.mainCopy + ' c-top-about-main-copy bk'}>
                    堂々たる技術<br />
                    誠実なサービス
                </h2>
                <div className={styles.subArea}>
                    <p className={styles.subCopy + ' c-top-about-sub-copy bk'}>
                        私たちは警備のプロ集団としての誇りを持ち、<br />
                        堂々たる技術と誠実なサービスを<br />
                        ご提供いたします。<br /><br />

                        皆さまの安心安全と信頼のために<br />
                        全力を注ぎます。<br />
                        常に最高品質を心掛け、<br />
                        人とのつながりを大切にし、<br />
                        より安全で笑顔あふれる未来を築きます。
                    </p>
                    <Link className={styles.btn + ' c-btn'} href="/about">
                        <span className={styles.btn__text+' c-btn-text wh'}>私たちについて</span>
                        <span className={styles.arrow+' c-btn-arrow wh'}>→</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles.imgArea}>
            <Image
                src="/top/about/1.png"
                alt="和気藹々としているスタッフたち"
                className={styles.img}
                width={4000}
                height={2000}
            />
        </div>
    </section>
  )
}

export default About
