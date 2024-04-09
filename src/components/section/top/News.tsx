import React, { useEffect, useRef } from 'react'
import styles from '@/styles/section/top/News.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function News() {
    const fadeUpRef = useRef(null)
    useEffect(() => {
        const fadeUp = fadeUpRef.current;
        gsap.fromTo(fadeUp, { autoAlpha: 0, y: 30 }, {
            autoAlpha: 1,
            y: 0,
            duration: .6,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: fadeUp,
                start: 'top 90%',
            },
        });
    })
  return (
    <section id='news' className={styles.news}>
        <div className={styles.container}>
            <div className={styles.bg} ref={fadeUpRef}>
                <div className={styles.titleArea}>
                    <h2 className={styles.title+' c-title2'}>
                        <span className={styles.titleEn+' c-title2-en wh'}>News</span>
                        <span className={styles.titleJa+' c-title2-ja wh'}>お知らせ</span>
                    </h2>
                </div>
                <div className={styles.contents}>
                    <div className={styles.item}>
                        <p className={styles.item__date+' c-top-news-date wh-gr'}>2021.01.01</p>
                        <p className={styles.item__text+' c-body1 wh'}>サイトをリニューアルしました。</p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item__date+' c-top-news-date wh-gr'}>2021.01.01</p>
                        <p className={styles.item__text+' c-body1 wh'}>サイトをリニューアルしました。</p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.item__date+' c-top-news-date wh-gr'}>2021.01.01</p>
                        <p className={styles.item__text+' c-body1 wh'}>サイトをリニューアルしました。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News
