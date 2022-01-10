import { useEffect, useRef, useState } from "react";
import Classes from "./Layout.module.css";

import { useDispatch } from "react-redux";
import { addData } from "../redux/actions/firestore.action";
import { useSelector } from "react-redux";

const Slider = () => {
  const groceryArray = [
    {
      id: 1,
      itemName: "Milk",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/milk.webp",
    },
    {
      id: 2,
      itemName: "Bread",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/bread.webp",
    },
    {
      id: 3,
      itemName: "Potatoes",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/potatos.webp",
    },
    {
      id: 4,
      itemName: "Eggs",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/eggs.webp",
    },
    {
      id: 5,
      itemName: "Bananas",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/bananas.webp",
    },
    {
      id: 6,
      itemName: "Tomatoes",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/tomatos.webp",
    },
    {
      id: 7,
      itemName: "Apples",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/apple.webp",
    },
    {
      id: 8,
      itemName: "Coffee",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/coffe.webp",
    },
    {
      id: 9,
      itemName: "Chips",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/chips.webp",
    },
    {
      id: 10,
      itemName: "Carrots",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/gajor.webp",
    },
    {
      id: 11,
      itemName: "Toilet Paper",
      itemImage:
        "https://site.ia-coder.com/wp-content/uploads/2022/01/toiletpapper.webp",
    },
  ];
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(500);
  const ref = useRef();
  const dispatch = useDispatch();
  const { bucket } = useSelector((state) => state.allBuckets);

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
    const obj = {
      id: Math.floor(Math.random() * 1000000),
      itemName: data.itemName,
      itemImage: data.itemImage,
      completed: false,
    };
    if (bucket.filter((e) => e.itemName === data.itemName).length > 0) {
      return;
    } else {
      dispatch(addData(obj));
    }
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
            onClick={() => add(value)}
          >
            <img src={value.itemImage} alt="" />
            <span>{value.itemName}</span>
          </div>
        ))}
      </div>
      {scrollValue >= scrollWidth ? (
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
