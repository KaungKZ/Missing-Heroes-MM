import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 300px;
  background: var(--blue-bg-color);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--section-margin);

  @media (max-width: 768px) {
    height: 265px;
  }

  @media (max-width: 400px) {
    height: 250px;
  }
`;

export const HeaderStyles = styled.div`
  text-align: center;

  .main-title,
  .donate-link {
    margin-bottom: 15px;
  }
  .main-title {
    font-family: var(--title-font);
    font-size: 3rem;
    font-weight: 700;

    .missing {
      color: #fecb00;
    }

    .heroes {
      color: #34b233;
    }

    .myanmar {
      color: #ea2839;
    }
  }

  .donate-link,
  .hashtags {
    font-family: var(--primary-font);
  }

  .donate-link {
    color: var(--light-text-color);

    a {
      color: var(--light-text-color);
      font-weight: 500;
    }
  }

  .hashtags {
    color: var(--light-text-color);
    font-weight: 500;

    .hashtag:first-child {
      margin-right: 7px;
    }
  }

  @media (max-width: 1280px) {
    z-index: 2;
  }

  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5rem;
    }

    .donate-link {
      font-size: 14px;
    }

    .hashtags .hashtag {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    max-width: 80%;
    .main-title {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 90%;
    .main-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 400px) {
    .donate-link {
      font-size: 12px;
    }

    .hashtags .hashtag {
      font-size: 12px;
    }
  }

  @media (max-width: 280px) {
    .main-title {
      font-size: 1.8rem;
    }
  }
`;

export const FlagWrapper = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;

  img {
    width: 300px;
    height: 300px;
    display: block;
  }

  @media (max-width: 1024px) {
    img {
      width: 175px;
      height: 175px;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 135px;
      height: 135px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;
