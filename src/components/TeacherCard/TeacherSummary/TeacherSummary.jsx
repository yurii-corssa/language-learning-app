import { LuBookOpen } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const TeacherSummary = ({ lessonsDone, rating, pricePerHour }) => {
  return (
    <ul className="LessonInfo">
      <li>
        <LuBookOpen />
        <span>Lessons online</span>
      </li>

      <li>
        <span>{`Lessons done: ${lessonsDone}`}</span>
      </li>

      <li>
        <FaStar />
        <span>{`Rating: ${rating}`}</span>
      </li>

      <li>
        <span>{`Price / 1 hour: ${`${pricePerHour}$`}`}</span>
      </li>
    </ul>
  );
};

export default TeacherSummary;
