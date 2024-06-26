import React from 'react'
import styles from '@/styles/section/about/Philosophy.module.scss'

const data = [
    {
        number: '01',
        title: '堂々たる技術',
        text: '研修や様々な現場を通して培った力・豊富なキャリアを持つプロ集団として、堂々たる技術をお届けいたします。',
    },
    {
        number: '02',
        title: '誠実なサービス',
        text: '常に誠実に、人とのつながりを大切にしながら安心安全を守ります。警備のプロ集団としての自覚を持ち、状況に応じた的確な業務を遂行いたします。',
    },
    {
        number: '03',
        title: '初志貫徹',
        text: '初心を忘れず、仲間と共に成長し合える環境を整えております。',
    }
]

function Philosophy() {
  return (
    <section id='philosophy' className={'p-about-philosophy__philosophy'}>
        <div className={'p-about-philosophy__container'}>
            <div className={'p-about-philosophy__titleArea'}>
                <h2 className={'p-about-philosophy__title c-title3-bold'}>
                    <span className={'p-about-philosophy__titleEn c-title3-bold-en blue'}>Philosophy</span>
                    <span className={'p-about-philosophy__titleJa c-title3-bold-ja bk'}>経営理念</span>
                </h2>
            </div>
            <div className={'p-about-philosophy__content'}>
                {
                    data.map((item, index) => (
                        <div key={index} className={'p-about-philosophy__item'}>
                            <p className={'p-about-philosophy__item__number c-about-philosophy-number blue'}>{item.number}</p>
                            <h3 className={'p-about-philosophy__item__title c-about-philosophy-title bk'}>{item.title}</h3>
                            <p className={'p-about-philosophy__item__text c-body1 gr'}>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Philosophy
