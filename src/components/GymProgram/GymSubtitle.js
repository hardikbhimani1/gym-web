/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const GymSubtitle = () => (
  <p css={styles}>
    Gym classes are not just a modern trend, but an important component of a
    healthy lifestyle. <br /> Nowadays, when stress and a sedentary lifestyle
    become an integral part of everyday life,
    <br /> regular trips to the gym promote health and overall physical
    development.
    <br />
  </p>
);

const styles = css`
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.7;
  @media (max-width: 700px) {
    padding: 0 40px;
    br {
      display: none;
    }
  }
`;

export default GymSubtitle;
