const ModalBody = ({ title, text, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {children}
    </div>
  );
};

export default ModalBody;
