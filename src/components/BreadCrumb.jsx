import styles from "../App.module.css";
import arrowIcon from "../assets/arrow_mark.png";

const Breadcrumb = ({ path }) => {
  return (
  <div className={styles.breadcrumb}>
    <div>
        <p style={{color: '#677A90'}}>Overview</p>
        <img src={arrowIcon} alt="arrow_icon" width={7}/>
        <p>{path}</p>
    </div>
    
  </div>
  )
};

export default Breadcrumb;
