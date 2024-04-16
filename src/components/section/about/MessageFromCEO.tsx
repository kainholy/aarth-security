import React from 'react'
import Image from 'next/image'

function MessageFromCEO() {
  return (
    <section id='message-from-CEO' className={'p-about-messageFromCEO__messageFromCEO'}>
        <div className={'p-about-messageFromCEO__container'}>
            <div className={'p-about-messageFromCEO__titleArea'}>
                <h2 className={'p-about-messageFromCEO__title c-title3-bold'}>
                    <span className={'p-about-messageFromCEO__titleEn c-title3-bold-en blue'}>Message from CEO</span>
                    <span className={'p-about-messageFromCEO__titleJa c-title3-bold-ja bk'}>代表者メッセージ</span>
                </h2>
            </div>
            <div className={'p-about-messageFromCEO__content'}>
                <div className={'p-about-messageFromCEO__imgArea'}>
                    <Image
                        src='/about/message-from-CEO/1.webp'
                        alt='堂々たる技術、誠実なサービス'
                        className={'p-about-messageFromCEO__img'}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={'p-about-messageFromCEO__inner'}>
                    <div className={'p-about-messageFromCEO__textArea'}>
                        <h3 className={'p-about-messageFromCEO__title c-about-messageFromCEO-title bk'}>団結力をもち飛躍する</h3>
                        <p className={'p-about-messageFromCEO__text c-body1 gr'}>当社は警備のプロ集団としての誇りを胸に、堂々たる技術と誠実なサービスを提供しています。設立としては歴史の浅い部門ですが、従業員個々の経験値は当社の宝であり、誇りです。警備業は人がいなければ成り立ちません。人そのものが会社の財産です。仲間との協力を大切にし、笑顔を絶やさず楽しい職場環境を築く事で、皆様にも笑顔をもたらすことができます。私どもと関わる全ての方々とのコミュニケーションを大切にし、常に最高品質のサービスを提供することに努めてまいります。</p>
                        <p className={'p-about-messageFromCEO__name c-body1 bk'}>代表取締役　山田 正太</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MessageFromCEO
