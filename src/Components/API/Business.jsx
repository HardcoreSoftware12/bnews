import React, { useEffect, useState } from 'react'
import fetchByCategory from './newsfetcher';
import Template from './Template';



function Business() {

  const [news, setNews] = useState([]);

  useEffect(() => {



    const fetchBusinessNews = async () => {



      const News = await fetchByCategory("business");
      console.log(News);
      setNews(News)


    }
    fetchBusinessNews();
  }, [])
  return (

    <Template news={news}/>




  )
}

export default Business