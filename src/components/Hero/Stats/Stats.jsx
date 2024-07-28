import { scaleUpVariants } from "../../../styles/animations";
import { Label, Number, Stat, StatsContainer } from "./Stats.styled";

const Stats = ({ delay }) => {
  return (
    <StatsContainer
      custom={delay}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={scaleUpVariants}
      layout="position"
    >
      <Stat>
        <Number>32,000+</Number>
        <Label>Experienced tutors</Label>
      </Stat>
      <Stat>
        <Number>300,000+</Number>
        <Label>5-star tutor reviews</Label>
      </Stat>
      <Stat>
        <Number>120+</Number>
        <Label>Subjects taught</Label>
      </Stat>
      <Stat>
        <Number>200+</Number>
        <Label>Tutor nationalities</Label>
      </Stat>
    </StatsContainer>
  );
};

export default Stats;
