import React, { useEffect, useState } from 'react'
import fetchByCategory from './newsfetcher';

function Business() {
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const fetchBusinessNews = ()=>{
      fetchByCategory("business");
      

    }
    fetchBusinessNews();
  })
  return (
    <div>redux</div>
  )
}

export default Business