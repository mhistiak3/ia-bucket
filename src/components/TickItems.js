
import Classes from "./Layout.module.css";
import { useDispatch } from "react-redux";
import { removeItem, completedItem } from "../redux/actions/firestore.action";
const TickItems = ({ value }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className={`${Classes.item} completed`}>
      <img src={value.itemImage} alt="" />
      <span>{value.itemName}</span>
      <div className={Classes.icon}>
        <i
          className="fa fa-plus"
          onClick={() => dispatch(completedItem(value.id))}
        ></i>

        <i className="fa fa-trash" onClick={() => deleteItem(value.id)}></i>
      </div>
    </div>
  );
};

export default TickItems;
