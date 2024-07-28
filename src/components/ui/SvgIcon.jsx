import { routes } from "../../helpers/routes";

const SvgIcon = ({ name, width = 26, height = 26 }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${routes.BASE}/images/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default SvgIcon;
