import { LevelLabel } from "../../ui";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LevelsList } from "./LevelsList.styled";

const Levels = ({ tid, levels }) => {
  const [filteredLevel, setFilteredLevel] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const level = searchParams.get("level");
    setFilteredLevel(level);
  }, [searchParams]);

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
        const isSelected = filteredLevel === el;
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
