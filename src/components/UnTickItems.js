
import Classes from "./Layout.module.css";
import { useDispatch } from "react-redux";
import { removeItem, completedItem } from "../redux/actions/firestore.action";
const UnTickItems = ({ value }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div
      className={Classes.item}
      
    >
      <img src={value.itemImage} alt="" />
      <span>{value.itemName}</span>
      <div className={Classes.icon}>
        <i
          className="fa fa-check"
          onClick={() => dispatch(completedItem(value.id))}
        ></i>

        <i className="fa fa-trash" onClick={() => deleteItem(value.id)}></i>
      </div>
    </div>
  );
};

export default UnTickItems;
