import React from 'react'
import styles from '@/styles/layout/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <Link href='/' className={styles.logoLink} scroll={false}>
                        <div className={styles.logoArea}>
                            <Image
                                src="/footer/logo.png"
                                alt="Aarth Security"
                                className={styles.logo}
                                width={500}
                                height={500}
                            />
                        </div>
                    </Link>
                    <div className={styles.textArea}>
                        <p className={styles.parentName+' c-footer-name bk'}>株式会社アール・ウェイブ</p>
                        <p className={styles.name+' c-footer-name bk'}>警備部門「<span className={styles.span+' c-footer-name-en'}>Aarth Security</span>」</p>
                        <p className={styles.text+' c-footer-text bk'}>東京都公安委員会認定　第30004855</p>
                    </div>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}><Link className={styles.link+' c-footer-link bk'} href="/" scroll={false}>トップ</Link></li>
                    <li className={styles.item}><Link className={styles.link+' c-footer-link bk'} href="/service" scroll={false}>サービス内容</Link></li>
                    <li className={styles.item}><Link className={styles.link+' c-footer-link bk'} href="/about" scroll={false}>私たちについて</Link></li>
                    <li className={styles.item}><Link className={styles.link+' c-footer-link bk'} href="/recruit" scroll={false}>採用情報</Link></li>
                </ul>
            </div>
            <p className={styles.copy+' c-footer-copy gr'}>©2023 Aarth Security Co., Ltd.</p>
        </div>
        <div className={styles.imgArea}>
            <Image
                src="/footer/1.png"
                alt="Aarth Security"
                className={styles.img + ' pc'}
                width={3000}
                height={2000}
            />
            <Image
                src="/footer/1_sp.png"
                alt="Aarth Security"
                className={styles.img + ' sp'}
                width={1000}
                height={1000}
            />
        </div>
    </footer>
  )
}

export default Footer
