import { opacityVariants } from "../../styles/animations";
import { SkeletonAvatar, SkeletonHeader, SkeletonText } from "./SkeletonCard.styled";
import { SkeletonContainer, SkeletonTag } from "./SkeletonCard.styled";
import { SkeletonTagContainer, SkeletonTextContainer } from "./SkeletonCard.styled";

const SkeletonCard = () => (
  <SkeletonContainer variants={opacityVariants} initial="initial" animate="animate">
    <SkeletonAvatar />

    <SkeletonTextContainer>
      <SkeletonHeader height="26px" />

      <SkeletonText width="174px" height="24px" />
      <SkeletonText width="738px" height="24px" />
      <SkeletonText width="808px" height="24px" />

      <SkeletonTagContainer>
        <SkeletonTag width="110px" />
        <SkeletonTag width="124px" />
        <SkeletonTag width="133px" />
        <SkeletonTag width="151px" />
        <SkeletonTag width="124px" />
      </SkeletonTagContainer>
    </SkeletonTextContainer>
  </SkeletonContainer>
);

export default SkeletonCard;
