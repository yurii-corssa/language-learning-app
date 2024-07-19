import SkeletonCard from "./SkeletonCard/SkeletonCard";
import SkeletonFilter from "./SkeletonFilter/SkeletonFilter";

const Skeleton = () => {
  return (
    <>
      <SkeletonFilter />
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <SkeletonCard key={i} />
        ))}
    </>
  );
};

export default Skeleton;
