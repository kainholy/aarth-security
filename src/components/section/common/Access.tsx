import React, { useEffect, useRef } from 'react'
import styles from '@/styles/section/common/Access.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Access() {
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
    <section id='access' className={styles.access}>
        <div className={styles.container}>
            <h2 className={styles.title+' c-title2'}>
                <span className={styles.titleEn+' c-title2-en ind js-text-clip-anim__text'} ref={text1Ref}>
                    <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpan1Ref}></span>
                    Access
                </span>
                <span className={styles.titleJa+' c-title2-ja ind js-text-clip-anim__text'} ref={text2Ref}>
                    <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpan2Ref}></span>
                    アクセス
                </span>
            </h2>
            <div className={styles.inner}>
                <div className={styles.textArea}>
                    <div className={styles.contents}>
                        <p className={styles.text+' c-body2'}>
                            <span className={styles.bold+' --bold'}>本社</span><br />
                            〒120-0006<br />
                            東京都足立区谷中1-23-15<br />
                            TEL 03-5697-9333<br />
                            FAX 03-5697-9336<br /><br />
                        </p>
                        <p className={styles.text+' c-body2'}>
                            <span className={styles.bold+' --bold'}>神明営業所</span><br />
                            〒121-0051<br />
                            東京都足立区神明1-2-8　2F
                        </p>
                    </div>
                </div>
                <div className={styles.mapArea}>
                    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.1124246981185!2d139.82957957570375!3d35.77261462494878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188fc22e4bb5bf%3A0x17382efeb6625c25!2z44CSMTIwLTAwMDYg5p2x5Lqs6YO96Laz56uL5Yy66LC35Lit77yR5LiB55uu77yS77yT4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1711263733141!5m2!1sja!2sjp" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Access
