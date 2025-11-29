"use client"

import { useEffect, useState } from "react"
import { ArticleCard } from "../components/ArticleCard"

export default function BlogList(){
const [articles,setArticles]=useState([])

useEffect(()=>{
  fetch("/api/qiita")
  .then((res)=>res.json())
  .then((data)=>setArticles(data))
},[])

return(
  <main>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
      {articles.map((item)=>(
        <ArticleCard 
        key={item.url}
        title={item.title}
        date={item.date}
        url={item.url}
        thumbnail={item.thumbnail}/>
      ))}
    </div>
  </main>

)



}