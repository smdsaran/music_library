import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropDown";
import CollectionList from "./CollectionList";
import styles from "../App.module.css";

const CollectionOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [collections, setCollections] = useState([]);
  const [collectionsToShow, setCollectionsToShow] = useState([]);



  const fetchData = async() => {
    try{
      const result = await fetch('http://localhost:3001/collections');
      const data = await result.json();
      setCollections(data);
    } catch(e) {
      console.log("Error-------->", e);
    }
  }

  useEffect(() => {
    fetchData(); 
  }, []);

console.log("-----------Filter-------------", filterType);

  useEffect(() => {
    if(filterType?.length > 0) {
      const filteredCollections = collections.filter(
        (collection) =>
          // collection.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          filterType?.includes(collection?.type)
      );

      setCollectionsToShow(filteredCollections);
    } 
    
    else if(searchTerm?.length > 0) {
      const searchedCollections = collections.filter(
        (collection) =>
          collection.name.toLowerCase().includes(searchTerm.toLowerCase())
          // collection.type === filterType
      );

      setCollectionsToShow(searchedCollections);
    } else {
        setCollectionsToShow(collections);
    }

  }, [filterType, searchTerm]);

  

  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
          <h1 className={styles.title}>Overview</h1>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.searchFilterContainer}>
          <SearchBar onSearch={setSearchTerm} />
          <FilterDropdown onFilter={setFilterType} />
        </div>
        <CollectionList collections={collectionsToShow?.length > 0 ? collectionsToShow : collections} />
      </div>
      
      
    </div>
  );

};

export default CollectionOverview;