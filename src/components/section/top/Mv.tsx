import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
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
  const scrollArrowRef = useRef(null)
  const scrollArrow2Ref = useRef(null)

  useEffect(() => {
      const text = textRef.current;
      const bgSpan = bgSpanRef.current;
      const text2 = text2Ref.current;
      const bgSpan2 = bgSpan2Ref.current;
      const scrollArea = scrollAreaRef.current;
      const scrollArrow = scrollArrowRef.current;
      const scrollArrow2 = scrollArrow2Ref.current;
      const mm = gsap.matchMedia()
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();
      mm.add(`(min-width: 769px)`, () => {
        gsap.fromTo([scrollArrow, scrollArrow2], { y: -48.3 }, {
            delay: 1,
            y: 15,
            duration: 2.5,
            repeat: -1,
            repeatDelay: .5,
            ease: 'power3.inOut'
        })
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
        .fromTo(scrollArea, { autoAlpha: 0, y: 7 }, {
            autoAlpha: 1,
            y: 0,
            duration: .4,
            ease: 'power1.out'
        }, '-=.2')
      });
      mm.add(`(max-width: 768px)`, () => {
        tl
        .fromTo([text, text2], { clipPath: "inset(0 100% 0 0)" }, {
            clipPath: "inset(0 0% 0 0)",
            duration: .4,
            ease: 'power3.in'
        }, '+=.5')
        .fromTo([bgSpan, bgSpan2], { clipPath: "inset(0 0 0 0%)" }, {
            clipPath: "inset(0 0 0 100%)",
            duration: .5,
            ease: 'power3.out'
        }, '+=0.1')
      });
  })

  return (
    <section className={'p-top-mv__mv'}>
      <div className={'p-top-mv__container'}>

          <h1 className={'p-top-mv__title c-top-mv-title ind js-text-clip-anim__text'} ref={textRef}>
              <span className={'p-top-mv__bgSpan js-text-clip-anim__bg-span'} ref={bgSpanRef}></span>
              Aarth Security
          </h1>

          <div className={'p-top-mv__main'}>
            <div className={'p-top-mv__bannerArea'}>
              <Link className={'p-top-mv__banner c-mv-button'} href="/recruit" scroll={false}>
                <span className={'p-top-mv__btn__text c-btn-text wh'}>仲間募集中！採用情報をcheck</span>
                <span className={'p-top-mv__arrow c-btn-arrow wh'}>→</span>
              </Link>
            </div>
            <p className={'p-top-mv__text c-top-mv-text ind js-text-clip-anim__text'} ref={text2Ref}>
              <span className={'p-top-mv__bgSpan js-text-clip-anim__bg-span'} ref={bgSpan2Ref}></span>
              安心と安全を、先導します。
            </p>
          </div>
      </div>

      <div className={'p-top-mv__thumbnailArea'}>
        <div className={'p-top-mv__scrollArea pc'} ref={scrollAreaRef}>
          <div className={'p-top-mv__circle'}>
              <div className={'p-top-mv__scrollArrowArea'}>
                <p className={'p-top-mv__scrollArrow'} ref={scrollArrowRef}>↓</p>
                <p className={'p-top-mv__scrollArrow'} ref={scrollArrow2Ref}>↓</p>
              </div>
          </div>
        </div>
        <Image
          src="/top/mv/thumb.webp"
          alt="アースセキュリティ"
          className={'p-top-mv__thumbnail pc'}
          width={4000}
          height={2000}
        />
        <Image
          src="/top/mv/thumb_sp.webp"
          alt="アースセキュリティ"
          className={'p-top-mv__thumbnail sp'}
          width={4000}
          height={2000}
        />
      </div>
    </section>
  )
}

export default Mv
