import Classes from "./Layout.module.css";
import BUCKET from "../assets/bucket.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadData,
  removeItem,
  completedItem,
} from "../redux/actions/firestore.action";
import { useSelector } from "react-redux";
import Loader from "react-js-loader";
const Allitems = () => {
  const dispatch = useDispatch();
  const {
    auth,
    allBuckets: { bucket, loading },
  } = useSelector((state) => state);
  useEffect(() => {
    if (auth.user) {
      dispatch(loadData());
    }
  }, [dispatch, auth.user]);
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className={Classes.allItems}>
      {loading && (
        <div style={{ paddingTop: "100px" }}>
          <Loader
            type="hourglass"
            bgColor={"#FFFFFF"}
            color={"#FFFFFF"}
            size={500}
          />
        </div>
      )}
      {bucket.length > 0 ? (
        bucket.map((value) => (
          <div
            className={`${Classes.item} ${value.completed && "completed"}`}
            key={value.id}
          >
            <img src={BUCKET} alt="" />
            <span>{value.itemName}</span>
            <div className={Classes.icon}>
              {value.completed ? (
                <i
                  className="fa fa-plus"
                  onClick={() => dispatch(completedItem(value.id))}
                ></i>
              ) : (
                <i
                  className="fa fa-check"
                  onClick={() => dispatch(completedItem(value.id))}
                ></i>
              )}

              <i
                className="fa fa-trash"
                onClick={() => deleteItem(value.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <h2>Your Bucket is Empty</h2>
      )}
    </div>
  );
};

export default Allitems;
