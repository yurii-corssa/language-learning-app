import { AvatarContainer, AvatarImage } from "./Avatar.styled";

const baseURL = import.meta.env.BASE_URL;

const Avatar = ({ src, alt = "user avatar", width = "56px", height = "56px" }) => {
  return (
    <AvatarContainer>
      <AvatarImage
        src={src || `${baseURL}/images/user-round.svg`}
        alt={alt}
        width={width}
        height={height}
      />
    </AvatarContainer>
  );
};

export default Avatar;
