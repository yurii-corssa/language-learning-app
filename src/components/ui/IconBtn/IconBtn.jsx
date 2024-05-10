import { IconBtnStyled } from "./IconBtn.styled";

const IconBtn = ({ icon: Icon, onClick }) => {
  return (
    <IconBtnStyled type="button" onClick={onClick}>
      <Icon size={32} strokeWidth={1.5} />
    </IconBtnStyled>
  );
};

export default IconBtn;
