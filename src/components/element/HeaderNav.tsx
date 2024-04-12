import React from 'react'
import Link from 'next/link'
import styles from '@/styles/element/HeaderNav.module.scss'

function HeaderNav({ open }: { open: boolean }) {
  return (
    <nav className={styles.headerNav + ' sp'} aria-hidden={!open}>
        <ul className={styles.list}>
            <li className={styles.link + ' c-han-nav-link ind'}><Link href="/" scroll={false}>トップ</Link></li>
            <li className={styles.link + ' c-han-nav-link ind'}><Link href="/service" scroll={false}>サービス内容</Link></li>
            <li className={styles.link + ' c-han-nav-link ind'}><Link href="/about" scroll={false}>私たちについて</Link></li>
            <li className={styles.link + ' c-han-nav-link ind'}><Link href="/recruit" scroll={false}>採用情報</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav
