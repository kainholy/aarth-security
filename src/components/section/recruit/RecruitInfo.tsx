'use client'
import React from 'react'
import styles from '@/styles/section/recruit/RecruitInfo.module.scss'
import Link from 'next/link'

const data = [
    {
        title: '雇用形態',
        text: 'アルバイト・パート',
    },
    {
        title: '勤務地',
        text: '東京23区、一部市区町村\n最寄駅を考慮し、適正に配置致します。',
    },
    {
        title: '給与',
        text: '日勤10,000円以上\n夜勤11,000円以上',
    },
    {
        title: '交通費',
        text: '交通費全額支給\nマイカー、バイク通勤可(一部規定有)',
    },
    {
        title: '待遇',
        text: '◎制服貸与\n◎交通費全額支給\n◎残業代別途支給\n◎直行直帰OK！\n◎早期業務終了時にも日給満額保証！\n◎社会保険完備',
    },
    {
        title: '研修',
        text: '警備業法に基づき、3日間の研修を実施しています。',
    },
    {
        title: '面接',
        text: '03-5697-9333',
    },
]

function RecruitInfo() {
  return (
    <section className={styles.recruitInfo} id='recruit-info'>
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h2 className={styles.title+' c-title3-bold'}>
                    <span className={styles.titleEn+' c-title3-bold-en blue'}>Recruit Info</span>
                    <span className={styles.titleJa+' c-title3-bold-ja bk'}>募集要項</span>
                </h2>
            </div>
            <div className={styles.content}>
                <table className={styles.table}>
                    {
                        data.map((item, index) => (
                            <tr key={index} className={styles.tr}>
                                <th className={styles.th + ' c-about-recruit-info-title'}>{item.title}</th>
                                <td className={styles.td + ' c-about-recruit-info-text'}>{item.text}</td>
                            </tr>
                        ))
                    }
                    <tr className={styles.tr}>
                        <th className={styles.th + ' c-about-recruit-info-title'}>研修</th>
                        <td className={styles.td + ' c-about-recruit-info-text'}>
                            <p>雑踏(イベント)警備、交通誘導警備、駐車場警備</p>
                            <p className={styles.caption}>※1日9,000円・3日間27,000円</p>
                            <p className={styles.caption}>※スケジュールは3日連続でなくてOK！土日も研修可。</p>
                            <p className={styles.caption}>※研修時の交通費も全額支給します！</p>
                            <p className={styles.caption}>※希望者には美味しいまかない付き！(一食400円)</p>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.th + ' c-about-recruit-info-title'}>面接</th>
                        <td className={styles.td + ' c-about-recruit-info-text'}>
                            面接は30分程度です。お気軽にどうぞ！<br />
                            応募フォームよりご予約の上、履歴書(顔写真添付)持参してください。<br />
                            面接地は、足立区神明1-2-8にて行います。<br />
                            目印は車両の展示されているショールームです。
                        </td>
                    </tr>
                </table>
            </div>

            <Link className={styles.btn + ' c-btn'} href="tel:03-5697-9333">
                <span className={styles.btn__text+' c-btn-text wh'}>相談する</span>
                <span><svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.59255 1.2314C0.630598 1.85528 0.441626 3.80541 0.804806 5.39482C1.08765 6.63256 1.68899 8.2929 2.70301 9.85636C3.65692 11.3272 4.98777 12.646 6.00255 13.4091C7.30567 14.3889 9.16332 15.0116 10.1253 14.3878C10.6117 14.0723 11.3344 13.2104 11.3673 13.0557C11.3673 13.0557 10.9436 12.4023 10.8506 12.2589L9.42946 10.0678C9.32386 9.90492 8.66159 10.0538 8.32516 10.2443C7.87133 10.5015 7.45338 11.1914 7.45338 11.1914C7.14221 11.3712 6.88157 11.192 6.33699 10.9414C5.6677 10.6335 4.9152 9.67666 4.31629 8.81005C3.76928 7.90981 3.20252 6.8325 3.19432 6.0958C3.18757 5.49637 3.13031 5.18536 3.42138 4.97454C3.42138 4.97454 4.22179 4.8743 4.64165 4.56483C4.95285 4.33536 5.35882 3.79138 5.25322 3.62852L3.83211 1.43736C3.73912 1.29397 3.31534 0.640559 3.31534 0.640559C3.16066 0.60761 2.07897 0.915938 1.59255 1.2314Z" fill="white"/></svg></span>
            </Link>

        </div>
    </section>
  )
}

export default RecruitInfo
