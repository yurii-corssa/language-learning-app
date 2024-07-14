import { useEffect } from "react";
import ListBottom from "../ListBottom/ListBottom";
import TeacherCard from "../TeacherCard/TeacherCard";
import { TeachersListStyled } from "./TeachersList.styled";

const TeachersList = (props) => {
  const { teachers, user, favoriteIds, filters, delayCount, isLastPage, showMore } = props;

  useEffect(() => {
    if (teachers.length - 3 !== 1) {
      const element = document.getElementById(teachers.length - 3);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [teachers.length]);

  return (
    <>
      <TeachersListStyled>
        {teachers.map((el, index) => {
          return (
            <TeacherCard
              id={index + 1}
              key={el.tid}
              teacherData={el}
              user={user}
              favoriteIds={favoriteIds}
              filters={filters}
              delay={(index - delayCount) * 0.1}
            />
          );
        })}
      </TeachersListStyled>

      <ListBottom isLastPage={isLastPage} showMore={showMore} />
    </>
  );
};

export default TeachersList;
