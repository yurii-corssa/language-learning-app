import { nanoid } from "nanoid";
import { LevelLabel } from "../../ui";

const Levels = ({ levels }) => {
  return (
    <ul>
      {levels.map((el) => {
        return (
          <li key={nanoid()}>
            <LevelLabel text={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default Levels;
