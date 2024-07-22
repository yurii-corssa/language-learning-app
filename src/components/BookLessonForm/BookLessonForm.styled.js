import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../styles/variables";

export const BookLessonFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormHeader = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;

export const RadiosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ErrorMessage = styled(motion.small)`
  display: block;
  padding: 2px 8px;
  color: ${colors.red};
`;
