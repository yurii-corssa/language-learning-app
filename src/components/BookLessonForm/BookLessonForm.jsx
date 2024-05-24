import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { bookLessonSchema } from "../../helpers/schemas";

const BookLessonForm = ({ closeModal }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(bookLessonSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>What is your main reason for learning English?</p>
      <div>
        <label>
          <input
            type="radio"
            value="Career and business"
            disabled={formState.isSubmitting}
            {...register("reason")}
          />
          Career and business
        </label>

        <label>
          <input
            type="radio"
            value="Lesson for kids"
            disabled={formState.isSubmitting}
            {...register("reason")}
          />
          Lesson for kids
        </label>

        <label>
          <input
            type="radio"
            value="Living abroad"
            disabled={formState.isSubmitting}
            {...register("reason")}
          />
          Living abroad
        </label>

        <label>
          <input
            type="radio"
            value="Exams and coursework"
            disabled={formState.isSubmitting}
            {...register("reason")}
          />
          Exams and coursework
        </label>

        <label>
          <input
            type="radio"
            value="Culture, travel or hobby"
            disabled={formState.isSubmitting}
            {...register("reason")}
          />
          Culture, travel or hobby
        </label>

        <p>{formState.errors.reason?.message}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Full Name"
          disabled={formState.isSubmitting}
          {...register("fullName")}
        />
        <p>{formState.errors.fullName?.message}</p>

        <input
          type="email"
          placeholder="Email"
          disabled={formState.isSubmitting}
          {...register("email")}
        />
        <p>{formState.errors.email?.message}</p>

        <input
          type="tel"
          placeholder="Phone number"
          disabled={formState.isSubmitting}
          {...register("phoneNumber")}
        />
        <p>{formState.errors.phoneNumber?.message}</p>
      </div>

      <button disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "loading..." : "Book"}
      </button>
    </form>
  );
};

export default BookLessonForm;
