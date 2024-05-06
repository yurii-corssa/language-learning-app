import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "/helpers/schemas";
import { auth } from "/firebaseApp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegistrationForm = ({ onClose }) => {
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async ({ displayName, email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
      });
      onClose();
    } catch (e) {
      control.setError("registration", {
        message: "Registration error, please try again later or use another email address",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Name" {...register("displayName")} />
        <p>{formState.errors.displayName?.message}</p>

        <input type="email" placeholder="Email" {...register("email")} />
        <p>{formState.errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p>{formState.errors.password?.message}</p>
        <p>{formState.errors.registration?.message}</p>
      </div>

      <button> {formState.isSubmitting ? "loading..." : "Sign Up"} </button>
    </form>
  );
};

export default RegistrationForm;
