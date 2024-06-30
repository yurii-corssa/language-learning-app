import { LevelLabelStyled } from "./LevelLabel.styled";

const LevelLabel = ({ value, isSelected, onChange }) => {
  return (
    <LevelLabelStyled $isSelected={isSelected} onClick={onChange}>
      {`#${value}`}
    </LevelLabelStyled>
  );
};

export default LevelLabel;
