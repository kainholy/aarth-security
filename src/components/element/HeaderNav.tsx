import React from 'react'
import Link from 'next/link'

function HeaderNav({ open }: { open: boolean }) {
  return (
    <nav className={'p-element-header-nav__headerNav sp'} aria-hidden={!open}>
        <ul className={'p-element-header-nav__list'}>
            <li className={'p-element-header-nav__link c-han-nav-link ind'}><Link href="/" scroll={false}>トップ</Link></li>
            <li className={'p-element-header-nav__link c-han-nav-link ind'}><Link href="/service" scroll={false}>サービス内容</Link></li>
            <li className={'p-element-header-nav__link c-han-nav-link ind'}><Link href="/about" scroll={false}>私たちについて</Link></li>
            <li className={'p-element-header-nav__link c-han-nav-link ind'}><Link href="/recruit" scroll={false}>採用情報</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav
