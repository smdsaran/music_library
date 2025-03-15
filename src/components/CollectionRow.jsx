import styles from "../App.module.css";
import viewIcon from "../assets/View.png";
import { useNavigate } from "react-router-dom";
import { formatTime, bytesToMB, formatReleaseDate } from "../helperUtils";

const CollectionRow = ({ collection }) => {
  const navigate = useNavigate(); 

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate(`/collection/${collection.id}`); // Navigate to a specific page
  };

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>
        <p className={styles.collectionName}>{collection.name}</p>
        <p className={styles.artist}>{collection.artist}</p>
      </td>
      <td className={styles.tableCell}>{collection.type}</td>
      <td className={styles.tableCell}>{collection.songCount}</td>
      <td className={styles.tableCell}>{formatTime(collection.durationInSeconds)}</td>
      <td className={styles.tableCell}>{bytesToMB(collection.sizeInBytes)}</td>
      <td className={styles.tableCell}>{formatReleaseDate(collection.releasedOn)}</td>
      <td className={styles.tableCell}>
        <div className={styles.tableCellView} onClick={handleNavigation}>
          <img src={viewIcon} alt="view_icon" width={24}/>
          <a href="" className={styles.viewDetails}>View Details</a>
        </div>
        
      </td>
    </tr>
  );
};

export default CollectionRow;