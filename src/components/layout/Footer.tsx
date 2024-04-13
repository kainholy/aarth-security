import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
        <div className={'l-footer__container'}>
            <div className={'l-footer__content'}>
                <div className={'l-footer__main'}>
                    <Link href='/' className={'l-footer__logoLink'} scroll={false}>
                        <div className={'l-footer__logoArea'}>
                            <Image
                                src="/footer/logo.webp"
                                alt="Aarth Security"
                                className={'l-footer__logo'}
                                width={500}
                                height={500}
                            />
                        </div>
                    </Link>
                    <div className={'l-footer__textArea'}>
                        <p className={'l-footer__parentName c-footer-name bk'}>株式会社アール・ウェイブ</p>
                        <p className={'l-footer__name c-footer-name bk'}>警備部門「<span className={'l-footer__span c-footer-name-en'}>Aarth Security</span>」</p>
                        <p className={'l-footer__text c-footer-text bk'}>東京都公安委員会認定　第30004855</p>
                    </div>
                </div>
                <ul className={'l-footer__list'}>
                    <li className={'l-footer__item'}><Link className={'l-footer__link c-footer-link bk'} href="/" scroll={false}>トップ</Link></li>
                    <li className={'l-footer__item'}><Link className={'l-footer__link c-footer-link bk'} href="/service" scroll={false}>サービス内容</Link></li>
                    <li className={'l-footer__item'}><Link className={'l-footer__link c-footer-link bk'} href="/about" scroll={false}>私たちについて</Link></li>
                    <li className={'l-footer__item'}><Link className={'l-footer__link c-footer-link bk'} href="/recruit" scroll={false}>採用情報</Link></li>
                </ul>
            </div>
            <p className={'l-footer__copy c-footer-copy gr'}>©2023 Aarth Security Co., Ltd.</p>
        </div>
        <div className={'l-footer__imgArea'}>
            <Image
                src="/footer/1.webp"
                alt="Aarth Security"
                className={'l-footer__img pc'}
                width={3000}
                height={2000}
            />
            <Image
                src="/footer/1_sp.webp"
                alt="Aarth Security"
                className={'l-footer__img sp'}
                width={1000}
                height={1000}
            />
        </div>
    </footer>
  )
}

export default Footer
