import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DetailedList, InfoText, Speak } from "./DetailedInfo.styled";

const DetailedInfo = ({ tid, languages, lessonInfo, conditions }) => {
  const [filteredLanguage, setFilteredLanguage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const language = searchParams.get("language");
    setFilteredLanguage(language);
  }, [searchParams]);

  const handleChangeLanguege = (e) => {
    const value = e.target.textContent.split(",")[0];
    if (searchParams.get("language") === value) {
      setSearchParams((prevParams) => {
        prevParams.delete("language");
        return prevParams;
      });
    } else {
      setSearchParams((prevParams) => {
        prevParams.set("language", value);
        return prevParams;
      });
    }
  };

  return (
    <DetailedList>
      <li>
        <InfoText>
          <span>Speaks:</span>{" "}
          {languages.map((el, i) => {
            const isSelected = filteredLanguage === el;
            return i !== languages.length - 1 ? (
              <Speak
                key={`${tid}${el}`}
                $isSelected={isSelected}
                onClick={handleChangeLanguege}
              >{`${el},`}</Speak>
            ) : (
              <Speak key={`${tid}${el}`} $isSelected={isSelected} onClick={handleChangeLanguege}>
                {el}
              </Speak>
            );
          })}
        </InfoText>
      </li>

      <li>
        <InfoText>
          <span>Lesson Info:</span> {lessonInfo}
        </InfoText>
      </li>

      <li>
        <InfoText>
          <span>Conditions:</span> {conditions.join(" ")}
        </InfoText>
      </li>
    </DetailedList>
  );
};

export default DetailedInfo;
