// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Prueba = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <article className='card'>Slide 1</article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='card'>Slide 2</article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='card'>Slide 3</article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='card'>Slide 4</article>
      </SwiperSlide>
    </Swiper>
  )
}

export default Prueba
