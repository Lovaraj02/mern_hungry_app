import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import {api} from './api'
const SliderComp = ()=>{
//     const settings = {
//     dots: true,
//     infinite: true,
//     speed: 100,
//     slidesToShow: 5,
//     slidesToScroll: 3
//   };


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, 
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};




const [slider, setSlider] = useState([]);
const sliderHandler = async ()=>{
    try {
        const result = await axios.get(`${api}/vendor/getAll`);
        setSlider(result.data)
    } catch (error) {
        console.log("error is",error)
    }
}
useEffect(()=>{
    sliderHandler()
},[])

  return(
  <>
  
    <h1>Slider component</h1>
    <div className="sliderBody">
    <Slider {...settings}>
        {
            slider.map((vendor)=>{
                return(
                    vendor.firm.map((item)=>{
                        return(
                            <div className="bg">
                              <img  src={`${api}/uploads/${item.image}`}/>
                            </div>
                        )
                    })
                )
            })
        }

    </Slider>
      </div>
  </>
  )}
export default SliderComp;