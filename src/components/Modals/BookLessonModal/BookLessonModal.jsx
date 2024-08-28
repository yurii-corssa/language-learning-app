import BookLessonForm from "../../BookLessonForm/BookLessonForm";
import ModalBody from "../ModalContainer/ModalBody/ModalBody";
import { CurrentTeacher, TeacherAvatarImg } from "./BookLessonModal.styled";
import { TeacherAvatarThumb, TeacherName, TeacherNameLabel } from "./BookLessonModal.styled";

const BookLessonModal = ({ teacherData, openModal, closeModal }) => {
  const { name, surname, avatar_url: avatarUrl } = teacherData;
  const fullName = `${name} ${surname}`;

  return (
    <ModalBody
      title="Book trial lesson"
      text="Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
    >
      <CurrentTeacher>
        <TeacherAvatarThumb>
          <TeacherAvatarImg src={avatarUrl} alt={fullName} width="44" height="44" />
        </TeacherAvatarThumb>

        <div>
          <TeacherNameLabel>Your teacher</TeacherNameLabel>
          <TeacherName>{fullName}</TeacherName>
        </div>
      </CurrentTeacher>

      <BookLessonForm openModal={openModal} closeModal={closeModal} />
    </ModalBody>
  );
};

export default BookLessonModal;
