import ModalBody from "../SharedModal/ModalBody/ModalBody";
import SharedModal from "../SharedModal/SharedModal";

const BookLessonModal = ({ teacherData, onClose }) => {
  const { tid, name, surname, avatar_url: avatarUrl } = teacherData;
  const fullName = `${name} ${surname}`;

  return (
    <SharedModal onClose={onClose}>
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
        <p>What is your main reason for learning English?</p>
      </ModalBody>
    </SharedModal>
  );
};

export default BookLessonModal;
