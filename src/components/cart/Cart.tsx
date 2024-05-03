import "./Cart.scss";
import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
import { decreaseCount } from "../featuredProduct/productSlice";
import { increaseCount } from "../featuredProduct/productSlice";
import { deleteProduct } from "../featuredProduct/productSlice";

const Cart = () => {

  const products = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch()

  return (
    <div className="cart">
      <div className="products_container">
        {products.length > 0
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <div className="img">
                  <img src={product.img} alt="" />
                </div>
                <div className="product_control">
                  <div className="produc_info">
                    <h3> {product.title} </h3>
                    <p> Price: {product.price.toFixed(2)}$ </p>
                  </div>
                  <div className="btns">
                    <p>
                      Count: <span onClick={() => dispatch(decreaseCount(product.id))} > - </span> <span> {product.count} </span>
                      <span onClick={() => dispatch(increaseCount(product.id))} > + </span>
                    </p>
                  </div>
                  <div className="sub_total"> SubTotal:  {(product.count * product.price).toFixed(2)} $ </div>
                  <div className="btn_delete" onClick={() => dispatch(deleteProduct(product.id))}> Delete </div>
                </div>
              </div>
            ))
          : ( <div className="null"> There is no products in cart </div> )}
      </div>
    </div>
  );
};

export default Cart;
