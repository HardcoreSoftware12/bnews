import React from 'react'

function Pagination({totalPosts,postPerPage,setCurrentPage,currentPage}) {
    let pages=[]

    for(let i=1 ; i<=Math.ceil( totalPosts/postPerPage) ; i++){
        pages.push(i);
    }

    const handlePage = (page)=>{
        setCurrentPage(page);
        window.scrollTo({top:0,behavior:'smooth'})

    }
     
   
  return (
    <div className='mx-auto pt-5 flex justify-center gap-10 w-[50%]'>
        {
            pages.map((page,i)=>{
                return <button className={`border-2 border-rose-500 p-2 hover:bg-gray-500 rounded-lg ${page === currentPage ? "bg-yellow-600" :""}`} 
                onClick={()=>handlePage(page)} 
                key={i}>
                    {page}
                </button>
            })
        }
    </div>
  )
}

export default Pagination