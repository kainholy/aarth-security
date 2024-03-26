import React from 'react'
import styles from '@/styles/element/DetailMv.module.scss'

function DetailMv({ en, ja }: { en: string; ja: string }) {
  return (
    <section id='mv' className={styles.detailMv}>
        <div className={styles.container}>
            <h1 className={styles.titleArea+' c-title1'}>
                <span className={styles.titleEn+' c-title1-en blue'}>{ en }</span>
                <span className={styles.titleJa+' c-title1-ja bk'}>{ ja }</span>
            </h1>
        </div>
    </section>
  )
}

export default DetailMv
