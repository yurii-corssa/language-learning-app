import { LinearProgressBase, Buffer, Bar, BarInner } from "./LinearIndeterminate.styled";

const LinearIndeterminate = () => {
  return (
    <LinearProgressBase>
      <Buffer />
      <Bar $variant="primary">
        <BarInner />
      </Bar>
      <Bar $variant="secondary">
        <BarInner />
      </Bar>
    </LinearProgressBase>
  );
};

export default LinearIndeterminate;
