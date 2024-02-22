import React from 'react'
import { useParams } from "react-router-dom";
import articles from './article-content-dummy';

const Article = () => {
    const { name } = useParams();
    const article = articles.find((art) => art.name === name);
    if(!article){return (<h1 className='sm:text-4xl text-2xl font-bold my-6 text-red-600'>Article does not exist!</h1>)}
  return (
    <div className='mb-20'>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600'>{article.title}</h1>
        {article.content.map((paragraph, index)=> (<p className='mx-auto leading-relaxed text-base mb-4' key={index} >{paragraph}</p>))}
    </div>
  )
}

export default Article