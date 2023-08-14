import React from 'react'
import Categories from '../../componets/Categories/Categories';
import ForYou from '../../componets/ForYou/ForYou';
import { Slider } from '../../componets/Slider/Slider';
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
        <Slider/>
        <ForYou type={"For_You"} />
        <Categories/>
        <ForYou type={"Trending"} />
    </div>
  )
}

export default Home