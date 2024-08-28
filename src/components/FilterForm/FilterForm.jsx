import { useFilterAttributes } from "../../hooks/useFilterAttributes";
import { breakpoints } from "../../styles/variables";
import { Button, Dropdown, SvgIcon } from "../ui";
import { opacityVariants, filterVariants } from "../../styles/animations";
import { useMediaQuery } from "../../hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { DropdownsWrapper, FilterBtn } from "./FilterForm.styled";
import { FilterBtnWrapper, FilterFormStyled } from "./FilterForm.styled";

const FilterForm = ({ filters, setSearchParams }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [languages, levels, prices, isLoading] = useFilterAttributes();

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.tablet - 1}px)`);

  const handleChange = (e) => {
    const name = e.currentTarget.getAttribute("data-name");
    const value = e.currentTarget.getAttribute("data-value");

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

  const toggleShowFilter = () => {
    setShowFilter((prevState) => !prevState);
  };

  const resetFilter = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <FilterFormStyled>
      <AnimatePresence>
        <FilterBtnWrapper key="filter-buttons">
          {(filters?.language || filters?.level || filters?.price) && (
            <motion.div
              key="reset-filter-btn"
              variants={opacityVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Button variant="icon" onClick={resetFilter} disabled={isLoading}>
                <SvgIcon name="icon-filter-x" width="20px" height="20px" />
              </Button>
            </motion.div>
          )}
          {isMobile && (
            <FilterBtn
              key="filter-btn"
              $variant="icon"
              $showFilter={showFilter}
              disabled={isLoading}
              onClick={toggleShowFilter}
            >
              Filter
              <SvgIcon name={"icon-chevron-down"} width="20px" height="20px" />
            </FilterBtn>
          )}
        </FilterBtnWrapper>

        {(showFilter || !isMobile) && (
          <DropdownsWrapper
            key="dropdowns"
            variants={filterVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Dropdown
              id="language"
              label="Languages"
              value={filters?.language ?? ""}
              options={languages}
              minWidth="220px"
              disabled={isLoading}
              onChange={handleChange}
            />
            <Dropdown
              id="level"
              label="Level of knowledge"
              value={filters?.level ?? ""}
              options={levels}
              minWidth="246px"
              disabled={isLoading}
              onChange={handleChange}
            />
            <Dropdown
              id="price"
              label="Price"
              value={filters?.price ?? ""}
              options={prices}
              minWidth="124px"
              disabled={isLoading}
              onChange={handleChange}
            />
          </DropdownsWrapper>
        )}
      </AnimatePresence>
    </FilterFormStyled>
  );
};

export default FilterForm;
