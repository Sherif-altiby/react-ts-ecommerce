import './FeaturedProduct.scss'
import f1 from "../../assets/feature-1.jpg"
import f2 from "../../assets/feature-2.jpg"
import f3 from "../../assets/feature-3.jpg"
import f4 from "../../assets/feature-4.jpg"
import f5 from "../../assets/feature-5.jpg"
import f6 from "../../assets/feature-6.jpg"
import f7 from "../../assets/feature-7.jpg"
import f8 from "../../assets/feature-8.jpg"
import { useState } from 'react'
import b1 from "../../assets/banner-1.jpg"
import b2 from "../../assets/banner-2.jpg"

import { useAppDispatch } from '../hooks'
import { addToCart } from './productSlice'

type Uldata = string[]
type AllProducts =  {id: number, img: string, title: string, category: string, price: number}[]


const ulData: Uldata = ["All", "Orange", "Fresh Meat", "Vegetables", "Fast Food"]

const allProducts: AllProducts = [
    {
        id: 1, 
        img: f1,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
    {
        id: 2, 
        img: f2,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
    {
        id: 3, 
        img: f3,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
    {
        id: 4, 
        img: f4,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
    {
        id: 5, 
        img: f5,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
    {
        id: 6, 
        img: f6,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
    {
        id: 7, 
        img: f7,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
    {
        id: 8, 
        img: f8,
        title: "Crab Pool Security",
        category: "",
        price: 30.00
    },
]


const FeaturedProduct: React.FC = () => {
  
    const [activeClass, setActiveClass] = useState<string>("")

    const dispatch = useAppDispatch()

    const handleActiveClass = (item: string): void => {
           setActiveClass(item)
    } 

  return (
    <div className='featured_product' >
         <div className="title">
            <h1> Featured Product </h1>
         </div>
         <ul>
            {
                ulData.map((item) => (
                    <li 
                        key={item}
                        className= {activeClass === item ? "active" : ""}
                        onClick={()=> handleActiveClass(item)}
                        > 
                    {item} 
                    </li>
                ))
            }
         </ul>
         <div className="products_container">
             {
                allProducts.map((item) => (
                    <div className="product" key= {item.id} >
                        <div className="img">
                             <img src={item.img} alt="" />
                             <div className="icons">
                                <div className="icon"> <i className="fa-solid fa-heart"></i> </div>
                                <div className="icon" onClick={() => dispatch(addToCart(item))} > <i className="fa-solid fa-cart-shopping"></i> </div>
                             </div>
                         </div>
                         <p> {item.title} </p>
                         <h3> ${(item.price).toFixed(2)} </h3>
                    </div>
                ))
             }
         </div>
         <div className="banner">
            <div className="img"><img src={b1} alt="" /></div>
            <div className="img"><img src={b2} alt="" /></div>
         </div>
    </div>
  )
}

export default FeaturedProduct