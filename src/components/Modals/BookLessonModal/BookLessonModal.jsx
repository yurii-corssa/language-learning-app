import BookLessonForm from "../../BookLessonForm/BookLessonForm";
import ModalBody from "../SharedModal/ModalBody/ModalBody";

const BookLessonModal = ({ teacherData, closeModal }) => {
  const { name, surname, avatar_url: avatarUrl } = teacherData;
  const fullName = `${name} ${surname}`;

  return (
    <ModalBody
      title="Book trial lesson"
      text="Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
    >
      <div className="CurrentTeacher">
        <div className="TeacherAvatar">
          <img src={avatarUrl} alt={fullName} width="44" height="44" />
        </div>
        <div className="TeacherName">
          <p>Your teacher</p>
          <h3>{fullName}</h3>
        </div>
      </div>

      <BookLessonForm closeModal={closeModal} />
    </ModalBody>
  );
};

export default BookLessonModal;
