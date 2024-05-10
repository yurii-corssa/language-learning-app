import { nanoid } from "nanoid";
import { FaStar } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((el) => {
        const key = nanoid();
        return (
          <li key={key}>
            <p>{el.reviewer_name}</p>

            <p>
              <FaStar />
              <span>{Number(el.reviewer_rating).toFixed(1)}</span>
            </p>

            <p>{el.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
