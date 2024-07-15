import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { DropdownWrapper, Label, Option, OptionsList, Select } from "./Dropdown.styled";
import { dropdownVariants, slideUpVariants } from "../../../styles/animations";
import SvgIcon from "../SvgIcon";

const Dropdown = ({ id, label, value, options, minWidth, disabled, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleSelect = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleChange = (e) => {
    if (e.key === "Enter") {
      onChange(e);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleSelect();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      window.addEventListener("blur", toggleSelect);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("blur", toggleSelect);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("blur", toggleSelect);
    };
  }, [isOpen]);

  return (
    <DropdownWrapper variants={slideUpVariants}>
      <Label htmlFor={id}>{label}</Label>
      <Select
        ref={selectRef}
        value={value}
        $disabled={disabled}
        $minWidth={minWidth}
        $isOpen={isOpen}
        onClick={toggleSelect}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
      >
        <span>{value || "All"}</span>
        <SvgIcon name="icon-chevron-down" width="20" height="20" />
      </Select>

      <AnimatePresence>
        {isOpen && (
          <OptionsList
            key="options-list"
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
          >
            <Option
              key={`default${id}`}
              data-name={id}
              data-value=""
              onClick={onChange}
              onKeyDown={handleChange}
              tabIndex={0}
            >
              All
            </Option>
            {options.map((opt) => (
              <Option
                key={opt}
                data-name={id}
                data-value={opt}
                $isSelected={value === opt + ""}
                onClick={onChange}
                onKeyDown={handleChange}
                tabIndex={0}
              >
                {opt}
              </Option>
            ))}
          </OptionsList>
        )}
      </AnimatePresence>
    </DropdownWrapper>
  );
};

export default Dropdown;
