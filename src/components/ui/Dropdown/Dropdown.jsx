import { useEffect, useRef, useState } from "react";
import { DropdownWrapper, Label, Option, OptionsList, Select } from "./Dropdown.styled";
import { dropdownVariants, opacityVariants } from "../../../styles/animations";
import SvgIcon from "../SvgIcon";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const Dropdown = ({ id, label, value, options, minWidth, disabled, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const dropdownRef = useRef(null);

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
    <DropdownWrapper ref={dropdownRef} variants={opacityVariants}>
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

      {dropdownRef.current &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <OptionsList
                key="options-list"
                variants={dropdownVariants}
                initial="closed"
                animate="open"
                exit="closed"
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
          </AnimatePresence>,
          dropdownRef.current
        )}
    </DropdownWrapper>
  );
};

export default Dropdown;
