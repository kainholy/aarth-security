import React from 'react'
import styles from '@/styles/section/service/Content.module.scss'
import Image from 'next/image'
const data = [
    {
        title: '人が集まる場所において、\n安全な環境を確保します。',
        text: 'イベントなどで人が集まる場所において、事故や混乱を防止し、安全な環境を確保します。計画策定から実施まで、お任せください。\n主催者や施設管理者のニーズを確認しイベント会場や周辺で起こり得る事案を未然に防止し来場者や通行人の秩序と安全を守ります。\nまた、分かりやすい広報を行い、お客様がストレスなくイベントを楽しめるようにご案内を致します。不測の事態が起きても冷静に判断し適切な対応を致します。',
        img: '/service/content/1.webp',
    },
    {
        title: '交通量の多い場所や工事現場において、事故の発生を防止します。',
        text: '交通量の多い場所や工事現場において、的確な誘導を行い、事故の発生を防止します。主に建築現場や土木工事などで交通誘導を行います。\n近隣住民や店舗に協力して頂いてることに感謝して作業を円滑に行える環境作りを致します。\nまた、他の交通に迷惑や事故が起きないように細心の注意を払い安全な現場作りを行います。',
        img: '/service/content/2.webp',
    },
    {
        title: '安全でスムーズな車両の出入りを確保しトラブルや事故、犯罪の発生を防止します。',
        text: '安全でスムーズな車両の出入りを確保し駐車場内外のトラブルや事故、犯罪の発生を防止します。最新の技術と熟練の警備員を駆使し、あらゆる駐車場のニーズに対応しております。\n駐車場のご案内・誘導業務はお客様と一番最初に係わり印象を与えることになるので私たちのご案内がお店やイベント会場の印象が左右されることを意識し駐車場に係わる全ての方にご満足頂ける誘導を致します。',
        img: '/service/content/3.webp',
    },
]
function Content({ currentTab }: { currentTab: number }) {
    const currentTabData = data[currentTab - 1]
    return (
        <section id='content' className={styles.content}>
            <div className={styles.container}>
                {
                    currentTabData && (
                        <>
                            <div className={styles.textArea}>
                                <p className={styles.title+' c-service-content-title'}>{currentTabData.title}</p>
                                <span className={styles.line}></span>
                                <p className={styles.text+' c-service-content-text'}>{currentTabData.text}</p>
                            </div>
                            <div className={styles.imgInner}>
                                <div className={styles.imgArea}>
                                    <Image
                                        src={currentTabData.img}
                                        alt={currentTabData.title}
                                        className={styles.img}
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </section>
    )
}

export default Content
