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
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600'>{article.title}</h1>
        {article.content.map((paragraph, index)=> (<p className='mx-auto leading-relaxed text-base mb-4' key={index} >{paragraph}</p>))}
        <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>Check out other articles</h1>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={articles.filter((art) => art.name !== article.name)}/>
        </div>
    </>
  )
}

export default Article