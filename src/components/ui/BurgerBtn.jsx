import Button from "./Button/Button";
import SvgIcon from "./SvgIcon";

const BurgerBtn = ({ onClick }) => {
  return (
    <Button variant="transparent" onClick={onClick}>
      <SvgIcon name="icon-burger-menu" width="28" height="28" />
    </Button>
  );
};

export default BurgerBtn;
