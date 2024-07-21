import { useEffect, useRef } from "react";
import ListBottom from "../ListBottom/ListBottom";
import TeacherCard from "../TeacherCard/TeacherCard";
import { TeachersListStyled } from "./TeachersList.styled";

const TeachersList = (props) => {
  const { teachers, user, favoriteIds, initialCount, visibleCount, isLastPage, showMore } = props;
  const scrollElement = useRef(null);

  useEffect(() => {
    if (scrollElement.current) {
      scrollElement.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [teachers.length]);

  const lastGroupSize = teachers.length % initialCount || initialCount;
  const firstInLastGroupIndex = teachers.length - lastGroupSize;

  return (
    <>
      <TeachersListStyled>
        {teachers.map((el, index) => {
          const isFirstInGroup = index % initialCount === 0;
          const isNotFirstGroup = index >= initialCount;
          const isFirstInLastGroup = index === firstInLastGroupIndex;
          const shouldHaveRef = isFirstInGroup && isNotFirstGroup && isFirstInLastGroup;
          const refProp = shouldHaveRef ? { ref: scrollElement } : {};

          return (
            <TeacherCard
              key={el.tid}
              teacherData={el}
              user={user}
              favoriteIds={favoriteIds}
              delay={(index - (visibleCount - initialCount)) * 0.1}
              {...refProp}
            />
          );
        })}
      </TeachersListStyled>

      <ListBottom isLastPage={isLastPage} showMore={showMore} />
    </>
  );
};

export default TeachersList;
