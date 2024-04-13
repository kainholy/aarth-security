import React from 'react'

function DetailMv({ en, ja }: { en: string; ja: string }) {
  return (
    <section id='mv' className={'p-element-detail-mv__detailMv'}>
        <div className={'p-element-detail-mv__container'}>
            <h1 className={'p-element-detail-mv__titleArea c-title1'}>
                <span className={'p-element-detail-mv__titleEn c-title1-en ind'}>{ en }</span>
                <span className={'p-element-detail-mv__titleJa c-title1-ja bk'}>{ ja }</span>
            </h1>
        </div>
    </section>
  )
}

export default DetailMv
