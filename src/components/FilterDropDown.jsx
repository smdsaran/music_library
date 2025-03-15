import styles from "../App.module.css";
import { useState } from "react";
import selectIcon from "../assets/select_dropdown_icon.png";

const FilterDropdown = ({ onFilter }) => {
  const [open, setOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (value) => {
    setSelectedFilters((prev) => {
      const newFilters = prev.includes(value)
        ? prev.filter((f) => f !== value)
        : [...prev, value];
      onFilter(newFilters);
      return newFilters;
    });
  };

  return (
    <div className={styles.filterContainer}>
      <button className={selectedFilters?.length > 0 ? styles.filterButtonActive : styles.filterButton} onClick={() => setOpen(!open)}>
        <p>{`Type${selectedFilters?.length > 0 ? `(${selectedFilters?.length})` : ""}`}</p>
        <img src={selectIcon} alt="select_icon" width={10}/>
      </button>
      {open && (
        <div className={styles.filterDropdown}>
          {["Album", "EP", "Single"].map((type) => (
            <label key={type} className={styles.filterOption}>
              <input
                type="checkbox"
                checked={selectedFilters.includes(type)}
                onChange={() => toggleFilter(type)}
              />
              {type}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;