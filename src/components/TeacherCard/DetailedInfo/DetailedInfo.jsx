const DetailedInfo = ({ languages, lessonInfo, conditions }) => {
  return (
    <ul>
      <li>
        <p>
          {`Speaks:
                ${languages
                  .map((el, i) => (i !== languages.length - 1 ? `${el},` : el))
                  .join(" ")}`}
        </p>
      </li>

      <li>
        <p>{`Lesson Info: ${lessonInfo}`}</p>
      </li>

      <li>
        <p>
          {`Conditions:
              ${conditions.join(" ")}`}
        </p>
      </li>
    </ul>
  );
};

export default DetailedInfo;
