import { pageContent } from "../../../styles/variables";
import { Button } from "../../ui";
import { Notification } from "../Teachers.styled";
import { BottomWrapper } from "./ListBottom.styled";

const ListBottom = ({ isLastPage, showMore }) => {
  return (
    <BottomWrapper>
      {isLastPage ? (
        <Notification>{pageContent.isLastPage}</Notification>
      ) : (
        <Button onClick={showMore}>Load more</Button>
      )}
    </BottomWrapper>
  );
};

export default ListBottom;
