import React from 'react'
import styles from '@/styles/section/top/News.module.scss'

function News() {
  return (
    <section id='news' className={styles.news}>
        <div className={styles.container}>
            <div className={styles.bg}>
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
