/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../GlobalComponents/Icon";
import MemberShipCard from "./MemberShipCard";
import Container from "../GlobalComponents/Container";
import OneBg from "../Image/first.jpg";
import TwoBg from "../Image/trainerThree.jpg";
import ThreeBg from "../Image/three.jpg";

const MemberShip = () => (
  <section css={styles} className="trainers" id="MemberShip">
    <h2>
      MEMBERSHIP <span>PACKAGE</span>
    </h2>
    <Icon />
    <Container>
      <MemberShipCard
        month="1 MONTH"
        price="₹3000/-"
        trainerType="General Trainer"
        access="Full Gym Access"
        complementary = 'Zumba and Yoga complementary' 
        img={OneBg} 
      />
      <MemberShipCard
        month="3 MONTH"
        price="₹5,000/-"
        trainerType="General Trainer"
        access="Full Gym Access"
        complementary = 'Zumba and Yoga complementary' 
        img={TwoBg} 
      />
      <MemberShipCard
          month="6 MONTH"
          price="₹8,000/-"
          trainerType="General Trainer"
          access="Full Gym Access"
          complementary = 'Zumba and Yoga complementary' 
          img={ThreeBg} 
      />
        {/* <MemberShipCard
            month="1 YEAR"
            price="₹12,000/-"
            trainerType="General Trainer"
            access="Full Gym Access"
            complementary = 'Zumba and Yoga complementary' 
            img={TrainerThreeBg} 
        /> */}
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default MemberShip;
