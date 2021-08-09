/* eslint-disable jsx-a11y/alt-text */
import classes from "./Category.module.css";
const Category = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.src} className={classes.image} />
      <h3 className={classes.text}>{props.text}</h3>
    </div>
  );
};

export default Category;
