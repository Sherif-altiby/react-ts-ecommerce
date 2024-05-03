import { Link } from "react-router-dom";
import "./Categories.scss";
import { useState } from "react";

const menuData = [
  {
    name: "Fresh Meat",
    id: 1,
  },
  {
    name: "Vegetables",
    id: 2,
  },
  {
    name: "Fruit & Nut Gifts",
    id: 3,
  },
  {
    name: "Fresh Berries",
    id: 4,
  },
  {
    name: "Ocean Foods",
    id: 5,
  },
  {
    name: "Butter & Eggs",
    id: 6,
  },
  {
    name: "Fastfood",
    id: 7,
  },
  {
    name: "Fresh Onion",
    id: 8,
  },
  {
    name: "Papayaya & Crisps",
    id: 9,
  },
  {
    name: "Oatmeal",
    id: 10,
  },
  {
    name: "Fresh Bananas",
    id: 11,
  },
];

const Categories = () => {
  
    const [hideMenu, setHideMenue] = useState<boolean>(false)

  return (
    <div className="categories">
      <div className="menu">
        <div className="head" onClick={() => setHideMenue(!hideMenu)} >
          <div className="icon">
            <i className="fa-solid fa-bars"></i>
          </div>
          <h2> All departments </h2>
          <div className="icon">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <ul className= {hideMenu ? "hide" : ""} >
          {menuData.map((item) => (
            <Link to="/" key={item.id}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="panner">
        <div className="saerch">
          <div className="btn">
            <h2>All Categories</h2>
            <div className="icon">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className="input"> <input type="text" placeholder="What do you need" /> </div>
          <div className="btn_search"> <h2> Search </h2> </div>
        </div>
        <div className="panner_item">
            <h3> FRUIT FRESH </h3>
            <h1> Vegetable <br /> 100% Organic </h1>
            <p>Free Pickup and Delivery Available</p>
            <div className="btn"> SHOP NOW </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
