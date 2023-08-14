import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../componets/List/List';
import useFetch from '../../hooks/useFetch';
import "./Products.scss"
const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("desc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2> Food Categories</h2>
          {

            data?.map((item) => (
              <div className="inpuItem">
                <input type="checkbox" id={item.id} value={item.id} />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))
          }
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">

          <div className="inputItem">
            <input type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")} />
            <label htmlFor='asc'> Price(Lowest first)</label>
          </div>

          <div className="inputItem">
            <input type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")} />
            <label htmlFor='desc'> Price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="" alt="" className="catImg" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>

  )
}

export default Products