import sprite from "/assets/images/sprite.svg";

const SvgIcon = ({ name, width = 26, height = 26 }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default SvgIcon;
