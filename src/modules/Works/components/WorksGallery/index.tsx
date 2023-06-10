// WorksGallery
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/keyboard'
import { WorksCard } from '../'
import { media } from '@/styles/media'
import type { WorkGalleryProps } from '@/types'

export const WorksGallery: FC<WorkGalleryProps> = ({ content }) => {
  return (
    <div
      css={`
        margin: -4rem;
      `}
    >
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={24}
        freeMode={true}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        modules={[FreeMode, Keyboard, Mousewheel]}
        breakpoints={{
          // when screen width is >= 576px
          576: {
            centeredSlides: false,
          },
        }}
        css={`
          padding: 4rem;
        `}
      >
        {content.map((contentItem, idx) => (
          <SwiperSlide
            key={idx}
            css={`
              max-width: 18rem;
              height: auto;
              cursor: grab;

              &:first-child {
                margin-left: calc(((100% - var(--max-width)) / 2) + 1rem);
              }

              &:last-child {
                margin-right: calc(((100% - var(--max-width)) / 2) + 1rem);
              }

              ${media.sm} {
                max-width: 20rem;
              }

              ${media.lg} {
                max-width: 39.5rem;
              }
            `}
          >
            <WorksCard data={contentItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
