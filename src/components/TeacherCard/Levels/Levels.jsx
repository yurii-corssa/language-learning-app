import { LevelLabel } from "../../ui";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Levels = ({ fullName, levels }) => {
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
    <ul>
      {levels.map((el) => {
        const isSelected = filteredLevel === el;
        return (
          <li style={{ display: "flex" }} key={`${fullName}-${el}`}>
            <LevelLabel isSelected={isSelected} value={el} onChange={handleChangeLevel} />
          </li>
        );
      })}
    </ul>
  );
};

export default Levels;
