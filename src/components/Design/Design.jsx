import styled from "styled-components";

import design_1 from "../../assets/design1.png";
import design_2 from "../../assets/design2.png";
import design_3 from "../../assets/design3.png";
import design_4 from "../../assets/design4.png";
import design_5 from "../../assets/design5.png";
import design_6 from "../../assets/design6.png";
import design_7 from "../../assets/design7.png";
import design_8 from "../../assets/design8.png";

const Design = () => {
  return (
    <DIV>
      <img src={design_1} alt="Design 1" className="design1" />
      <img src={design_2} alt="Design 1" className="design2" />
      <img src={design_3} alt="Design 1" className="design3" />
      <img src={design_4} alt="Design 1" className="design4" />
      <img src={design_5} alt="Design 1" className="design5" />
      <img src={design_6} alt="Design 1" className="design6" />
      <img src={design_7} alt="Design 1" className="design7" />
      <img src={design_8} alt="Design 1" className="design8" />
    </DIV>
  );
};

const DIV = styled.div`
  position: relative;
  img {
    position: absolute;
  }
  .design1 {
    right: 0;
    top: 7rem;
    width: 12rem;
  }
  .design2 {
    left: 0;
    top: 4rem;
    width: 8rem;
  }
  .design3 {
    left: 0;
    top: 32rem;
    width: 8rem;
  }
  .design4 {
    right: 0;
    top: 60rem;
    width: 8rem;
  }
  .design5 {
    left: 2rem;
    top: 85rem;
    width: 6rem;
  }
  .design6 {
    right: 0;
    top: 78rem;
    width: 12rem;
  }
  .design7 {
    left: 0;
    top: 100rem;
    width: 8rem;
  }
  .design8 {
    top: 105rem;
    width: 8rem;
    right: 0;
  }
  @media screen and (min-width: 280px) and (max-width: 1140px) {
    display: none;
  }
`;

export default Design;
