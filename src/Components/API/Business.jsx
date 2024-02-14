import React, { useEffect, useState } from 'react'
import fetchByCategory from './newsfetcher';
import Template from './Template';
import Pagination from './Pagination';



function Business() {

  const [news, setNews] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  const [newsPerPage,setNewsPerPage] = useState(5)

  useEffect(() => {
    const fetchBusinessNews = async () => {
      const News = await fetchByCategory("business");
      setNews(News)
    }
    fetchBusinessNews();
  }, [])

  

  const lastIndex = currentPage * newsPerPage;
  const firstIndex = lastIndex - newsPerPage;
  
  const curretnNews = news && news.length > 0 ? news.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage) : [];
  return (
    <>
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

export default Business