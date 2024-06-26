import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function About() {

    const textRef = useRef(null)
    const bgSpanRef = useRef(null)
    const parallaxRef = useRef(null)
    const fadeUp1Ref = useRef(null)
    const fadeUp2Ref = useRef(null)

    useEffect(() => {
        const text = textRef.current;
        const bgSpan = bgSpanRef.current;
        const parallax = parallaxRef.current;
        const fadeUp1 = fadeUp1Ref.current;
        const fadeUp2 = fadeUp2Ref.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text,
                start: 'top 90%',
            }
        });
        const mm = gsap.matchMedia()
        tl
        .fromTo(text, { clipPath: "inset(0 100% 0 0)" }, {
            clipPath: "inset(0 0% 0 0)",
            duration: .5,
            ease: 'power3.in'
        })
        .fromTo(bgSpan, { clipPath: "inset(0 0 0 0%)" }, {
            clipPath: "inset(0 0 0 100%)",
            duration: .6,
            ease: 'power3.out'
        }, '+=0.1')
        .fromTo([fadeUp1, fadeUp2], { autoAlpha: 0, y: 10 }, {
            autoAlpha: 1,
            y: 0,
            duration: .5,
            ease: 'power1.out',
        }, '-=.5')
        gsap.fromTo(parallax, { backgroundSize: '108%' }, {
            backgroundSize: '100%',
            scrollTrigger: {
                trigger: parallax,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        })

    })


  return (
    <section className={'p-top-about__about'} id='about'>
        <div className={'p-top-about__container'}>
            <div className={'p-top-about__overflow'}>
                <div className={'p-top-about__bgTextArea'}>
                    <p className={'p-top-about__bgText c-top-about-bg-text ind'}>About Us</p>
                    <p className={'p-top-about__bgText c-top-about-bg-text ind'}>About Us</p>
                    <p className={'p-top-about__bgText c-top-about-bg-text ind'}>About Us</p>
                </div>
            </div>
            <div className={'p-top-about__content'}>
                <h2 className={'p-top-about__mainCopy c-top-about-main-copy bk js-text-clip-anim__text'} ref={textRef}>
                    <span className={'p-top-about__bgSpan js-text-clip-anim__bg-span'} ref={bgSpanRef}></span>
                    堂々たる技術<br />
                    誠実なサービス
                </h2>
                <div className={'p-top-about__subArea'}>
                    <p className={'p-top-about__subCopy c-top-about-sub-copy bk'} ref={fadeUp1Ref}>
                        私たちはアースセキュリティは<br />
                        警備のプロ集団としての誇りを持ち、<br />
                        堂々たる技術と誠実なサービスを<br />
                        ご提供いたします。<br /><br />

                        皆さまの安心安全と信頼のために<br />
                        全力を注ぎます。<br />
                        常に最高品質を心掛け、<br />
                        人とのつながりを大切にし、<br />
                        より安全で笑顔あふれる未来を築きます。
                    </p>
                    <Link className={'p-top-about__btn c-btn'} href="/about" ref={fadeUp2Ref} scroll={false}>
                        <span className={'p-top-about__btn__text c-btn-text wh'}>私たちについて</span>
                        <span className={'p-top-about__arrow c-btn-arrow wh'}>→</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className={'p-top-about__imgContainer'}>
            <div className={'p-top-about__imgArea'}>
                <div className={'p-top-about__img'} ref={parallaxRef}></div>
            </div>
        </div>
    </section>
  )
}

export default About
