import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto max-content;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Content = styled.main`
  width: 100vw;
  padding: 44px 28px 25px 24px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 100px 24px 48px 24px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 100px 124px 48px 124px;
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 120px;
  border-radius: 3px;
  margin-bottom: 62px;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

  img {
    margin: 0 0 -0.4rem -1.5rem;
    height: 10.625rem;
    width: 40%;
  }

  .banner-information {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin: 8px;

    h2 {
      font-size: 1.5rem;
      font-family: "Poppins";
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      font-family: "Poppins";
      font-weight: 400;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 11.875rem;
    
    img {
      margin: 0 0 5.625rem -3.125rem;
      height: 18.75rem;
      width: 48%;
    }

    .banner-information {
      margin-right: 6.25rem;

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const CardsContent = styled.div`
  h2 {
    font-family: "Poppins";
    font-weight: 400;
    margin-bottom: 24px;
  }

  .dish-actions button {
    height: 3rem;
    width: 100%;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-bottom: 24px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: black;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 8px;
    width: 194px;
    height: auto;
    gap: 16px;

    a:first-child {
      position: absolute;
      right: 16px;
      top: 16px;
      cursor: pointer;
    }

    a {
      .heart,
      .pencil {
        position: absolute;
        right: 0px;
        top: 0px;
        cursor: pointer;
      }
    }
    img {
      width: 88px;
      height: 88px;
    }

    a {
      display: flex;
      align-items: center;
      font-family: "Poppins";
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    p {
      display: none;
    }

    span {
      color: ${({theme}) => theme.COLORS.CAKE_200};
    }

    .dish-actions {
      display: contents;
    }
  }

  .swiper-button-prev, .swiper-button-next {
    display: none;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    top: 40%;
  }

  .swiper-button-prev:after, .swiper-button-next:after {
    font-size: 1.5rem;
  }

  .swiper-button-prev.swiper-button-disabled, 
  .swiper-button-next.swiper-button-disabled {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .swiper-slide {
      width: 304px;

      img {
        width: 176px;
        height: 176px;
      }

      a {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }

      p {
        display: -webkit-box;
        line-height: 16px;
        max-height: 32px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto";
        font-size: 1rem;
      }

      span {
        font-size: 2rem;
      }

      .dish-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    .swiper-button-prev, .swiper-button-next {
      display: flex;
      filter: drop-shadow(0px 0px 3px #000000);
    }
  }
`;