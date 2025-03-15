import styles from "../App.module.css";
import searchIcon from "../assets/search_icon.png";

const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className={styles.button}>
        <img src={searchIcon} alt="search_icon" width={14}/>
      </button>
    </div>
  );
};

export default SearchBar;