import React, { useEffect, useState } from 'react'
import fetchByCategory from './newsfetcher';

import Template from './Template';



function Tech() {

  const [news, setNews] = useState([]);

  useEffect(() => {



    const fetchBusinessNews = async () => {
      const News = await fetchByCategory("technology");
      setNews(News)
    }
    fetchBusinessNews();
  }, [])
  
  return (
    <Template news={news} />

  )
}

export default Tech;