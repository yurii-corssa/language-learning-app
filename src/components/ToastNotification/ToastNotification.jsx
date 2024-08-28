import { useEffect } from "react";
import { Button, SvgIcon } from "../ui";
import { opacityVariants } from "../../styles/animations";
import { IconWrapper, ToastCard } from "./ToastNotification.styled";

const ToastNotification = ({ id, type, message, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const selectNameIcon = (type) => {
    switch (type) {
      case "success":
        return "icon-check";
      case "error":
        return "icon-x";
      case "warning":
        return "icon-shield-alert";
      default:
        return "icon-info";
    }
  };

  return (
    <ToastCard
      key={id}
      id={id}
      variants={opacityVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout="position"
    >
      <IconWrapper $type={type}>
        <SvgIcon name={selectNameIcon(type)} width="32" height="32" />
      </IconWrapper>
      <p>{message}</p>
      <Button variant="x" onClick={onClose}>
        <SvgIcon name="icon-x" width="32" height="32" />
      </Button>
    </ToastCard>
  );
};

export default ToastNotification;
