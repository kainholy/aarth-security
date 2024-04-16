import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { News } from '../../../pages/api/news'


gsap.registerPlugin(ScrollTrigger)

type Props = {
    news: News[]
}

export const NewsList = ( props: Props ) => {
    const { news } = props;
    
    const fadeUpRef = useRef(null)
    useEffect(() => {
        const fadeUp = fadeUpRef.current;
        gsap.fromTo(fadeUp, { autoAlpha: 0, y: 30 }, {
            autoAlpha: 1,
            y: 0,
            duration: .6,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: fadeUp,
                start: 'top 90%',
            },
        });
    })
  return (
    <section id='news' className={'p-top-news__news'}>
        <div className={'p-top-news__container'}>
            <div className={'p-top-news__bg'} ref={fadeUpRef}>
                <div className={'p-top-news__titleArea'}>
                    <h2 className={'p-top-news__title c-title2'}>
                        <span className={'p-top-news__titleEn c-title2-en wh'}>News</span>
                        <span className={'p-top-news__titleJa c-title2-ja wh'}>お知らせ</span>
                    </h2>
                </div>
                <div className={'p-top-news__contents'}>
                    {news.slice(0, 3).map((item, index) => (
                        <div className={'p-top-news__item'} key={index}>
                            <p className={'p-top-news__item__date c-top-news-date wh-gr'}>{new Date(item.publishedAt).toLocaleDateString()}</p>
                            <p className={'p-top-news__item__text c-body1 wh'}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsList
