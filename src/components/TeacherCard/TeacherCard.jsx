import { DetailedInfo, TeacherSummary, Reviews, Levels } from "./";
import { useEffect, useState } from "react";
import { addToFavorites, removeFromFavorites } from "../../api/users";
import { useModal } from "../../hooks/useModal";
import { AuthRequiredModal, BookLessonModal } from "../Modals";
import { useAuth } from "../../hooks/useAuth";
import { Button, SvgIcon } from "../ui";
import { TeacherAvatar, TeacherCardStyled, TeacherName } from "./TeacherCard.styled";
import { CardBtn, Experience, HeartBtn, MoreWrapper } from "./TeacherCard.styled";

const TeacherCard = ({ isOnline = true, teacherData, favoriteIds }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState(null);
  const { openModal, closeModal } = useModal();
  const { user } = useAuth();

  const { tid, name, surname, avatar_url: avatarUrl } = teacherData;
  const { levels, rating, reviews, languages, conditions, experience } = teacherData;
  const { lesson_info: lessonInfo, lessons_done: lessonsDone, price_per_hour: price } = teacherData;
  const fullName = `${name} ${surname}`;

  useEffect(() => {
    if (user) {
      if (Object.values(favoriteIds).includes(tid)) {
        setIsFavorite(true);
      }
    } else {
      setIsFavorite(false);
    }
  }, [favoriteIds, tid, user]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  const handleFavoriteClick = async () => {
    if (!user) {
      openModal(<AuthRequiredModal key="authRequired" openModal={openModal} />);
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
    <TeacherCardStyled>
      <HeartBtn $isFavorite={isFavorite} onClick={handleFavoriteClick}>
        <SvgIcon name="icon-heart" $isFavorite={isFavorite} />
      </HeartBtn>

      <TeacherAvatar $isOnline={isOnline}>
        <img src={avatarUrl} alt={fullName} width="96" height="96" />
      </TeacherAvatar>

      <TeacherName>{fullName}</TeacherName>

      <TeacherSummary lessonsDone={lessonsDone} rating={rating} price={price} />

      <DetailedInfo
        fullName={fullName}
        languages={languages}
        lessonInfo={lessonInfo}
        conditions={conditions}
      />

      <MoreWrapper>
        {showMoreInfo ? (
          <>
            <Experience>{experience}</Experience>

            <Reviews reviews={reviews} />
          </>
        ) : (
          <Button variant="underline" onClick={() => setShowMoreInfo(!showMoreInfo)}>
            Read more
          </Button>
        )}
      </MoreWrapper>

      <Levels fullName={fullName} levels={levels} />

      {showMoreInfo && (
        <CardBtn
          onClick={() =>
            openModal(
              <BookLessonModal key="bookLesson" teacherData={teacherData} closeModal={closeModal} />
            )
          }
        >
          Book trial lesson
        </CardBtn>
      )}
    </TeacherCardStyled>
  );
};

export default TeacherCard;
