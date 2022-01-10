import Classes from "./Layout.module.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../redux/actions/firestore.action";
import { useSelector } from "react-redux";
import Loader from "react-js-loader";
import UnTickItems from "./UnTickItems";
import TickItems from "./TickItems";
const Allitems = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const {
    auth,
    allBuckets: { bucket, loading },
  } = useSelector((state) => state);
  useEffect(() => {
    if (auth.user) {
      dispatch(loadData());
    }
  }, [dispatch, auth.user]);

  const filterUntickItems = bucket.filter((item) => {
    return item.completed === false;
  });
  const filterTickItems = bucket.filter((item) => {
    return item.completed === true;
  });
  return (
    <div className={Classes.allItems}>
      {loading ? (
        <div style={{ padding: "50px" }}>
          <Loader
            type="hourglass"
            bgColor={"#FFFFFF"}
            color={"#FFFFFF"}
            size={100}
          />
        </div>
      ) : bucket.length > 0 ? (
        filterUntickItems &&
        filterUntickItems.map((value) => (
          <UnTickItems value={value} key={value.id} />
        ))
      ) : (
        <h2>Your Bucket is Empty</h2>
      )}

      <hr />
      {filterTickItems.length >0 ? <h3>
        Tick Items
        {toggle ? (
          <i className="fa fa-angle-up" onClick={() => setToggle(false)}></i>
        ) : (
          <i className="fa fa-angle-down" onClick={() => setToggle(true)}></i>
        )}
      </h3>:''}
     

      {toggle &&
        filterTickItems.map((value) => (
          <TickItems value={value} key={value.id} />
        ))}
    </div>
  );
};

export default Allitems;
