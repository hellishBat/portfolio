// // Works
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { FreeMode, Keyboard, Mousewheel } from 'swiper'
// import 'swiper/scss'
// import 'swiper/scss/free-mode'
// import 'swiper/scss/keyboard'
// import { useIsomorphicLayoutEffect, useNav } from '@/hooks'
// import { Container, Typography } from '@/components'
// import { WorksCard } from './components'
// import * as SC from '@/styles/common'
// import { media } from '@/styles/media'
// import data from '@/data/index.json'
// import {
//   previewMountain,
//   previewPorten,
//   previewCalc,
//   previewKrypto,
//   previewWeatherInsight,
// } from '@/assets'

// const worksData = data.works

// const worksAssets = [
//   {
//     imgSrc: previewMountain,
//   },
//   {
//     imgSrc: previewPorten,
//   },
//   {
//     imgSrc: previewCalc,
//   },
//   {
//     imgSrc: previewKrypto,
//   },
//   {
//     imgSrc: previewWeatherInsight,
//   },
// ]

// const worksContent = worksAssets
//   .map((item, idx) => ({
//     ...item,
//     ...worksData.content[idx],
//   }))
//   .reverse()

// gsap.registerPlugin(ScrollTrigger)

// const Works = () => {
//   const worksRef = useNav('Works')

//   useIsomorphicLayoutEffect(() => {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: '#worksSection',
//           start: 'top 70%',
//           end: 'top 33%',
//         },
//       })
//       .from('#worksHeading', {
//         yPercent: 100,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 1,
//         ease: 'sine.out',
//       })
//       .from('.swiper-slide article', {
//         xPercent: 50,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 1.25,
//         ease: 'sine.out',
//       })

//     gsap.to('#worksSection', {
//       scrollTrigger: {
//         trigger: '#worksSection',
//         start: 'bottom 33%',
//         end: 'bottom 0',
//         scrub: true,
//       },
//       opacity: 0,
//     })

//     ScrollTrigger.refresh()
//   }, [])

//   return (
//     <SC.Section id="worksSection" ref={worksRef}>
//       <Container>
//         <Typography variant="h3" id="worksHeading">
//           {worksData.heading}
//         </Typography>
//       </Container>
//       <div
//         id="worksContent"
//         css={`
//           margin: -4rem;
//         `}
//       >
//         <Swiper
//           slidesPerView={'auto'}
//           centeredSlides={true}
//           spaceBetween={24}
//           freeMode={true}
//           keyboard={{
//             enabled: true,
//             onlyInViewport: false,
//           }}
//           mousewheel={{
//             forceToAxis: true,
//           }}
//           modules={[FreeMode, Keyboard, Mousewheel]}
//           breakpoints={{
//             // when screen width is >= 576px
//             576: {
//               centeredSlides: false,
//             },
//           }}
//           css={`
//             padding: 4rem;
//           `}
//         >
//           {worksContent.map((workItem, idx) => (
//             <SwiperSlide
//               key={idx}
//               css={`
//                 max-width: 18rem;
//                 height: auto;
//                 cursor: grab;

//                 &:first-child {
//                   margin-left: calc(((100% - var(--max-width)) / 2) + 1rem);
//                 }

//                 &:last-child {
//                   margin-right: calc(((100% - var(--max-width)) / 2) + 1rem);
//                 }

//                 ${media.sm} {
//                   max-width: 20rem;
//                 }

//                 ${media.lg} {
//                   max-width: 39.5rem;
//                 }
//               `}
//             >
//               <WorksCard data={workItem} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </SC.Section>
//   )
// }

// export default Works

// Works
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect, useNav } from '@/hooks'
import { Container, Typography } from '@/components'
import { WorksGallery } from './components'
import * as SC from '@/styles/common'
import data from '@/data/index.json'
import {
  previewMountain,
  previewPorten,
  previewCalc,
  previewKrypto,
  previewWeatherInsight,
} from '@/assets'

const worksData = data.works

const worksAssets = [
  {
    imgSrc: previewMountain,
  },
  {
    imgSrc: previewPorten,
  },
  {
    imgSrc: previewCalc,
  },
  {
    imgSrc: previewKrypto,
  },
  {
    imgSrc: previewWeatherInsight,
  },
]

const worksContent = worksAssets
  .map((item, idx) => ({
    ...item,
    ...worksData.content[idx],
  }))
  .reverse()

gsap.registerPlugin(ScrollTrigger)

const Works = () => {
  const worksRef = useNav('Works')

  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#worksSection',
          start: 'top 70%',
          end: 'top 33%',
        },
      })
      .from('#worksHeading', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine.out',
      })
      .from('.swiper-slide article', {
        xPercent: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.25,
        ease: 'back.out',
      })

    gsap.to('#worksSection', {
      scrollTrigger: {
        trigger: '#worksSection',
        start: 'bottom 33%',
        end: 'bottom 0',
        scrub: true,
      },
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="worksSection" ref={worksRef}>
      <Container>
        <Typography variant="h3" id="worksHeading">
          {worksData.heading}
        </Typography>
      </Container>
      <WorksGallery content={worksContent} />
    </SC.Section>
  )
}

export default Works
