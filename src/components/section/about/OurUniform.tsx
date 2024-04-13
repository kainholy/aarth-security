import React from 'react'
import Image from 'next/image'

function OurUniform() {
  return (
    <section id='our-uniform' className={'p-about-our-uniform__ourUniform'}>
      <div className={'p-about-our-uniform__container'}>
        <div className={'p-about-our-uniform__textArea'}>
          <h2 className={'p-about-our-uniform__title c-title3'}>
            <span className={'p-about-our-uniform__titleEn c-title3-en blue'}>Our Uniform</span>
            <span className={'p-about-our-uniform__titleJa c-title3-ja bk'}>制服の紹介</span>
          </h2>
          <p className={'p-about-our-uniform__text c-body1 gr'}>
            私たちの制服は、ただの作業服ではありません。最高品質と機能性を追求し細部にわたるこだわりが詰まっています。堂々と胸を張って着用できるデザインで、各警備員のプロフェッショナリズムと自信を高めます。また、現場での視認性や動きやすさも考慮されており、最前線で活躍するあなたを全面的にサポートします。
          </p>
        </div>
        <div className={'p-about-our-uniform__imgArea'}>
          <Image
            src='/about/our-uniform/1.webp'
            alt='堂々たる技術、誠実なサービス'
            className={'p-about-our-uniform__img'}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default OurUniform
