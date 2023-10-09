import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

export const SwiperCubeWrapper = styled.div`
  position: relative;
  height: 70vh;
  margin: 0 0 30px 0;
  @media only ${devices.xs} {
    width: calc(100% - 5px);
  }
  @media only ${devices.sm} {
    height: 65vh;
  }
  .swiper {
    padding: 0 0 20px 0;
    transform: translate(0, 12rem);
    width: 80%;
    height: 70vh;
    position: absolute;
    left: 40%;
    top: 0;
    margin-left: -150px;
    margin-top: -150px;
    @media only ${devices.xs} {
      left: 53%;
      width: 80%;
    }
    @media only ${devices.sm} {
      height: 65vh;
    }
  }

  .swiper-slide {
    // background-color: gray;
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-pagination-bullet-active {
    background: white;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 25px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    outline: none;
  }
  .swiper-button-prev {
    left: -35px;
  }
  .swiper-button-next {
    right: -35px;
  }
`
