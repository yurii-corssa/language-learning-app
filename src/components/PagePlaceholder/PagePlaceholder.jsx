import { Notification } from "../Teachers/Teachers.styled";
import { PlaceholderWrapper } from "./PagePlaceholder.styled";

const PagePlaceholder = ({ image, notification }) => {
  return (
    <PlaceholderWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <svg width="250" height="250">
        <use href={`${image}#picture`}></use>
      </svg>
      <Notification>{notification}</Notification>
    </PlaceholderWrapper>
  );
};

export default PagePlaceholder;
