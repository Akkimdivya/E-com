import React, { useState, useEffect } from "react";
import Cards from "../card"
import Loader from "../Loader"; // Import the Loader component
import "./index.css";

const CardContainer = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [page, setPage] = useState(1); // State to manage pagination

  const url = 'https://api.furrl.in/api/v2/listing/getListingProducts';

  const getData = async (pageNumber) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ "input": { "page": pageNumber, "pageSize": 100, "filters": [], "id": "#HomeHunts", "entity": "vibe" } })
    }
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      const newData = data.data.getListingProducts.products;
      setInfo(prevData => [...prevData, ...newData]);
      setLoading(false);
    }
  }

  // Function to handle intersection observer
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1); // Increment page number
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 1,
    });

    if (info.length > 0) {
      observer.observe(document.getElementById("infinite-scroll-trigger"));
    }

    return () => observer.disconnect();
  }, [info]);

  useEffect(() => {
    setLoading(true);
    getData(page);
  }, [page]);

  return (
    <div className=''>
      <Cards data={info} />
      {loading && <Loader />}
      <div id="infinite-scroll-trigger"></div>
    </div>
  );
}

export default CardContainer;
