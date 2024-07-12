import { SvgIcon } from "../../../ui";
import { Price, SummaryItem, SummaryList } from "./TeacherSummary.styled";

const TeacherSummary = ({ lessonsDone, rating, price }) => {
  return (
    <SummaryList>
      <SummaryItem>
        <SvgIcon name="icon-book-open" />
        <span>Lessons online</span>
      </SummaryItem>

      <SummaryItem>
        <span>{`Lessons done: ${lessonsDone}`}</span>
      </SummaryItem>

      <SummaryItem $star={true}>
        <SvgIcon name="icon-star" />
        <span>{`Rating: ${rating}`}</span>
      </SummaryItem>

      <SummaryItem>
        <span>Price / 1 hour:</span>
        <Price>{`${price}$`}</Price>
      </SummaryItem>
    </SummaryList>
  );
};

export default TeacherSummary;
