import React from 'react'
import styles from '@/styles/section/about/CompanyOverview.module.scss'

const data = [
    {
        title: '会社名',
        text: '株式会社アール・ウェイブ',
    },
    {
        title: '設立',
        text: '平成18年7月20日',
    },
    {
        title: '所在地',
        text: '東京都足立区谷中1-23-15',
    },
    {
        title: '役所',
        text: '取締役会長　山田 勝久\n代表取締役　山田 正太',
    },
    {
        title: 'TEL',
        text: '03-5697-9333',
    },
    {
        title: 'FAX',
        text: '03-5697-9333',
    },
]

function CompanyOverview() {
  return (
    <section className={styles.companyOverview} id='company-overview'>
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h2 className={styles.title+' c-title3-bold'}>
                    <span className={styles.titleEn+' c-title3-bold-en blue'}>Company Overview</span>
                    <span className={styles.titleJa+' c-title3-bold-ja bk'}>会社概要</span>
                </h2>
            </div>
            <div className={styles.content}>
                <table className={styles.table}>
                    {
                        data.map((item, index) => (
                            <tr key={index} className={styles.tr}>
                                <th className={styles.th + ' c-about-company-overview-title'}>{item.title}</th>
                                <td className={styles.td + ' c-about-company-overview-text'}>{item.text}</td>
                            </tr>
                        ))
                    }
                    <tr className={styles.tr}>
                        <th className={styles.th + ' c-about-company-overview-title'}>グループ事業</th>
                        <td className={styles.td + ' c-about-company-overview-text'}>
                            <p className={styles.name}>株式会社アール・ウェイブ</p>
                            <p className={styles.department}>洗車・コーティング部門</p>
                            <p className={styles.department}>モーターサイクル部門</p>
                            <p className={styles.department}>警備部門</p>
                            <p className={styles.department}>飲食店部門</p>
                            <p className={styles.name}>ウィンズ株式会社</p>
                            <p className={styles.department}>車両部門</p>
                            <p className={styles.name}>株式会社アース</p>
                            <p className={styles.department}>不動産部門</p>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.th + ' c-about-company-overview-title'}>警備事業内容</th>
                        <td className={styles.td + ' c-about-company-overview-text'}>
                            <p>雑踏(イベント)警備、交通誘導警備、駐車場警備</p>
                            <p className={styles.caption}>※詳細は「サービス内容」ページをご覧ください。</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
  )
}

export default CompanyOverview
