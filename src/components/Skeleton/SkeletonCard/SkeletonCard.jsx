import { opacityVariants } from "../../../styles/animations";
import { SkeletonCardTag, SkeletonCardTagContainer, SkeletonCardText } from "./SkeletonCard.styled";
import { SkeletonCardAvatar, SkeletonCardContainer } from "./SkeletonCard.styled";
import { SkeletonCardTextContainer, SkeletonCardHeader } from "./SkeletonCard.styled";

const SkeletonCard = () => (
  <SkeletonCardContainer variants={opacityVariants} initial="initial" animate="animate">
    <SkeletonCardAvatar />

    <SkeletonCardTextContainer>
      <SkeletonCardHeader height="26px" />

      <SkeletonCardText width="174px" height="24px" />
      <SkeletonCardText width="738px" height="24px" />
      <SkeletonCardText width="808px" height="24px" />

      <SkeletonCardTagContainer>
        <SkeletonCardTag width="110px" />
        <SkeletonCardTag width="124px" />
        <SkeletonCardTag width="133px" />
        <SkeletonCardTag width="151px" />
        <SkeletonCardTag width="124px" />
      </SkeletonCardTagContainer>
    </SkeletonCardTextContainer>
  </SkeletonCardContainer>
);

export default SkeletonCard;
