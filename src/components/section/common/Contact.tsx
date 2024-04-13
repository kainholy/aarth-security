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
    <section id='contact' className={'p-common-contact__contact'}>
        <div className={'p-common-contact__container'}>
            <h2 className={'p-common-contact__title c-title2'}>
                <span className={'p-common-contact__titleEn c-title2-en wh js-text-clip-anim__text'} ref={text1Ref}>
                    <span className={'p-common-contact__bgSpan js-text-clip-anim__bg-span-wh'} ref={bgSpan1Ref}></span>
                    Contact
                </span>
                <span className={'p-common-contact__titleJa c-title2-ja wh js-text-clip-anim__text'} ref={text2Ref}>
                    <span className={'p-common-contact__bgSpan js-text-clip-anim__bg-span-wh'} ref={bgSpan2Ref}></span>
                    お問い合わせ
                </span>
            </h2>
            <p className={'p-common-contact__text c-body2 wh'}>
                イベント警備、交通誘導、駐車場警備など<br />
                警備のことならどんなことでもお気軽にご相談ください。
            </p>
            <Link href="/recruit" className={'p-common-contact__btn c-btn'}>
                <span className={'p-common-contact__btn__text c-btn-text ind'}>相談する</span>
                <span><svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.59255 1.2314C0.630598 1.85528 0.441626 3.80541 0.804806 5.39482C1.08765 6.63256 1.68899 8.2929 2.70301 9.85636C3.65692 11.3272 4.98777 12.646 6.00255 13.4091C7.30567 14.3889 9.16332 15.0116 10.1253 14.3878C10.6117 14.0723 11.3344 13.2104 11.3673 13.0557C11.3673 13.0557 10.9436 12.4023 10.8506 12.2589L9.42946 10.0678C9.32386 9.90492 8.66159 10.0538 8.32516 10.2443C7.87133 10.5015 7.45338 11.1914 7.45338 11.1914C7.14221 11.3712 6.88157 11.192 6.33699 10.9414C5.6677 10.6335 4.9152 9.67666 4.31629 8.81005C3.76928 7.90981 3.20252 6.8325 3.19432 6.0958C3.18757 5.49637 3.13031 5.18536 3.42138 4.97454C3.42138 4.97454 4.22179 4.8743 4.64165 4.56483C4.95285 4.33536 5.35882 3.79138 5.25322 3.62852L3.83211 1.43736C3.73912 1.29397 3.31534 0.640559 3.31534 0.640559C3.16066 0.60761 2.07897 0.915938 1.59255 1.2314Z" fill="#26354D"/></svg></span>
            </Link>
        </div>
    </section>
  )
}

export default Contact
