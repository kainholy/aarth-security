import React from 'react'
import styles from '@/styles/section/top/Recruit.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function Recruit() {
  return (
    <section id='recruit' className={styles.recruit}>
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.textArea}>
                    <h2 className={styles.title+' c-title2'}>
                        <span className={styles.titleEn+' c-title2-en blue'}>Recruit</span>
                        <span className={styles.titleJa+' c-title2-ja bk'}>採用情報</span>
                    </h2>
                    <p className={styles.text+' c-top-recruit-text'}>
                        豊富な経験を持つ仲間と一緒に警備のプロとして、<br />
                        安心安全な未来を築きませんか。<br /><br />

                        共に努力し、成長し、<br />
                        ときには和気藹々と笑い合える、<br />
                        そんな充実した時間を共有しましょう。<br /><br />

                        警備業は人が財産です。<br />
                        共に切磋琢磨できる新たな仲間を歓迎します。
                    </p>
                    <Link href="/recruit" className={styles.btn+" c-btn"}>
                        <span className={styles.btn__text+' c-btn-text wh-gr'}>詳しく見る</span>
                        <span className={styles.btn__arrow+' c-btn-text wh-gr'}>→</span>
                    </Link>
                </div>
            </div>
            <div className={styles.imgArea}>
                <Image
                    src='/top/recruit/1.png'
                    alt='採用情報'
                    className={styles.img}
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </section>
  )
}

export default Recruit
