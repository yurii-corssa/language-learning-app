import { AvatarContainer, AvatarImage } from "./Avatar.styled";

const Avatar = ({ src, alt = "user avatar", width = "56px", height = "56px" }) => {
  return (
    <AvatarContainer>
      {src && <AvatarImage src={src} alt={alt} width={width} height={height} />}
    </AvatarContainer>
  );
};

export default Avatar;
