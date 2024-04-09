import React, { useEffect, useRef } from 'react'
import styles from '@/styles/section/common/Contact.module.scss'
import Link from 'next/link'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const bgSpan1Ref = useRef(null)
    const bgSpan2Ref = useRef(null)

    useEffect(() => {
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        const bgSpan1 = bgSpan1Ref.current;
        const bgSpan2 = bgSpan2Ref.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text1,
                start: 'top 70%',
            }
        });
        const mm = gsap.matchMedia()

        tl
        .fromTo([text1, text2], { clipPath: "inset(0 100% 0 0)" }, {
            clipPath: "inset(0 0% 0 0)",
            duration: .5,
            ease: 'power3.in'
        })
        .fromTo([bgSpan1, bgSpan2], { clipPath: "inset(0 0 0 0%)" }, {
            clipPath: "inset(0 0 0 100%)",
            duration: .6,
            ease: 'power3.out'
        }, '+=0.1')
    })
  return (
    <section id='contact' className={styles.contact}>
        <div className={styles.container}>
            <h2 className={styles.title+' c-title2'}>
                <span className={styles.titleEn+' c-title2-en wh js-text-clip-anim__text'} ref={text1Ref}>
                    <span className={styles.bgSpan + ' js-text-clip-anim__bg-span-wh'} ref={bgSpan1Ref}></span>
                    Contact
                </span>
                <span className={styles.titleJa+' c-title2-ja wh js-text-clip-anim__text'} ref={text2Ref}>
                    <span className={styles.bgSpan + ' js-text-clip-anim__bg-span-wh'} ref={bgSpan2Ref}></span>
                    お問い合わせ
                </span>
            </h2>
            <p className={styles.text+' c-body2 wh'}>
                イベント警備、交通誘導、駐車場警備など<br />
                警備のことならどんなことでもお気軽にご相談ください。
            </p>
            <Link href="/recruit" className={styles.btn+" c-btn"}>
                <span className={styles.btn__text+' c-btn-text ind'}>相談する</span>
                <span className={styles.btn__arrow+' c-btn-text ind'}>→</span>
            </Link>
        </div>
    </section>
  )
}

export default Contact
