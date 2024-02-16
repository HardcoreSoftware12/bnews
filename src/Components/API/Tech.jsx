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
  let curretnNews =[];
  if(news){
    
    curretnNews = news && news.length > 0 ? news.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage) : [];
   }
  
  return ( <>
    <Template news={curretnNews}/>
    <Pagination 
     totalPosts={news ? news.length : 0}
        postPerPage={newsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
    
    />
    
    </>

  )
}

export default Tech;