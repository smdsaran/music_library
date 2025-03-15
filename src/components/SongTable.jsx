import styles from "../App.module.css";
import { formatTime, bytesToMB } from "../helperUtils";

const SongTable = ({ songs }) => {
  return (
    <div className={styles.mainContainer}>
        <table className={styles.table}>
        <thead>
            <tr className={styles.tableHead}>
                <th className={styles.tableCellHeadSongs}>Song</th>
                <th className={styles.tableCellHeadSongs}>Performers</th>
                <th className={styles.tableCellHeadSongs}>Duration</th>
                <th className={styles.tableCellHeadSongs}>Size</th>
            </tr>
        </thead>
        <tbody>
            {songs?.map((song, index) => (
            <tr key={index} className={styles.tableRow}>
                <td className={styles.tableCell}>{song.title}</td>
                <td className={styles.tableCell}>{song.performers?.join(", ")}</td>
                <td className={styles.tableCell}>{formatTime(song.durationInSeconds)}</td>
                <td className={styles.tableCell}>{bytesToMB(song.sizeInBytes)}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default SongTable;
