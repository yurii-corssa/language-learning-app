import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "/helpers/schemas";
import { useForm } from "react-hook-form";
import { ProviderButtons } from "../";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const LoginForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { signin } = useAuth();

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    setIsLoading(formState.isSubmitting);
  }, [formState.isSubmitting]);

  const onSubmit = async ({ email, password }) => {
    try {
      await signin(email, password);
      onClose();
    } catch {
      control.setError("authentication", {
        message: "Incorrect login or password, please try again",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Email" {...register("email")} disabled={isLoading} />
        <p>{formState.errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          disabled={isLoading}
        />
        <p>{formState.errors.password?.message}</p>
        <p>{formState.errors.authentication?.message}</p>
      </div>

      <button disabled={isLoading}> {formState.isSubmitting ? "loading..." : "Log in"} </button>

      <ProviderButtons
        onClose={onClose}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setError={control.setError}
      />

      {isLoading && <div>Loader...</div>}
    </form>
  );
};

export default LoginForm;
