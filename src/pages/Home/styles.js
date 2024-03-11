import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
`;

export const Content = styled.main`
  width: 100vw;
  padding: 44px 28px 25px 24px;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 120px;
  border-radius: 3px;
  margin-bottom: 62px;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

  img {
    margin: 0 0 32px -24px;
  }

  .banner-information {
    display: flex;
    flex-direction: column;
    gap: 3px;

    h2 {
      font-family: "Poppins";
      font-weight: 500;
    }

    p {
      font-family: "Poppins";
      font-weight: 400;
    }
  }
`;

export const CardsContent = styled.div`
  h2 {
    font-family: "Poppins";
    font-weight: 400;
    margin-bottom: 24px;
  }

  .swiper {
    width: 100%;
    height: 100%;
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
    width: 50%;
  }
`;