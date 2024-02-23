import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({articles}) => {
  return (
    <>
        {articles.map((article, index)=>{
              return (<div className='p-4 md:w-1/2'>
                <div className='border-2 h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <Link to={`/article/${article.name}`}>
                  <img src={`${article.thumbnail}`} className='lg:h-48 md:h-36 w-full object-cover object-center' alt='Blog thumbnail'/>
                  </Link>
                  <div className='p-6'>
                    <Link to={`/article/${article.name}`} key={index}>
                      <h3 className='overflow-hidden text-lg font-medium text-gray-900 mb-3'>{article.title}</h3>
                    </Link>
                    <p className='leading-relaxed mb-3'>
                      {article.content[0].substring(0,110) + '...'}
                    </p>
                    <div className='flex items-center flex-wrap'>
                      <Link className='text-indigo-200 bg-slate-800 p-2 rounded-lg inline-flex items-center md:mb-2 lg:mb-0' to={`/article/${article.name}`}>Continue Reading</Link>

                    </div>
                  </div>
                </div>
              </div> )
            })}
    </>
  )
}

export default Articles