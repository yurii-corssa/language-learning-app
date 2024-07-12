import { nanoid } from "nanoid";

import { SvgIcon } from "../../../ui";
import { ReviewItem, ReviewList, ReviewerName, ReviewerRating } from "./Reviews.styled";
import { slideUpVariants } from "../../../../styles/animations";
import { memo } from "react";

const Reviews = memo(({ reviews = [] }) => {
  if (!reviews.length) {
    return null;
  }

  return (
    <ReviewList>
      {reviews.map((el) => {
        const key = nanoid();
        return (
          <ReviewItem key={key} variants={slideUpVariants}>
            <ReviewerName>{el.reviewer_name}</ReviewerName>

            <ReviewerRating>
              <SvgIcon name="icon-star" width="16" height="16" />
              {Number(el.reviewer_rating).toFixed(1)}
            </ReviewerRating>

            <span>{el.comment}</span>
          </ReviewItem>
        );
      })}
    </ReviewList>
  );
});

Reviews.displayName = "Reviews";

export default Reviews;
