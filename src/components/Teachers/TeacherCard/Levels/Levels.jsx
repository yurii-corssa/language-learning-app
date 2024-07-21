import { LevelLabel } from "../../../ui";
import { useSearchParams } from "react-router-dom";
import { LevelsList } from "./LevelsList.styled";

const Levels = ({ tid, levels }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeLevel = (e) => {
    const value = e.target.textContent.slice(1);
    if (searchParams.get("level") === value) {
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
        const isSelected = searchParams.get("level") === el;
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
