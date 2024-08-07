/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaRupeeSign,
} from "react-icons/fa";

const MemberShipCard = ({
  month,
  price,
  trainerType,
  access,
  complementary,
  img,
}) => (
  <div css={styles} className="card">
    <img src={img} alt="trainer" />
    <div css={listStyles}>
      <div css={listElementStyles}>
        <FaRupeeSign
          css={iconStyles}
          style={{ color: "green", fontSize: "20px" }}
        />
        <span>{price}</span>
      </div>

      <div css={listElementStyles}>
        <FaClock
          css={iconStyles}
          style={{ color: "green", fontSize: "20px" }}
        />
        <span>{month}</span>
      </div>

      <div css={listElementStyles}>
        <FaCheckCircle
          css={iconStyles}
          style={{ color: "green", fontSize: "20px" }}
        />
        <span>{trainerType}</span>
      </div>
      <div css={listElementStyles}>
        <FaCheckCircle
          css={iconStyles}
          style={{ color: "green", fontSize: "20px" }}
        />
        <span>{access}</span>
      </div>
      <div css={listElementStyles}>
        <FaTimesCircle
          css={iconStyles}
          style={{ color: "red", fontSize: "20px" }}
        />
        <span>{complementary}</span>
      </div>
    </div>
    <button css={buttonStyles}>Buy Plan</button>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 31%;
  background: #fff;
  padding: 44px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 4px;
  img {
    width: 100%;
  }
  @media (max-width: 830px) {
    max-width: 540px;
    margin: 14px 0;
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    max-width: 47%;
    margin: 14px 0;
  }
`;
const iconStyles = css`
  margin-right: 10px;
`;

const titleStyles = css`
  color: #ed563b;
  margin: 26px 0 9px 0;
  font-weight: bold;
  font-size: 14px;
`;

const listStyles = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const listElementStyles = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin: 10px img {
    width: 20px;
    margin-right: 10px;
  }
  span {
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }
`;

const buttonStyles = css`
  background-color: #ed563b;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c8482d;
  }
`;
const priceContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export default MemberShipCard;
