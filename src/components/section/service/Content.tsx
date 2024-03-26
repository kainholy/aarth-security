import React from 'react'
import styles from '@/styles/section/service/Content.module.scss'
import Image from 'next/image'
const data = [
    {
        title: '人が集まる場所において、安全な環境を確保します。',
        text: 'イベントなどで人が集まる場所において、事故や混乱を防止し、安全な環境を確保します。計画策定から実施まで、お任せください。',
        img: '/service/content/1.png',
    },
    {
        title: '交通量の多い場所や工事現場において、事故の発生を防止します。',
        text: '交通量の多い場所や工事現場において、的確な誘導を行い、事故の発生を防止します。主に建築現場や土木工事などで交通誘導を行います。',
        img: '/service/content/2.png',
    },
    {
        title: '安全でスムーズな車両の出入りを確保しトラブルや事故、犯罪の発生を防止します。',
        text: '安全でスムーズな車両の出入りを確保し駐車場内外のトラブルや事故、犯罪の発生を防止します。最新の技術と熟練の警備員を駆使し、あらゆる駐車場のニーズに対応しております。',
        img: '/service/content/3.png',
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
