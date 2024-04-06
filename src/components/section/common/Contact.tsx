import React from 'react'
import styles from '@/styles/section/common/Contact.module.scss'
import Link from 'next/link'

function Contact() {
  return (
    <section id='contact' className={styles.contact}>
        <div className={styles.container}>
            <h2 className={styles.title+' c-title2'}>
                <span className={styles.titleEn+' c-title2-en wh'}>Contact</span>
                <span className={styles.titleJa+' c-title2-ja wh'}>お問い合わせ</span>
            </h2>
            <p className={styles.text+' c-body1 wh'}>
                イベント警備、交通誘導、駐車場警備など<br />
                警備のことならどんなことでもお気軽にご相談ください。
            </p>
            <Link href="/recruit" className={styles.btn+" c-btn"}>
                <span className={styles.btn__text+' c-btn-text ind'}>相談する</span>
                <span className={styles.btn__arrow+' c-btn-text ind'}>→</span>
            </Link>
        </div>
    </section>
  )
}

export default Contact
