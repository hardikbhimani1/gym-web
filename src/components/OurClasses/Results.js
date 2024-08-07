/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Output from "./Output";
import CardioBlast from "../Image/CardioBlast.jpg";
import Strength from "../Image/Strength.webp";
import YogaFlow from "../Image/YogaFlow.jpg";
import HIIT from "../Image/H.I.I.T-3-min.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="Cardio Blast"
        info="Get ready to sweat! This high-energy class is designed to get your heart rate up and burn those calories. Our Cardio Blast class combines aerobic exercises with strength training moves to give you a full-body workout. Expect to move to upbeat music and push yourself to new limits. (45 minutes, moderate to high intensity)"
        img={CardioBlast}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Strength and Tone"
        info="Build strength, tone your muscles, and feel empowered! This class focuses on resistance training exercises to target all major muscle groups. You'll use free weights, resistance bands, or machines to work on building lean muscle mass and increasing overall strength. (45 minutes, moderate intensity)"
        img={Strength}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Yoga Flow"
        info="Find your inner calm and flexibility in our Yoga Flow class. This class combines traditional yoga poses with flowing movements to help improve balance, strength, and flexibility. You'll breathe, stretch, and relax your way to a more centered you. (45 minutes, low to moderate intensity"
        img={YogaFlow}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="HIIT (High-Intensity Interval Training)"
        info="Get ready for a challenging and rewarding workout! Our HIIT class involves short bursts of high-intensity exercise followed by brief periods of rest. This class is designed to push you to your limits, improve cardiovascular fitness, and boost metabolism. (30 minutes, high intensity)"
        img={HIIT}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
