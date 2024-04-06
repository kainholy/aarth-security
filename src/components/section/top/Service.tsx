import React from 'react'
import styles from '@/styles/section/top/Service.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const data = [
    {
        number: '01',
        img: '/top/service/1.png',
        alt: '雑踏(イベント)警備',
        title: '雑踏(イベント)警備',
        text: 'イベントなどで人が集まる場所において、事故や混乱を防止し、安全な環境を確保します。計画策定から実施まで、お任せください。'
    },
    {
        number: '02',
        img: '/top/service/2.png',
        alt: '交通誘導警備',
        title: '交通誘導警備',
        text: '交通量の多い場所や工事現場において、的確な誘導を行い、事故の発生を防止します。主に建築現場や土木工事などで交通誘導を行います。'
    },
    {
        number: '03',
        img: '/top/service/3.png',
        alt: '駐車場警備',
        title: '駐車場警備',
        text: '安全でスムーズな車両の出入りを確保し駐車場内外のトラブルや事故、犯罪の発生を防止します。最新の技術と熟練の警備員を駆使し、あらゆる駐車場のニーズに対応しております。'
    },
]

function Service() {
  return (
    <section id='service' className={styles.service}>
      <div className={styles.container}>
        <div className={styles.titleArea}>
            <h2 className={styles.title+' c-title2'}>
                <span className={styles.titleEn+' c-title2-en ind'}>Service</span>
                <span className={styles.titleJa+' c-title2-ja ind'}>サービス内容</span>
            </h2>
        </div>
        <div className={styles.contents}>
            {data.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.item__imgArea}>
                        <Image
                            src={item.img}
                            alt={item.alt}
                            className={styles.item__img}
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className={styles.item__textArea}>
                        <p className={styles.item__number+' c-top-service-number ind'}>{item.number}</p>
                        <p className={styles.item__title+' c-top-service-title bk'}>{item.title}</p>
                        <p className={styles.item__text+' c-body1 gr'}>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className={styles.btnArea}>
            <Link href="/service" className={styles.btn+" c-btn"}>
                <span className={styles.btn__text+' c-btn-text wh'}>詳しく見る</span>
                <span className={styles.btn__arrow+' c-btn-text wh'}>→</span>
            </Link>
        </div>

      </div>
    </section>
  )
}

export default Service
