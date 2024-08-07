/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import GymOverlayBg from "../Image/gymOverlayBg.jpg";

const Member = ({ text }) => (
  <section css={styles} className="member">
    <h2>
      DON’T <span>THINK</span>, BEGIN <span>TODAY</span>!
    </h2>
    <p>
      It doesn’t matter if your goal is to get stronger, burn fat, or to just
      stay fit our world class coaches will guide you every step of the way.
    </p>
    <Button text="CONTACT" linkTo="#contact" />
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url("${GymOverlayBg}") no-repeat center/cover;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  @media (max-width: 850px) {
    h2 {
      font-size: 30px;
    }
    p {
      padding: 0 20px;
      br {
        display: none;
      }
    }
  }
`;

export default Member;
