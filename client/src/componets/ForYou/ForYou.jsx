import React from 'react'
import Card from '../Card/Card'
import './ForYou.scss'
import useFetch from "../../hooks/useFetch";


const ForYou = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  
 console.log(data);
  return (
    <div className="forYou">
      <div className="top">
        <h1> {type} </h1>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}

      </div>

    </div>
  )
}

export default ForYou