import CollectionRow from "./CollectionRow";
import styles from "../App.module.css";

const CollectionList = ({ collections }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHead}>
          <th className={styles.tableCellName}>Collection Name</th>
          <th className={styles.tableCellHead}>Type</th>
          <th className={styles.tableCellHead}>Song Count</th>
          <th className={styles.tableCellHead}>Duration</th>
          <th className={styles.tableCellHead}>Size</th>
          <th className={styles.tableCellHead}>Released On</th>
          {/* <th className={styles.tableCell}>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {collections.map((collection) => (
          <CollectionRow key={collection.id} collection={collection} />
        ))}
      </tbody>
    </table>
  );
};

export default CollectionList;