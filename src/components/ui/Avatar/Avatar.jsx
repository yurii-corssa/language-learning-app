import { routes } from "../../../helpers/routes";
import { AvatarContainer, AvatarImage } from "./Avatar.styled";

const Avatar = ({ src, alt = "user avatar", width = "56px", height = "56px" }) => {
  return (
    <AvatarContainer>
      <AvatarImage
        src={src || `${routes.BASE}/images/user-round.svg`}
        alt={alt}
        width={width}
        height={height}
      />
    </AvatarContainer>
  );
};

export default Avatar;
