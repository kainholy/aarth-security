'use client'
import React, { useEffect, useRef } from 'react'
import styles from '@/styles/section/top/Service.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Service() {
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const bgSpanRef = useRef(null)
    const bgSpan2Ref = useRef(null)
    const item1Ref = useRef(null)
    const item2Ref = useRef(null)
    const item3Ref = useRef(null)
    const data = [
        {
            ref: item1Ref,
            number: '01',
            img: '/top/service/1.webp',
            alt: '雑踏(イベント)警備',
            title: '雑踏(イベント)警備',
            text: 'イベントなどで人が集まる場所において、事故や混乱を防止し、安全な環境を確保します。計画策定から実施まで、お任せください。'
        },
        {
            ref: item2Ref,
            number: '02',
            img: '/top/service/2.webp',
            alt: '交通誘導警備',
            title: '交通誘導警備',
            text: '交通量の多い場所や工事現場において、的確な誘導を行い、事故の発生を防止します。主に建築現場や土木工事などで交通誘導を行います。'
        },
        {
            ref: item3Ref,
            number: '03',
            img: '/top/service/3.webp',
            alt: '駐車場警備',
            title: '駐車場警備',
            text: '安全でスムーズな車両の出入りを確保し駐車場内外のトラブルや事故、犯罪の発生を防止します。最新の技術と熟練の警備員を駆使し、あらゆる駐車場のニーズに対応しております。'
        },
    ]

    useEffect(() => {
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        const bgSpan = bgSpanRef.current;
        const bgSpan2 = bgSpan2Ref.current;
        const item1 = item1Ref.current;
        const item2 = item2Ref.current;
        const item3 = item3Ref.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text1,
                start: 'top 90%',
            }
        });
        const mm = gsap.matchMedia()
        tl
        .fromTo([text1, text2], { clipPath: "inset(0 100% 0 0)" }, {
            clipPath: "inset(0 0% 0 0)",
            duration: .4,
            ease: 'power3.in'
        })
        .fromTo([bgSpan, bgSpan2], { clipPath: "inset(0 0 0 0%)" }, {
            clipPath: "inset(0 0 0 100%)",
            duration: .5,
            ease: 'power3.out'
        }, '+=0.1')
            
        mm.add(`(min-width: 769px)`, () => {
            gsap.fromTo([item1, item2, item3], { autoAlpha: 0, y: 30 }, {
                autoAlpha: 1,
                y: 0,
                duration: .8,
                ease: 'power1.out',
                stagger: .15,
                scrollTrigger: {
                    trigger: item1,
                    start: '20% 90%',
                }
            });
        });
        mm.add(`(max-width: 768px)`, () => {
            const arr = [item1, item2, item3]
            arr.forEach((item) => {
                gsap.fromTo(item, { autoAlpha: 0, y: 20 }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: .6,
                    ease: 'power1.out',
                    stagger: .15,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 70%',
                    }
                });
            })
        })
    })

  return (
    <section id='service' className={styles.service}>
      <div className={styles.container}>
        <div className={styles.titleArea}>
            <h2 className={styles.title+' c-title2'}>
                <span className={styles.titleEn+' c-title2-en ind js-text-clip-anim__text'} ref={text1Ref}>
                    <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpanRef}></span>
                    Service
                </span>
                <span className={styles.titleJa+' c-title2-ja ind js-text-clip-anim__text'} ref={text2Ref}>
                    <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpan2Ref}></span>
                    サービス内容
                </span>
            </h2>
        </div>
        <div className={styles.contents}>
            {data.map((item, index) => (
                <div className={styles.item} ref={item.ref} key={index}>
                    <div className={styles.item__imgArea}>
                        <Image
                            src={item.img}
                            alt={item.alt}
                            className={styles.item__img}
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className={styles.item__textArea}>
                        <p className={styles.item__number+' c-top-service-number ind'}>{item.number}</p>
                        <p className={styles.item__title+' c-top-service-title bk'}>{item.title}</p>
                        <p className={styles.item__text+' c-body1 gr'}>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className={styles.btnArea}>
            <Link href="/service" className={styles.btn+" c-btn"} scroll={false}>
                <span className={styles.btn__text+' c-btn-text wh'}>詳しく見る</span>
                <span className={styles.btn__arrow+' c-btn-text wh'}>→</span>
            </Link>
        </div>

      </div>
    </section>
  )
}

export default Service
