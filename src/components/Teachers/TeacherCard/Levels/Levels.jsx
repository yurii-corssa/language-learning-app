import { LevelLabel } from "../../../ui";
import { useSearchParams } from "react-router-dom";
import { LevelsList } from "./LevelsList.styled";

const Levels = ({ tid, levels, filterLevel }) => {
  const setSearchParams = useSearchParams()[1];

  const handleChangeLevel = (e) => {
    const value = e.target.textContent.slice(1);
    if (filterLevel === value) {
      setSearchParams((prevParams) => {
        prevParams.delete("level");
        return prevParams;
      });
    } else {
      setSearchParams((prevParams) => {
        prevParams.set("level", value);
        return prevParams;
      });
    }
  };

  return (
    <LevelsList>
      {levels.map((el) => {
        const isSelected = filterLevel === el;
        return (
          <LevelLabel
            key={`${tid}-${el}`}
            isSelected={isSelected}
            value={el}
            onChange={handleChangeLevel}
          />
        );
      })}
    </LevelsList>
  );
};

export default Levels;
