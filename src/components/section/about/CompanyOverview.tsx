import React from 'react'
import styles from '@/styles/section/about/CompanyInfo.module.scss'

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

function CompanyInfo() {
  return (
    <section className={'p-about-company__companyInfo'} id='company-info'>
        <div className={'p-about-company__container'}>
            <div className={'p-about-company__titleArea'}>
                <h2 className={'p-about-company__title c-title3-bold'}>
                    <span className={'p-about-company__titleEn c-title3-bold-en blue'}>Company Info</span>
                    <span className={'p-about-company__titleJa c-title3-bold-ja bk'}>会社概要</span>
                </h2>
            </div>
            <div className={'p-about-company__content'}>
                <table className={'p-about-company__table'}>
                    {
                        data.map((item, index) => (
                            <tr key={index} className={'p-about-company__tr'}>
                                <th className={'p-about-company__th c-about-company-info-title'}>{item.title}</th>
                                <td className={'p-about-company__td c-about-company-info-text'}>{item.text}</td>
                            </tr>
                        ))
                    }
                    <tr className={'p-about-company__tr'}>
                        <th className={'p-about-company__th c-about-company-info-title'}>グループ事業</th>
                        <td className={'p-about-company__td c-about-company-info-text'}>
                            <p className={'p-about-company__name'}>株式会社アール・ウェイブ</p>
                            <p className={'p-about-company__department'}>洗車・コーティング部門</p>
                            <p className={'p-about-company__department'}>モーターサイクル部門</p>
                            <p className={'p-about-company__department'}>警備部門</p>
                            <p className={'p-about-company__department'}>飲食店部門</p>
                            <p className={'p-about-company__name'}>ウィンズ株式会社</p>
                            <p className={'p-about-company__department'}>車両部門</p>
                            <p className={'p-about-company__name'}>株式会社アース</p>
                            <p className={'p-about-company__department'}>不動産部門</p>
                        </td>
                    </tr>
                    <tr className={'p-about-company__tr'}>
                        <th className={'p-about-company__th c-about-company-info-title'}>警備事業内容</th>
                        <td className={'p-about-company__td c-about-company-info-text'}>
                            <p>雑踏(イベント)警備、交通誘導警備、駐車場警備</p>
                            <p className={'p-about-company__caption'}>※詳細は「サービス内容」ページをご覧ください。</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
  )
}

export default CompanyInfo
