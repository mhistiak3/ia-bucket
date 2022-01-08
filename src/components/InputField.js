import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/actions/firestore.action";
import Classes from "./Layout.module.css";
const InputField = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleValue = () => {
    if (value === "") {
      return;
    } else {
      const data = {
        id: Math.floor(Math.random() * 1000000),
        itemName: value,
        completed: false,
      };
      dispatch(addData(data));
    }
    setValue("");
  };
  return (
    <div className={Classes.inputField}>
      <input
        type="text"
        placeholder="Add item"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <span onClick={() => handleValue()}>+</span>
    </div>
  );
};

export default InputField;
