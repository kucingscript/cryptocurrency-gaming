import styled from "styled-components";

import bg from "../../assets/background.png";
import hero from "../../assets/home.png";

import Button from "../Button/Button";
import { RiGroupLine } from "react-icons/ri";

const Home = () => {
  return (
    <Section id="home">
      <div className="text">
        <h1>
          <span className="highlight">Earthrium</span> is a real-time strategic
          game
        </h1>
        <p>
          Where you earn money, <span className="highlight">crypto</span> and{" "}
          <span className="highlight">NFT's</span> by trading land, finding
          treasures and building businesses. Welcome!
        </p>
        <Button text="Join Our Discord" icon={<RiGroupLine />} />
      </div>

      <div className="image">
        <img src={hero} alt="Hero Image" />
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: url(${bg}) no-repeat center;
  background-size: contain;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .image {
    img {
      width: 80%;
    }
  }

  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 3.5vw;
    }
    p {
      font-size: 1.2vw;
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    margin: 0 1rem;
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;

export default Home;
