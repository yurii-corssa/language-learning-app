import defaultUserAvatar from "../../../assets/images/user.png";
import { AvatarContainer, AvatarImage } from "./Avatar.styled";

const Avatar = ({ src, alt = "user avatar", width = "56px", height = "56px" }) => {
  return (
    <AvatarContainer>
      <AvatarImage src={src ? src : defaultUserAvatar} alt={alt} width={width} height={height} />
    </AvatarContainer>
  );
};

export default Avatar;
