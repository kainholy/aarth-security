import React, { useEffect, useRef } from 'react'
import styles from '@/styles/section/top/Recruit.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Recruit() {
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const bgSpan1Ref = useRef(null)
    const bgSpan2Ref = useRef(null)
    const fadeUpTextRef = useRef(null)
    const fadeUpButtonRef = useRef(null)
    const parallaxRef = useRef(null)

    useEffect(() => {
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        const bgSpan1 = bgSpan1Ref.current;
        const bgSpan2 = bgSpan2Ref.current;
        const fadeUpText = fadeUpTextRef.current;
        const fadeUpButton = fadeUpButtonRef.current;
        const parallax = parallaxRef.current;
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
        .fromTo([fadeUpText, fadeUpButton], { autoAlpha: 0, y: 7 }, {
            autoAlpha: 1,
            y: 0,
            duration: .7,
            ease: 'power1.out',
        }, '-=.5');

        gsap.fromTo(parallax, { backgroundSize: '110%' }, {
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
    <section id='recruit' className={styles.recruit}>
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.textArea}>
                    <h2 className={styles.title+' c-title2'}>
                        <span className={styles.titleEn+' c-title2-en ind js-text-clip-anim__text'} ref={text1Ref}>
                            <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpan1Ref}></span>
                            Recruit
                        </span>
                        <span className={styles.titleJa + ' c-title2-ja ind js-text-clip-anim__text'} ref={text2Ref}>
                            <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpan2Ref}></span>
                            採用情報
                        </span>
                    </h2>
                    <p className={styles.text+' c-top-recruit-text gr'} ref={fadeUpTextRef}>
                        豊富な経験を持つ仲間と一緒に警備のプロとして、<br />
                        安心安全な未来を築きませんか。<br /><br />

                        共に努力し、成長し、<br />
                        ときには和気藹々と笑い合える、<br />
                        そんな充実した時間を共有しましょう。<br /><br />

                        警備業は人が財産です。<br />
                        共に切磋琢磨できる新たな仲間を歓迎します。
                    </p>
                    <Link href="/recruit" className={styles.btn+" c-btn"} ref={fadeUpButtonRef} scroll={false}>
                        <span className={styles.btn__text+' c-btn-text wh'}>詳しく見る</span>
                        <span className={styles.btn__arrow+' c-btn-text wh'}>→</span>
                    </Link>
                </div>
            </div>
            <div className={styles.imgArea}>
                <div className={styles.img} ref={parallaxRef}></div>
            </div>
        </div>
    </section>
  )
}

export default Recruit
