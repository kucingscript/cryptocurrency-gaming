import styled from "styled-components";

import blog_1 from "../../assets/blog1.png";
import blog_2 from "../../assets/blog2.png";
import blog_3 from "../../assets/blog3.png";

const Blogs = () => {
  const images = [blog_1, blog_2, blog_3];

  return (
    <Section id="blogs">
      <div className="title">
        <h2>News and Feeds</h2>
        <h5>Whre you can earn cryptos</h5>
      </div>
      <div className="blogs">
        {images.map((image, index) => {
          return (
            <div className="blog" key={index}>
              <img src={image} alt="Blog Image" />
              <div className="data">
                <h6>1 Jan 2077</h6>
                <h4>Rightmove Now Offering Click to Purchase Option</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet quisquam veritatis, repellat totam possimus corrupti
                  adipisci vel est facere blanditiis!
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 4rem 10rem;
  display: grid;
  place-items: center;
  gap: 2rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem solid transparent;
      transition: all 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      img {
        width: 100%;
      }
      .data {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
          font-size: 0.9rem;
          font-weight: 300;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export default Blogs;
