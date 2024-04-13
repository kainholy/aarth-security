import React from 'react'
import Image from 'next/image'

function Mission() {
  return (
    <section id='mission' className={'p-about-mission__mission'}>
      <div className={'p-about-mission__container'}>
        <div className={'p-about-mission__inner'}>
          <div className={'p-about-mission__textArea'}>
            <h2 className={'p-about-mission__title c-about-mission-title2'}>
              <span className={'p-about-mission__titleEn c-about-mission-title2-en blue'}>Mission</span>
              <span className={'p-about-mission__titleJa c-about-mission-title2-ja bk'}>堂々たる技術<br />誠実なサービス</span>
            </h2>
            <p className={'p-about-mission__text c-body1 gr'}>
              私たちは警備のプロ集団としての誇りを持ち、<br />
              堂々たる技術と誠実なサービスをご提供いたします。<br />
              皆さまの安心安全と信頼のために全力を注ぎます。<br />
              常に最高品質を心掛け、人とのつながりを大切にし、<br />
              より安全で笑顔あふれる未来を築きます。
            </p>
          </div>
        </div>
        <div className={'p-about-mission__imgArea'}>
          <Image
            src='/about/mission/1.webp'
            alt='堂々たる技術、誠実なサービス'
            className={'p-about-mission__img'}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default Mission
