import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Sliderpage = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

    let slides=[
        {
            img:"/chair1.png"
        },
        {
            img:"/chair2.png"
        },
        {
            img:"/chair3.png"
        },
        {
            img:"/chair1.png"
        },
        {
            img:"/chair5.png"
        }
        
      
    ]
  return (
    <div>
            <div className="wrapper">
                <div className='card-item'>
                    
                    <div className='images'>
                        <Slider {...settings}>
                        {
                            slides.map((item)=>(
                                <img src={item.img} alt="no img"/>

                            ))
                        }
                        </Slider>
                    </div>
                    
                </div>
            </div>
    
    
    </div>
  )
}
