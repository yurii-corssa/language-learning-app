const LevelLabel = ({ text, onClick }) => {
  return <button onClick={() => onClick()}>{`#${text}`}</button>;
};

export default LevelLabel;
