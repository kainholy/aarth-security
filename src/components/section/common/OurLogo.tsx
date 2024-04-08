import React from 'react'
import styles from '@/styles/section/common/OurLogo.module.scss'
import Image from 'next/image'

function OurLogo() {
  return (
    <section id='our-logo' className={styles.ourLogo}>
        <div className={styles.container}>
            <h2 className={styles.title+' c-title3'}>
                <span className={styles.titleEn+' c-title3-en blue'}>Our Logo</span>
                <span className={styles.titleJa+' c-title3-ja bk'}>ロゴに込められた思い</span>
            </h2>
            <p className={styles.text+' c-body1 gr'}>
                アースセキュリティのロゴマークは、私たちの信念と使命を象徴しています。
            </p>

            <div className={styles.content}>
                <div className={styles.content__left}>
                    <p className={styles.content__title+' c-about-ourLogo-content-title'}>オオカミ</p>
                    <span className={styles.content__line}></span>
                    <ul className={styles.content__list}>
                        <li className={styles.content__text+' c-about-ourLogo-content-text'}>グループで協力する団結力</li>
                        <li className={styles.content__text+' c-about-ourLogo-content-text'}>大きなものに挑む力強さとスピード</li>
                        <li className={styles.content__text+' c-about-ourLogo-content-text'}>社会的な知性</li>
                    </ul>
                </div>
                <div className={styles.content__imgArea}>
                    <Image
                        src='/about/our-logo/logo.png'
                        alt='ロゴマーク'
                        className={styles.content__img}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={styles.content__right}>
                    <p className={styles.content__title+' c-about-ourLogo-content-title'}>羽</p>
                    <span className={styles.content__line}></span>
                    <ul className={styles.content__list}>
                        <li className={styles.content__text+' c-about-ourLogo-content-text'}>勇敢な行動への勲章</li>
                        <li className={styles.content__text+' c-about-ourLogo-content-text'}>高く飛んで多くのものをみる力</li>
                        <li className={styles.content__text+' c-about-ourLogo-content-text'}>飛躍や未来の象徴</li>
                    </ul>
                </div>
            </div>

            <div className={styles.textArea}>
                <p className={styles.textArea__title+' c-about-ourLogo-title bk'}>「仲間と団結し、広い視野で物事を捉えて飛躍する。」</p>
                <p className={styles.textArea__text+' c-body3 gr'}>
                    以上のような意味が込められた当社の大切なロゴマークです。<br />
                    経営理念を形にしたデザインで、この標章を身につけることで、あなたも私たちの大切な使命を担う一員となります。
                </p>
            </div>

        </div>
    </section>
  )
}

export default OurLogo
