import * as yup from "yup";

export const bookLessonSchema = yup.object().shape({
  reason: yup.string().required("Please select a reason for learning English"),
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});
