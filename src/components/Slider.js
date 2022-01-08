import { useEffect, useRef, useState } from "react";
import Classes from "./Layout.module.css";
import FOOD from "../assets/food.png";
import { useDispatch } from "react-redux";
import { addData } from "../redux/actions/firestore.action";

const Slider = () => {
  const groceryArray = [
    {
      id: 1,
      itemName: "Milk",
    },
    {
      id: 2,
      itemName: "Bread",
    },
    {
      id: 3,
      itemName: "Potatoes",
    },
    {
      id: 4,
      itemName: "Eggs",
    },
    {
      id: 5,
      itemName: "Bananas",
    },
    {
      id: 6,
      itemName: "Tomatoes",
    },
    {
      id: 7,
      itemName: "Apples",
    },
    {
      id: 8,
      itemName: "Coffee",
    },
    {
      id: 9,
      itemName: "Butter",
    },
  ];
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(200);
  const ref = useRef();
  const dispatch = useDispatch();

  // Scroll Function
  const ScrollFunction = (name) => {
    if (name === "increment") {
      setScrollValue(scrollValue + 100);
    } else if (name === "decrement") {
      setScrollValue(scrollValue - 100);
    }
  };
  useEffect(() => {
    if (scrollValue > scrollWidth) {
      setScrollValue(0);
    } else if (scrollValue < 0) {
      setScrollValue(0);
    }

    if (window.innerWidth < 900) {
      setScrollWidth(2000);
    }
    ref.current.scrollLeft = scrollValue;
  }, [scrollValue, scrollWidth]);

  const add = (data) => {
    dispatch(
      addData({
        id: Math.floor(Math.random() * 1000000),
        itemName: data,
        completed: false,
      })
    );
  };
  return (
    <>
      {scrollValue <= 0 ? (
        ""
      ) : (
        <span
          className={Classes.arrowRight}
          onClick={() => ScrollFunction("decrement")}
        >
          <i className="fa fa-angle-left"></i>
        </span>
      )}

      <div className={Classes.slider} ref={ref}>
        {groceryArray.map((value, index) => (
          <div
            key={index}
            className={Classes.SingleItem}
            onClick={() => add(value.itemName)}
          >
            <img src={FOOD} alt="" />
            <span>{value.itemName}</span>
          </div>
        ))}
      </div>
      {scrollValue >= 200 ? (
        ""
      ) : (
        <span
          className={Classes.arrowLeft}
          onClick={() => ScrollFunction("increment")}
        >
          <i className="fa fa-angle-right"></i>
        </span>
      )}
    </>
  );
};

export default Slider;
