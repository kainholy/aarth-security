import React from 'react'
import styles from '@/styles/section/about/MessageFromCEO.module.scss'
import Image from 'next/image'

function MessageFromCEO() {
  return (
    <section id='message-from-CEO' className={styles.messageFromCEO}>
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h2 className={styles.title+' c-title2'}>
                    <span className={styles.titleEn+' c-title2-en blue'}>Message from CEO</span>
                    <span className={styles.titleJa+' c-title2-ja bk'}>代表者メッセージ</span>
                </h2>
            </div>
            <div className={styles.content}>
                <div className={styles.content}>
                    <div className={styles.imgArea}>
                        <Image
                            src='/about/message-from-CEO/1.png'
                            alt='堂々たる技術、誠実なサービス'
                            className={styles.img}
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className={styles.inner}>
                        <div className={styles.textArea}>
                            <h3 className={styles.title+' c-about-messageFromCEO-title bk'}>団結力をもち飛躍する</h3>
                            <p className={styles.text+' c-body1 gr'}>当社は警備のプロ集団としての誇りを胸に、堂々たる技術と誠実なサービスを提供しています。設立としては歴史の浅い部門ですが、従業員個々の経験値は当社の宝であり、誇りです。警備業は人がいなければ成り立ちません。人そのものが会社の財産です。仲間との協力を大切にし、笑顔を絶やさず楽しい職場環境を築く事で、皆様にも笑顔をもたらすことができます。私どもと関わる全ての方々とのコミュニケーションを大切にし、常に最高品質のサービスを提供することに努めてまいります。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MessageFromCEO
