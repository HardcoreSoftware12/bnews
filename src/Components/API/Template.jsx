import React from 'react'

function Template({news}) {
  return (
    <>

    {

      news.map((news, i) => (
        <div key={i}>
          <div className='mt-5 mb-7 p-1 grid gap-5 grid-rows-1 md:grid-cols-5 lg:grid-cols-4 mx-auto w-[90%]'>
            <div className='md:col-span-3  mt-7 lg:col-span-2  '>
              <img src={news.urlToImage} alt="no-image" className='text-2xl' />

            </div>

            <div className='md:col-span-2 leading-5 border lg:my-auto leading-10  '>
              <div className='mt-5 '>
                <a href={news.url}
                >
                  <h1 className='text-2xl font-bold lg:text-3xl'>
                    {news.title}
                  </h1>
                </a>

                <p className='font-semibold mt-3 lg:text-2xl '>
                  {news.description}
                </p>
              </div>

              <div className='flex justify-between mt-5 p-2 font-extrabold'>
                <p>Author - {news.author}</p>
                <p>[Source - {news.source.name}]</p>
              </div>

              <p className='font-semibold mt-3 p-2'> Published At &nbsp;:&nbsp; {news.publishedAt.slice(0, 9)}</p>

            </div>



          </div>

          <hr className='h-1 bg-black w-[90%] mx-auto' />
        </div>
      ))
    }

  </>
  )
}

export default Template