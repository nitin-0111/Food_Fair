import React,{useState} from 'react'
import "./Slider.scss"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0);
    const data=[
        "./img/slider/2.jpg",
        "./img/slider/3.jpg",
        "./img/slider/1.jpg",
    ];
const preSlide=()=>{
    setCurrentSlide((prev)=>(prev-1)%3);
};
const nextSlide=()=>{ setCurrentSlide((prev)=>(prev+1)%3);
}
  return (
  <div className="slider">
    <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        <img src={data[0]} alt="home Img"/>
        <img src={data[1]} alt="home Img"/>
        <img src={data[2]} alt="home Img"/>
    </div>
    <div className="icons">
        <div className="icon" onClick={preSlide}>
            <KeyboardDoubleArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
            <KeyboardDoubleArrowRightIcon/>
        </div>
    </div>
  </div>
  )
}
