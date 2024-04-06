import React from 'react'
import Image from 'next/image'
import styles from '@/styles/layout/Header.module.scss'
import Link from 'next/link'

function Header() {
  return (
    <header className={styles.header} id='header'>
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.company}>
                    <Link className={styles.logoArea} href='/'>
                        <Image
                            src="/top/mv/logo.png"
                            alt="Aarth Security Logo"
                            className={styles.logo}
                            width={300}
                            height={300}
                        />
                    </Link>
                    <div className={styles.textArea}>
                        <p className={styles.name+' c-header-company-name bk'}>Aarth Security</p>
                        <span className={styles.span}></span>
                        <p className={styles.parent+' c-header-parent-company-name bk'}>株式会社アールウェイブ</p>
                    </div>
                </div>
            </div>
            <div className={styles.sub}>
                <ul className={styles.list}>
                    <li className={styles.link + ' c-header-link bk'}><Link href="/service">サービス内容</Link></li>
                    <li className={styles.link + ' c-header-link bk'}><Link href="/about">私たちについて</Link></li>
                    <li className={styles.link + ' c-header-link bk'}><Link href="/recruit">採用情報</Link></li>
                    <li className={styles.contact + ' c-header-link wh'}>
                        <Link href="tel:03-5697-9333" className={styles.contactText}>
                            <span>お問い合わせ</span>
                            <span><svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.59255 1.2314C0.630598 1.85528 0.441626 3.80541 0.804806 5.39482C1.08765 6.63256 1.68899 8.2929 2.70301 9.85636C3.65692 11.3272 4.98777 12.646 6.00255 13.4091C7.30567 14.3889 9.16332 15.0116 10.1253 14.3878C10.6117 14.0723 11.3344 13.2104 11.3673 13.0557C11.3673 13.0557 10.9436 12.4023 10.8506 12.2589L9.42946 10.0678C9.32386 9.90492 8.66159 10.0538 8.32516 10.2443C7.87133 10.5015 7.45338 11.1914 7.45338 11.1914C7.14221 11.3712 6.88157 11.192 6.33699 10.9414C5.6677 10.6335 4.9152 9.67666 4.31629 8.81005C3.76928 7.90981 3.20252 6.8325 3.19432 6.0958C3.18757 5.49637 3.13031 5.18536 3.42138 4.97454C3.42138 4.97454 4.22179 4.8743 4.64165 4.56483C4.95285 4.33536 5.35882 3.79138 5.25322 3.62852L3.83211 1.43736C3.73912 1.29397 3.31534 0.640559 3.31534 0.640559C3.16066 0.60761 2.07897 0.915938 1.59255 1.2314Z" fill="white"/></svg></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
