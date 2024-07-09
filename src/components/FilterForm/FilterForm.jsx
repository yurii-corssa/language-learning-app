import { useFilterAttributes } from "../../hooks/useFilterAttributes";

const FilterForm = ({ filters, setSearchParams }) => {
  const [languages, levels, prices, isLoading, error] = useFilterAttributes();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value) {
      setSearchParams((prevParams) => {
        prevParams.set(name, value);
        return prevParams;
      });
    } else {
      setSearchParams((prevParams) => {
        prevParams.delete(name);
        return prevParams;
      });
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="language">Languages</label>
        <select
          id="language"
          name="language"
          value={filters.language ?? ""}
          disabled={isLoading}
          onChange={handleChange}
        >
          <option key="defaultLang" value="">
            - - - - - - -
          </option>
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
          value={filters.level ?? ""}
          disabled={isLoading}
          onChange={handleChange}
        >
          <option key="defaultLevel" value="">
            - - - - - - -
          </option>
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
          value={filters.price ?? ""}
          disabled={isLoading}
          onChange={handleChange}
        >
          <option key="defaultPrice" value="">
            - - - - - - -
          </option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default FilterForm;
