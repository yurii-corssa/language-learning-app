import { Button } from "../../ui";
import ModalBody from "../ModalContainer/ModalBody/ModalBody";
import PagePlaceholder from "../../PagePlaceholder/PagePlaceholder";

const baseURL = import.meta.env.BASE_URL;

const NotificationModal = ({ title, text, svgName, onClose }) => {
  return (
    <ModalBody title={title} text={text}>
      <PagePlaceholder src={`${baseURL}images/${svgName}.svg`} />
      <Button width="100%" onClick={onClose}>
        Okay
      </Button>
    </ModalBody>
  );
};

export default NotificationModal;
