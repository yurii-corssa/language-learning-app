import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/schemas";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button, DotsLoader, TextInput } from "../ui";
import { FormStyled, InputsWrapper } from "./AuthForms.styled";
import { useToast } from "../../hooks";

const LoginForm = ({ isLoading, setIsLoading, closeModal }) => {
  const { signin } = useAuth();
  const { addToast } = useToast();

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    setIsLoading(formState.isSubmitting);
  }, [formState.isSubmitting, setIsLoading]);

  useEffect(() => {
    if (formState.errors.authentication?.message) {
      addToast.error(formState.errors.authentication.message);
    }
  }, [addToast, formState.errors.authentication]);

  const onSubmit = async ({ email, password }) => {
    try {
      await signin(email, password);
      closeModal();
    } catch {
      control.setError("authentication", {
        message: "Incorrect login or password, please try again",
      });
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputsWrapper>
        <TextInput
          type="email"
          placeholder="Email"
          disabled={isLoading}
          autoComplete="email"
          errorMessage={formState.errors.email?.message}
          {...register("email")}
        />
        <TextInput
          type="password"
          placeholder="Password"
          disabled={isLoading}
          autoComplete="current-password"
          errorMessage={formState.errors.password?.message}
          {...register("password")}
        />
      </InputsWrapper>

      <Button type="submit" variant="primary" disabled={isLoading} width="100%">
        {formState.isSubmitting ? <DotsLoader /> : <span>Log In</span>}
      </Button>
    </FormStyled>
  );
};

export default LoginForm;
