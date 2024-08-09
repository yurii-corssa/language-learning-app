import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const CurrentTeacher = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const TeacherAvatarThumb = styled.div`
  width: 44px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
`;

export const TeacherAvatarImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TeacherNameLabel = styled.p`
  color: ${colors.grey};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

export const TeacherName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
