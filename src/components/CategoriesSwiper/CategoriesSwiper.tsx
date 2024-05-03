import "./CategoriesSwiper.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import  'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay"

 
import cat_1 from "../../assets/cat-1.jpg"
import cat_2 from "../../assets/cat-2.jpg"
import cat_3 from "../../assets/cat-3.jpg"
import cat_4 from "../../assets/cat-4.jpg"
import cat_5 from "../../assets/cat-5.jpg"

import { Link } from 'react-router-dom';

import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect, useState } from "react";


const arrData = [
    {
        id: 1,
        name: "FRESH FRUIT",
        to: "fresh-fruit",
        img: cat_1
    },
    {
        id: 2,
        name: "DRIED FRUIT",
        to: "dried-fruit",
        img: cat_2
    },
    {
        id: 3,
        name: "VEGETABLES",
        to: "vegetables",
        img: cat_3
    },
    {
        id: 4,
        name: "DRINK FRUITS",
        to: "drink-fruits",
        img: cat_4
    },
    {
        id: 5,
        name: "DRINK FRUITS",
        to: "drink-fruits",
        img: cat_5
    },
]

const CategoriesSwiper = () => {
   
    const [sliderView, setSliderView] = useState<number>(4)

    useEffect(()=> {
        const handleResize = () => {
            if(window.innerWidth <= 992 && window.innerWidth > 769){
                setSliderView(3)
            } else if(window.innerWidth <= 768 && window.innerWidth > 501){
                setSliderView(2)
            } else if (window.innerWidth < 500 ){
                setSliderView(1)
            }
        }

        window.addEventListener("resize", handleResize);

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

  return (
    <div className='container_swiper' >
         <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={sliderView}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
           >
           
           {
            arrData.map((item) => (
                <SwiperSlide key={item.id} >
                      <Link to = {item.to} className="slider_link" >
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <p> {item.name} </p>
                      </Link>
                </SwiperSlide>
            ))
           }

         </Swiper>
    </div>
  )
}

export default CategoriesSwiper