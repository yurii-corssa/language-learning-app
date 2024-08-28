import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { bookLessonSchema } from "../../helpers/schemas";
import { Button, RadioOption, TextInput } from "../ui";
import { AnimatePresence } from "framer-motion";
import { opacityVariants } from "../../styles/animations";
import { BookLessonFormStyled, ErrorMessage } from "./BookLessonForm.styled";
import { FormHeader, InputsWrapper, RadiosWrapper } from "./BookLessonForm.styled";
import NotificationModal from "../Modals/NotificationModal/NotificationModal";
import { modalContent } from "../../styles/variables";

const BookLessonForm = ({ openModal, closeModal }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(bookLessonSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    openModal(
      <NotificationModal
        key="noticeModal"
        title={modalContent.thankYouModal.title}
        text={modalContent.thankYouModal.text}
        svgName="thank-you"
        onClose={closeModal}
      />
    );
  };

  return (
    <BookLessonFormStyled onSubmit={handleSubmit(onSubmit)}>
      <RadiosWrapper>
        <FormHeader>What is your main reason for learning English?</FormHeader>
        <RadioOption
          id="career"
          name="reason"
          value="career"
          label="Career and business"
          disabled={formState.isSubmitting}
          {...register("reason")}
        />

        <RadioOption
          id="kids"
          name="reason"
          value="kids"
          label="Lesson for kids"
          disabled={formState.isSubmitting}
          {...register("reason")}
        />

        <RadioOption
          id="abroad"
          name="reason"
          value="abroad"
          label="Living abroad"
          disabled={formState.isSubmitting}
          {...register("reason")}
        />

        <RadioOption
          id="exams"
          name="reason"
          value="exams"
          label="Exams and coursework"
          disabled={formState.isSubmitting}
          {...register("reason")}
        />

        <RadioOption
          id="hobby"
          name="reason"
          value="hobby"
          label="Culture, travel or hobby"
          disabled={formState.isSubmitting}
          {...register("reason")}
        />

        <AnimatePresence>
          {formState.errors.reason?.message && (
            <ErrorMessage
              variants={opacityVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {formState.errors.reason.message}
            </ErrorMessage>
          )}
        </AnimatePresence>
      </RadiosWrapper>

      <InputsWrapper>
        <TextInput
          type="text"
          placeholder="Full Name"
          disabled={formState.isSubmitting}
          autoComplete="name"
          errorMessage={formState.errors.fullName?.message}
          {...register("fullName")}
        />

        <TextInput
          type="email"
          placeholder="Email"
          disabled={formState.isSubmitting}
          autoComplete="email"
          errorMessage={formState.errors.email?.message}
          {...register("email")}
        />

        <TextInput
          type="tel"
          placeholder="Phone number"
          disabled={formState.isSubmitting}
          autoComplete="tel"
          errorMessage={formState.errors.phoneNumber?.message}
          {...register("phoneNumber")}
        />
      </InputsWrapper>

      <Button type="submit" width="100%" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "loading..." : "Book"}
      </Button>
    </BookLessonFormStyled>
  );
};

export default BookLessonForm;
