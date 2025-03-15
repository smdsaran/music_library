import { formatTime, bytesToMB, formatReleaseDate } from "../helperUtils";
import styles from "../App.module.css";

const CollectionInfo = ({ collection }) => {
  return (
    <div className={styles.detailsContainer}>
        <div className={styles.titleDiv}>
            <h2 className={styles.collectionTitle}>{collection.name}</h2>
        </div>
      
      <div className={styles.detailsGrid}>
        <div className={styles.detailsRow}>
            <p style={{ fontWeight: 600}}>Artist</p>
            <p style={{ fontWeight: 600}}>Type</p>
            <p style={{ fontWeight: 600}}>Song Count</p>
            <p style={{ fontWeight: 600}}>Total Size</p>
            <p style={{ fontWeight: 600}}>Total Duration</p>
            <p style={{ fontWeight: 600}}>Released On</p>
        </div>
        <div className={styles.detailsRow}>
            <p>{collection.artist}</p>
            <p>{collection.type}</p>
            <p>{collection.artist}</p>
            <p>{bytesToMB(collection.sizeInBytes)}</p>
            <p>{formatTime(collection.durationInSeconds)}</p>
            <p>{formatReleaseDate(collection.releasedOn)}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
