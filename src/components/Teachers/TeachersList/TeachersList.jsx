import { AnimatePresence } from "framer-motion";
import TeacherCard from "../TeacherCard/TeacherCard";
import { TeachersListStyled } from "./TeachersList.styled";

const TeachersList = ({ teachers, user, favoriteIds, filters, delayCount }) => {
  return (
    <TeachersListStyled>
      <AnimatePresence>
        {teachers.map((el, index) => {
          return (
            <TeacherCard
              key={el.tid}
              teacherData={el}
              user={user}
              favoriteIds={favoriteIds}
              filters={filters}
              delay={(index - delayCount) * 0.1}
            />
          );
        })}
      </AnimatePresence>
    </TeachersListStyled>
  );
};

export default TeachersList;
