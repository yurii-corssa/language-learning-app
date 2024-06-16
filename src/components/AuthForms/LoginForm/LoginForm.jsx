import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "/helpers/schemas";
import { useForm } from "react-hook-form";
import { ProviderButtons } from "../";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Button, DotsLoader, RingLoader, TextInput } from "../../ui";
import { Divider, DividerWrapper, ModalBackdrop } from "./LoginForm.styled";

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
        <TextInput
          type="email"
          placeholder="Email"
          disabled={isLoading}
          errorMessage={formState.errors.email?.message}
          {...register("email")}
        />
        <TextInput
          type="password"
          placeholder="Password"
          disabled={isLoading}
          errorMessage={formState.errors.password?.message}
          {...register("password")}
        />
        {/* formState.errors.authentication?.message */}
      </div>

      <Button type="submit" variant="primary" disabled={isLoading} width="100%">
        {formState.isSubmitting ? <DotsLoader /> : <span>Log in</span>}
      </Button>

      <DividerWrapper>
        <Divider>or</Divider>
      </DividerWrapper>

      <ProviderButtons
        onClose={onClose}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setError={control.setError}
      />

      {isLoading && (
        <ModalBackdrop>
          <RingLoader width="65" height="65" />
        </ModalBackdrop>
      )}
    </form>
  );
};

export default LoginForm;
