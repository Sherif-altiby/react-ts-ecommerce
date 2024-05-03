import { Link } from "react-router-dom";
import "./shop.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { products, departments, productsData } from "./ShopData";

import { useAppDispatch } from "../../components/hooks";
import { addToCart } from "../../components/featuredProduct/productSlice";
import { useEffect, useState } from "react";
import PriceController from "../../components/priceController/PriceController";

const Shop = () => {
  const dispatch = useAppDispatch();

  const [sliderView, setSliderView] = useState<number>(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992 && window.innerWidth > 769) {
        setSliderView(2);
      } else if (window.innerWidth <= 768) {
        setSliderView(1);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="shop">
      <div className="banner">
        <div className="text">
          <h1> Organi Shop </h1>
          <p>
            <Link to="/"> Home </Link> - Shop
          </p>
        </div>
      </div>

      <section>
        <div className="list">
          <h2> Department </h2>
          <ul>
            {departments.map((item) => (
              <li key={item}> {item} </li>
            ))}
          </ul>
        </div>
        <div className="sale_off">
          <h1> Sale Off </h1>
          <div className="swiper_continer">
            <Swiper spaceBetween={30} slidesPerView={sliderView}>
              {products.map((product) => (
                <SwiperSlide>
                  <div className="product">
                    <div className="img">
                      <div className="discount"> -20% </div>
                      <img src={product.img} alt="" />
                      <div className="icons">
                        <div className="icon">
                          <i className="fa-solid fa-heart"></i>
                        </div>
                        <div
                          className="icon"
                          onClick={() => dispatch(addToCart(product))}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <h2> {product.category} </h2>
                      <h3> {product.title} </h3>
                      <div className="price">
                        <h2> ${product.price.toFixed(2)} </h2>
                        <p> ${product.oldPrice?.toFixed(2)} </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <div className="controller">
        <PriceController />
        <div className="colors_container">
          <h2> Colors </h2>
          <div className="colors">
            <ul>
              <li>
                <div className="circle white"></div>
                <div className="text"> White </div>
              </li>
              <li>
                <div className="circle red"></div>
                <div className="text"> Red </div>
              </li>
              <li>
                <div className="circle blue"></div>
                <div className="text"> Blue </div>
              </li>
              <li>
                <div className="circle gray"></div>
                <div className="text"> Gray </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="circle black"></div>
                <div className="text"> Black </div>
              </li>
              <li>
                <div className="circle green"></div>
                <div className="text"> Green </div>
              </li>
              <li>
                <div className="circle orange"></div>
                <div className="text"> Orange </div>
              </li>
              <li>
                <div className="circle yellow"></div>
                <div className="text"> Yellow </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="products_container">
        {productsData.map((item) => (
          <div className="product" key={item.id}>
            <div className="img">
              <img src={item.img} alt="" />
              <div className="icons">
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className="icon" onClick={() => dispatch(addToCart(item))}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
            <p> {item.title} </p>
            <h3> ${item.price.toFixed(2)} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
