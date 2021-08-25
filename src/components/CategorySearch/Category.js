/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import classes from "./Category.module.css";
const Category = (props) => {
  return (
    <div className={classes.container}>
      <Link
        to={`/search/${props.text}?searchType=category&category=${props.name}`}
      >
        <img src={props.src} className={classes.image} />
      </Link>

      <h3 className={classes.text}>{props.text}</h3>
    </div>
  );
};

export default Category;
