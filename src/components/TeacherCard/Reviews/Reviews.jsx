import { nanoid } from "nanoid";

import { SvgIcon } from "../../ui";
import { ReviewItem, ReviewList, ReviewerName, ReviewerRating } from "./Reviews.styled";

const Reviews = ({ reviews }) => {
  return (
    <ReviewList>
      {reviews.map((el) => {
        const key = nanoid();
        return (
          <ReviewItem key={key}>
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
};

export default Reviews;
