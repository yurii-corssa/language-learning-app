const baseURL = import.meta.env.BASE_URL;

const SvgIcon = ({ name, width = 26, height = 26 }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${baseURL}images/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default SvgIcon;
