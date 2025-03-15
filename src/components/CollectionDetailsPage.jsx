import Breadcrumb from "./BreadCrumb";
import CollectionDetails from "./CollectionInfo";
import SongTable from "./SongTable";
import styles from "../App.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CollectionDetailsPage = () => {
    const { id } = useParams();
    const [collectionData, setCollectionData] = useState({});

      const fetchData = async() => {
        try{
          const result = await fetch(`http://localhost:3001/collections/${id}`);
          const data = await result.json();
          setCollectionData(data);
        } catch(e) {
          console.log("Error-------->", e);
        }
      }
    
      useEffect(() => {
        fetchData(); 
      }, []);

  return (
    <div className={styles.detailsContainerDiv}>
      <Breadcrumb path={collectionData?.name} />
      <CollectionDetails collection={collectionData} />
      <SongTable songs={collectionData?.songs} />
    </div>
  );
};

export default CollectionDetailsPage;
