import { doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { LOAD_DATA, ADD_DATA, LOADING, FAIL_DATA } from "../constent";
import { store } from "../store";

export const loadData = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const { uid } = JSON.parse(sessionStorage.getItem("user"));

    const unsub = onSnapshot(doc(db, "bucket", uid), (doc) => {
      if (doc.data() !== undefined) {
        dispatch({
          type: LOAD_DATA,
          payload: doc.data().bucket,
        });
      } else {
        dispatch({
          type: LOAD_DATA,
          payload: [],
        });
      }
    });

    return unsub;
  } catch (error) {
    dispatch({
      type: FAIL_DATA,
      payload: error.message,
    });
  }
};

// Add Data
export const addData = (data) => async (dispatch) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { allBuckets } = store.getState();

    await setDoc(doc(db, "bucket", user.uid), {
      bucket: [data, ...allBuckets.bucket],
    });
    dispatch({
      type: ADD_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: FAIL_DATA,
      payload: error.message,
    });
  }
};

// Remove Item
export const removeItem = (id) => async () => {
  const {
    allBuckets: { bucket },
  } = store.getState();
  const filterItem = bucket.filter((item) => {
    return item.id !== id;
  });

  const { uid } = JSON.parse(sessionStorage.getItem("user"));
  const bucketRef = doc(db, "bucket", uid);

  // Set the "capital" field of the city 'DC'
  await updateDoc(bucketRef, {
    bucket: filterItem,
  });
};

// Completed Item
export const completedItem = (id) => async () => {
  const {
    allBuckets: { bucket },
  } = store.getState();

  const filterItem = bucket.filter((item) => {
    if (item.id === id) {
      item.completed = !item.completed;

      return item;
    } else {
      return item;
    }
  });
  const { uid } = JSON.parse(sessionStorage.getItem("user"));
  const bucketRef = doc(db, "bucket", uid);
  await updateDoc(bucketRef, {
    bucket: filterItem,
  });
};
