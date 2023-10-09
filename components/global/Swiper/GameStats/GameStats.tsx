import React from 'react'
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SwiperCubeWrapper } from './GameStats.styles'
//Import Tables
import RagnarokTable from '../../Tables/RagnarokTable/RagnarokTable'
import DoubleTable from '../../Tables/DoubleTable/DoubleTable'
import TripleTable from '../../Tables/TripleTable/TripleTable'
import SurvivorTable from '../../Tables/SurvivorTable/SurvivorTable'
import VillagesTable from '../../Tables/VillagesTable/VillagesTable'



// import required modules
import { EffectCube, Pagination, Navigation } from 'swiper'

const GameStats = () => {
  return (
    <SwiperCubeWrapper>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        navigation={true}
        modules={[Navigation, EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <VillagesTable/>
        </SwiperSlide>
        <SwiperSlide>
          <RagnarokTable/>
        </SwiperSlide>
        <SwiperSlide>
          <DoubleTable/>
        </SwiperSlide>
        <SwiperSlide>
          <TripleTable/>
        </SwiperSlide>
        <SwiperSlide>
          <SurvivorTable/>
        </SwiperSlide>
      </Swiper>
    </SwiperCubeWrapper>
  )
}

export default GameStats
