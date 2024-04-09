import React from 'react'
import Link from 'next/link'
import styles from '@/styles/element/HeaderNav.module.scss'

function HeaderNav({ open }: { open: boolean }) {
  return (
    <nav className={styles.headerNav + ' sp'} aria-hidden={!open}>
        <ul className={styles.list}>
            <li className={styles.link + ' c-header-link ind'}><Link href="/">トップ</Link></li>
            <li className={styles.link + ' c-header-link ind'}><Link href="/service">サービス内容</Link></li>
            <li className={styles.link + ' c-header-link ind'}><Link href="/about">私たちについて</Link></li>
            <li className={styles.link + ' c-header-link ind'}><Link href="/recruit">採用情報</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav
