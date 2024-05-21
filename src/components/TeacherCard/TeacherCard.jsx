import { FaRegHeart, FaHeart } from "react-icons/fa";
import { DetailedInfo, TeacherSummary, Reviews, Levels } from "./";
import { useEffect, useState } from "react";
import { addToFavorites, removeFromFavorites } from "../../api/users";
import { useModal } from "../../contexts/ModalContext";

const TeacherCard = ({ teacherData, user, favorites }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState(null);

  const { tid, name, surname, avatar_url: avatarUrl } = teacherData;
  const { levels, rating, reviews, languages, conditions, experience } = teacherData;
  const { lesson_info: lessonInfo, lessons_done: lessonsDone, price_per_hour: price } = teacherData;
  const fullName = `${name} ${surname}`;

  const { openModal } = useModal();

  useEffect(() => {
    if (user) {
      if (Object.values(favorites).includes(tid)) {
        setIsFavorite(true);
      }
    } else {
      setIsFavorite(false);
    }
  }, [favorites, tid, user]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  const handleFavoriteClick = async () => {
    if (!user) {
      openModal("authRequired");
      return;
    }

    try {
      if (!isFavorite) {
        await addToFavorites(user.uid, tid);
        setIsFavorite(true);
      } else {
        await removeFromFavorites(user.uid, tid);
        setIsFavorite(false);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <li>
      <div className="TeacherAvatar">
        <img src={avatarUrl} alt={fullName} width="96" height="96" />
      </div>

      <div className="TeacherCardContent">
        <div className="TeacherCardHeader">
          <h2 className="TeacherName">{fullName} </h2>

          <TeacherSummary lessonsDone={lessonsDone} rating={rating} price={price} />

          <button className="HeartBtn" onClick={handleFavoriteClick}>
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>

        <DetailedInfo languages={languages} lessonInfo={lessonInfo} conditions={conditions} />

        {showMoreInfo ? (
          <div className="moreInfo">
            <p className="experience">{experience}</p>

            <Reviews reviews={reviews} />
          </div>
        ) : (
          <button onClick={() => setShowMoreInfo(!showMoreInfo)}>Read more</button>
        )}

        <Levels levels={levels} />

        <button>Book trial lesson</button>
      </div>
    </li>
  );
};

export default TeacherCard;
