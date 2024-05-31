import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "/helpers/schemas";
import { ProviderButtons } from "../";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const RegistrationForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  useEffect(() => {
    setIsLoading(formState.isSubmitting);
  }, [formState.isSubmitting]);

  const onSubmit = async ({ displayName, email, password }) => {
    try {
      await signup(email, password, displayName);
      onClose();
    } catch {
      control.setError("authentication", {
        message: "Registration error, please try again later or use another email address",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Name" {...register("displayName")} disabled={isLoading} />
        <p>{formState.errors.displayName?.message}</p>

        <input type="email" placeholder="Email" {...register("email")} disabled={isLoading} />
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

      <button disabled={isLoading}>{formState.isSubmitting ? "loading..." : "Sign Up"}</button>

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

export default RegistrationForm;
