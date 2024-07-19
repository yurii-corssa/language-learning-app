import { opacityVariants } from "../../../styles/animations";
import { SkeletonFilterContainer, SkeletonFilterInput } from "./SkeletonFilter.styled";
import { SkeletonFilterInputWrapper, SkeletonFilterLabel } from "./SkeletonFilter.styled";

const SkeletonFilter = () => {
  return (
    <SkeletonFilterContainer variants={opacityVariants} initial="initial" animate="animate">
      <SkeletonFilterInputWrapper width="220px">
        <SkeletonFilterLabel />
        <SkeletonFilterInput />
      </SkeletonFilterInputWrapper>

      <SkeletonFilterInputWrapper width="246px">
        <SkeletonFilterLabel />
        <SkeletonFilterInput />
      </SkeletonFilterInputWrapper>

      <SkeletonFilterInputWrapper width="124px">
        <SkeletonFilterLabel />
        <SkeletonFilterInput />
      </SkeletonFilterInputWrapper>
    </SkeletonFilterContainer>
  );
};

export default SkeletonFilter;
