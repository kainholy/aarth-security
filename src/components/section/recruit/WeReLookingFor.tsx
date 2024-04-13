import React from 'react'
import Image from 'next/image'

function WeReLookingFor() {
  return (
    <section id='we-re-looking-for' className={'p-recruit-we-re-looking-for__weReLookingFor'}>
        <div className={'p-recruit-we-re-looking-for__container'}>
            <div className={'p-recruit-we-re-looking-for__textArea'}>
                <h2 className={'p-recruit-we-re-looking-for__title c-title3'}>
                    <span className={'p-recruit-we-re-looking-for__titleEn c-title3-en blue'}>Were Looking For</span>
                    <span className={'p-recruit-we-re-looking-for__titleJa c-title3-ja bk'}>求める人物像</span>
                </h2>
                <p className={'p-recruit-we-re-looking-for__text c-body1 gr'}>
                    最初はだれでも初心者です。経験者・未経験問いません。入社後どのように努力し、成長するかが肝心です。業務内容が対『人』なことと同様、人とのつながりを大事にできる人物を求めています。仲間とのつながりにより、互いに切磋琢磨し、個々の成長は会社の成長にも繋がります。プロ集団として一致団結し、皆で前を向いていきたいと考えています。
                </p>
            </div>
            <div className={'p-recruit-we-re-looking-for__imgArea'}>
                <Image
                    src='/recruit/we-re-looking-for/1.webp'
                    alt='堂々たる技術、誠実なサービス'
                    className={'p-recruit-we-re-looking-for__img'}
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </section>
  )
}

export default WeReLookingFor
