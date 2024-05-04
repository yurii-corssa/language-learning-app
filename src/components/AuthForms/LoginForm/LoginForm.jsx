import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "/helpers/schemas";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/firebaseApp";

const LoginForm = ({ onClose }) => {
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (e) {
      control.setError("login", { message: "Incorrect login or password, please try again" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{formState.errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p>{formState.errors.password?.message}</p>
        <p>{formState.errors.login?.message}</p>
      </div>

      <button> {formState.isSubmitting ? "loading..." : "Log in"} </button>
    </form>
  );
};

export default LoginForm;
