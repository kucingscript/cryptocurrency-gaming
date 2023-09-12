import styled from "styled-components";

import buysell_1 from "../../assets/buy-sell-1.png";
import buysell_2 from "../../assets/buy-sell-2.png";
import buysell_3 from "../../assets/buy-sell-3.png";

const BuySell = () => {
  return (
    <Section>
      <div className="row">
        <div className="col" id="buysell-1">
          <img src={buysell_1} alt="Buy and Sell" />
          <div className="text">
            <h2>
              Buy and Sell Virtual <span>Lands</span> and{" "}
              <span>Properties</span>
            </h2>
          </div>
        </div>

        <div className="col" id="buysell-2">
          <div className="text">
            <h2>
              Buy and Sell <span> Virtual Resources</span> and Businesses
            </h2>
          </div>
          <img src={buysell_2} alt="Buy and Sell" />
        </div>

        <div className="col" id="buysell-3">
          <img src={buysell_3} alt="Buy and Sell" />
          <div className="text">
            <h2>
              Earn <span>REKK</span>, a new kind of reality-backed
              cryptocurrency
            </h2>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 6rem 10rem;
  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        height: 60vh;
      }
      h2 {
        font-size: 3rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 3rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;

export default BuySell;
