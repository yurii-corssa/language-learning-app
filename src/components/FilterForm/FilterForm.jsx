import { useEffect, useState } from "react";
import { useFilterAttributes } from "../../hooks/useFilterAttributes";

const FilterForm = ({ changeFilter }) => {
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");

  const [languages, levels, prices, isLoading, error] = useFilterAttributes();

  useEffect(() => {
    changeFilter({ language, level, price });
  }, [changeFilter, language, level, price]);

  return (
    <>
      <form>
        <div>
          <label htmlFor="language">Languages</label>
          <select
            id="language"
            name="language"
            value={language}
            disabled={isLoading}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">- - - - - - -</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="level">Level of knowledge</label>
          <select
            id="level"
            name="level"
            value={level}
            disabled={isLoading}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">- - - - - - -</option>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <select
            id="price"
            name="price"
            value={price}
            disabled={isLoading}
            onChange={(e) => setPrice(Number(e.target.value))}
          >
            <option value="">- - - - - - -</option>
            {prices.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
      </form>
      {error && <p>Error: {error.message}</p>}
    </>
  );
};

export default FilterForm;
