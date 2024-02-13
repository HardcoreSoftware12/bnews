import React, { useEffect, useState } from 'react'
import fetchByCategory from './newsfetcher';
import Template from './Template';



function Science() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchBusinessNews = async () => {
      const News = await fetchByCategory("science");
      setNews(News)
    }
    fetchBusinessNews();
  }, [])
  return (
    <Template news={news}/>

  )
}

export default Science