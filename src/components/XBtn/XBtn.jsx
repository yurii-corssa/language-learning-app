import { LuX } from "react-icons/lu";
import { XBtnStyled } from "./XBtn.styled";

const XBtn = ({ onClose }) => {
  return (
    <XBtnStyled type="button" onClick={onClose}>
      <LuX size={32} strokeWidth={1.5} />
    </XBtnStyled>
  );
};

export default XBtn;
