import React from 'react'
import { useParams } from "react-router-dom";
import articles from './article-content-dummy';

import Articles from '../components/Articles';
import NotFound from './NotFound';

const Article = () => {
    const { name } = useParams();
    const article = articles.find((art) => art.name === name);
    if(!article){return (<NotFound/>)}
  return (
    <>
        <div className='flex flex-wrap mt-7'>
          <img className='rounded-xl object-cover w-full lg:h-96 sm:h-72 object-center' src={article.thumbnail} alt='article-poster'/>
        </div>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600'>{article.title}</h1>
        {article.content.map((paragraph, index)=> (<p className='mx-auto leading-relaxed text-lg mb-4' key={index} >{paragraph}</p>))}
        <div className='border-gray-200 my-10 border-y-2'>
        <h1 className='sm:text-2xl text-xl font-bold my-5 text-gray-900'>Check out other articles</h1>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={articles.filter((art) => art.name !== article.name)}/>
          </div>
        </div>
    </>
  )
}

export default Article