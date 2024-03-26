import React from 'react'
import styles from '@/styles/section/recruit/WeReLookingFor.module.scss'
import Image from 'next/image'

function WeReLookingFor() {
  return (
    <section id='we-re-looking-for' className={styles.weReLookingFor}>
        <div className={styles.container}>
            <div className={styles.textArea}>
                <h2 className={styles.title+' c-title3'}>
                    <span className={styles.titleEn+' c-title3-en blue'}>We're Looking For</span>
                    <span className={styles.titleJa+' c-title3-ja bk'}>求める人物像</span>
                </h2>
                <p className={styles.text+' c-body1 gr'}>
                    最初はだれでも初心者です。経験者・未経験問いません。入社後どのように努力し、成長するかが肝心です。業務内容が対『人』なことと同様、人とのつながりを大事にできる人物を求めています。仲間とのつながりにより、互いに切磋琢磨し、個々の成長は会社の成長にも繋がります。プロ集団として一致団結し、皆で前を向いていきたいと考えています。
                </p>
            </div>
            <div className={styles.imgArea}>
                <Image
                    src='/recruit/we-re-looking-for/1.png'
                    alt='堂々たる技術、誠実なサービス'
                    className={styles.img}
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </section>
  )
}

export default WeReLookingFor
