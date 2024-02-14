import React, { useEffect, useState } from 'react'
import fetchByCategory from './newsfetcher';

import Template from './Template';

import Pagination from './Pagination';



function Tech() {

  const [news, setNews] = useState([]);
  
  const [currentPage,setCurrentPage] = useState(1)
  const [newsPerPage,setNewsPerPage] = useState(5)

  useEffect(() => {



    const fetchBusinessNews = async () => {
      const News = await fetchByCategory("technology");
      setNews(News)
    }
    fetchBusinessNews();
  }, [])

  
  const lastIndex = currentPage * newsPerPage;
  const firstIndex = lastIndex - newsPerPage;
  const curretnNews = news.slice(firstIndex,lastIndex);
  
  return ( <>
    <Template news={curretnNews}/>
    <Pagination 
        totalPosts={news.length}
        postPerPage={newsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
    
    />
    
    </>

  )
}

export default Tech;