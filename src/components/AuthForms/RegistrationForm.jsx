import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../helpers/schemas";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { FormStyled, InputsWrapper } from "./AuthForms.styled";
import { Button, DotsLoader, TextInput } from "../ui";
import { useToast } from "../../hooks";

const RegistrationForm = ({ isLoading, setIsLoading, closeModal }) => {
  const { signup } = useAuth();
  const { addToast } = useToast();

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  useEffect(() => {
    setIsLoading(formState.isSubmitting);
  }, [formState.isSubmitting, setIsLoading]);

  useEffect(() => {
    if (formState.errors.authentication?.message) {
      addToast.error(formState.errors.authentication.message);
    }
  }, [addToast, formState.errors.authentication]);

  const onSubmit = async ({ displayName, email, password }) => {
    try {
      await signup(email, password, displayName);
      closeModal();
    } catch {
      control.setError("authentication", {
        message: "Registration error, please try again later or use another email address",
      });
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputsWrapper>
        <TextInput
          type="text"
          placeholder="Name"
          disabled={isLoading}
          autoComplete="name"
          errorMessage={formState.errors.displayName?.message}
          {...register("displayName")}
        />
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
        {formState.isSubmitting ? <DotsLoader /> : <span>Sign Up</span>}
      </Button>
    </FormStyled>
  );
};

export default RegistrationForm;
