import { FaRegHeart } from "react-icons/fa";
import { DetailedInfo, TeacherSummary, Reviews, Levels } from "./";
import { useState } from "react";

const TeacherCard = ({ data }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const fullName = `${data.name} ${data.surname}`;

  return (
    <li>
      <div className="TeacherAvatar">
        <img src={data.avatar_url} alt={fullName} width="96" height="96" />
      </div>

      <div className="TeacherCardContent">
        <div className="TeacherCardHeader">
          <h2 className="TeacherName">{fullName} </h2>

          <TeacherSummary
            lessonsDone={data.lessons_done}
            rating={data.rating}
            pricePerHour={data.price_per_hour}
          />

          <button className="HeartBtn">
            <FaRegHeart />
          </button>
        </div>

        <DetailedInfo
          languages={data.languages}
          lessonInfo={data.lesson_info}
          conditions={data.conditions}
        />

        {showMoreInfo ? (
          <div className="moreInfo">
            <p className="experience">{data.experience}</p>

            <Reviews reviews={data.reviews} />
          </div>
        ) : (
          <button onClick={() => setShowMoreInfo(!showMoreInfo)}>Read more</button>
        )}

        <Levels levels={data.levels} />

        <button>Book trial lesson</button>
      </div>
    </li>
  );
};

export default TeacherCard;
