/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Get started on your fitness journey with our Basic Fitness course! Learn the fundamentals of exercise and improve overall health and wellness."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="Take your fitness to the next level with our Advanced Muscle Course! Learn advanced techniques for building lean muscle mass and strength."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="New to the gym? Our New Gym Training course teaches you how to use equipment, proper form, and technique to get the most out of your workouts."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Find balance and flexibility with our Yoga Training course! Learn various yoga styles, including Hatha, Vinyasa, and Restorative yoga."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc=" Build a strong foundation in muscle building with our Basic Muscle Course! Learn the fundamentals of weightlifting and improve overall muscle mass and strength."
      />
      <GymProgramCard
        title="Body Building Course"
        desc=" Take your physique to the next level with our Body Building Course! Learn advanced techniques for building lean muscle mass and achieving a more muscular physique."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
