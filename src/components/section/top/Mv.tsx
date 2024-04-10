import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/section/top/Mv.module.scss'
import Link from 'next/link'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Mv() {
  const textRef = useRef(null)
  const bgSpanRef = useRef(null)
  const text2Ref = useRef(null)
  const bgSpan2Ref = useRef(null)
  const scrollAreaRef = useRef(null)

  useEffect(() => {
      const text = textRef.current;
      const bgSpan = bgSpanRef.current;
      const text2 = text2Ref.current;
      const bgSpan2 = bgSpan2Ref.current;
      const scrollArea = scrollAreaRef.current;
      const mm = gsap.matchMedia()
      const tl = gsap.timeline();
      mm.add(`(min-width: 769px)`, () => {
        tl
        .fromTo([text, text2], { clipPath: "inset(0 100% 0 0)" }, {
            clipPath: "inset(0 0% 0 0)",
            duration: .7,
            ease: 'power3.in'
        }, '+=.5')
        .fromTo([bgSpan, bgSpan2], { clipPath: "inset(0 0 0 0%)" }, {
            clipPath: "inset(0 0 0 100%)",
            duration: .8,
            ease: 'power3.out'
        }, '+=0.1')
        .fromTo(scrollArea, { autoAlpha: 0, y: 10 }, {
            autoAlpha: 1,
            y: 0,
            duration: .3,
            ease: 'power1.out'
        }, '-=.2')
      });
      mm.add(`(max-width: 768px)`, () => {
        tl
        .fromTo([text, text2], { clipPath: "inset(0 100% 0 0)" }, {
            clipPath: "inset(0 0% 0 0)",
            duration: .4,
            ease: 'power3.in'
        })
        .fromTo([bgSpan, bgSpan2], { clipPath: "inset(0 0 0 0%)" }, {
            clipPath: "inset(0 0 0 100%)",
            duration: .5,
            ease: 'power3.out'
        }, '+=0.1')
      });
  })

  return (
    <section className={styles.mv}>
      <div className={styles.container}>

          <h1 className={styles.title+' c-top-mv-title ind js-text-clip-anim__text'} ref={textRef}>
              <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpanRef}></span>
              Aarth Security
          </h1>

          <div className={styles.main}>
            <div className={styles.bannerArea}>
              <Link className={styles.banner} href="/recruit" scroll={false}>
                <span className={styles.btn__text+' c-btn-text wh'}>仲間募集中！採用情報をcheck</span>
                <span className={styles.arrow+' c-btn-arrow wh'}>→</span>
              </Link>
            </div>
            <p className={styles.text + ' c-top-mv-text ind js-text-clip-anim__text'} ref={text2Ref}>
              <span className={styles.bgSpan + ' js-text-clip-anim__bg-span'} ref={bgSpan2Ref}></span>
              安心と安全を、先導します。
            </p>
          </div>
      </div>

      <div className={styles.thumbnailArea}>
        <div className={styles.scrollArea + ' pc'} ref={scrollAreaRef}>
          <div className={styles.circle}>
              <p className={styles.scrollArrow}>↓</p>
          </div>
        </div>
        <Image
          src="/top/mv/thumb.png"
          alt="堂々たる技術、誠実なサービス"
          className={styles.thumbnail + ' pc'}
          width={4000}
          height={2000}
        />
        <Image
          src="/top/mv/thumb_sp.png"
          alt="堂々たる技術、誠実なサービス"
          className={styles.thumbnail + ' sp'}
          width={4000}
          height={2000}
        />
      </div>
    </section>
  )
}

export default Mv
