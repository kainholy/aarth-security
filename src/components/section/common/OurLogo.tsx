import React from 'react'
import styles from '@/styles/section/common/OurLogo.module.scss'
import Image from 'next/image'

function OurLogo() {
  return (
    <section id='our-logo' className={'p-common-ourLogo__ourLogo'}>
        <div className={'p-common-ourLogo__container'}>
            <h2 className={'p-common-ourLogo__title c-title3'}>
                <span className={'p-common-ourLogo__titleEn c-title3-en blue'}>Our Logo</span>
                <span className={'p-common-ourLogo__titleJa c-title3-ja bk'}>ロゴに込められた思い</span>
            </h2>
            <p className={'p-common-ourLogo__text c-body1 gr'}>
                アースセキュリティのロゴマークは、私たちの信念と使命を象徴しています。
            </p>

            <div className={'p-common-ourLogo__content'}>
                <div className={'p-common-ourLogo__content__left'}>
                    <p className={'p-common-ourLogo__content__title c-about-ourLogo-content-title'}>オオカミ</p>
                    <span className={'p-common-ourLogo__content__line'}></span>
                    <ul className={'p-common-ourLogo__content__list'}>
                        <li className={'p-common-ourLogo__content__text c-about-ourLogo-content-text'}>グループで協力する団結力</li>
                        <li className={'p-common-ourLogo__content__text c-about-ourLogo-content-text'}>大きなものに挑む力強さとスピード</li>
                        <li className={'p-common-ourLogo__content__text c-about-ourLogo-content-text'}>社会的な知性</li>
                    </ul>
                </div>
                <div className={'p-common-ourLogo__content__imgArea'}>
                    <Image
                        src='/about/our-logo/logo.webp'
                        alt='ロゴマーク'
                        className={'p-common-ourLogo__content__img'}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={'p-common-ourLogo__content__right'}>
                    <p className={'p-common-ourLogo__content__title c-about-ourLogo-content-title'}>羽</p>
                    <span className={'p-common-ourLogo__content__line'}></span>
                    <ul className={'p-common-ourLogo__content__list'}>
                        <li className={'p-common-ourLogo__content__text c-about-ourLogo-content-text'}>勇敢な行動への勲章</li>
                        <li className={'p-common-ourLogo__content__text c-about-ourLogo-content-text'}>高く飛んで多くのものをみる力</li>
                        <li className={'p-common-ourLogo__content__text c-about-ourLogo-content-text'}>飛躍や未来の象徴</li>
                    </ul>
                </div>
            </div>

            <div className={'p-common-ourLogo__textArea'}>
                <p className={'p-common-ourLogo__textArea__title c-about-ourLogo-title bk'}>「仲間と団結し、広い視野で物事を捉えて飛躍する。」</p>
                <p className={'p-common-ourLogo__textArea__text c-body2 gr'}>
                    以上のような意味が込められた当社の大切なロゴマークです。<br />
                    経営理念を形にしたデザインで、この標章を身につけることで、あなたも私たちの大切な使命を担う一員となります。
                </p>
            </div>

        </div>
    </section>
  )
}

export default OurLogo
