
// "use client";

// import { useEffect, useState } from "react";
// import { ArticleCard } from "./components/ArticleCard";
// import Link from "next/link";

// export default function Home() {
//   const [articles, setArticles] = useState([]);
//   const [blogs, setBlogs] = useState([]);

//   // Qiita 記事取得
//   useEffect(() => {
//     fetch("/api/qiita")
//       .then((res) => res.json())
//       .then((data) => setArticles(data));
//   }, []);

//   // MicroCMS ブログ取得
//   useEffect(() => {
//     fetch("/api/blogs")
//       .then((res) => res.json())
//       .then((data) => setBlogs(data));
//   }, []);

//   return (
//     <main className="p-6 space-y-12">

//       {/* ---------------------------------------------------- */}
//       {/*  Qiita 個人記事セクション */}
//       {/* ---------------------------------------------------- */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">個人記事（Qiita）</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {articles.map((item) => (
//             <ArticleCard
//               key={item.url}
//               title={item.title}
//               date={item.date}
//               url={item.url}
//               thumbnail={item.thumbnail}
//             />
//           ))}
//         </div>

//         <div className="mt-4">
//           <Link href="/qiita">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               もっと見る
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* ---------------------------------------------------- */}
//       {/*  MicroCMS ブログセクション */}
//       {/* ---------------------------------------------------- */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">ブログ記事（MicroCMS）</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {blogs.map((blog) => (
//             <ArticleCard
//               key={blog.id}
//               title={blog.title}
//               date={blog.date}
//               url={blog.url}
//               thumbnail={blog.thumbnail}
//             />
//           ))}
//         </div>

//         <div className="mt-4">
//           <Link href="/blogs">
//             <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//               もっと見る
//             </button>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client"

import { useEffect } from "react"
import { useState } from "react";
import { ArticleCard } from "./components/ArticleCard";
import Link from "next/link";
export default function Home(){
  const [articles, setArticles]=useState([]);
  const [blogs, setBlogs]=useState([]);

useEffect(()=>{
fetch("/api/qiita")
.then((res)=>res.json())
.then((data)=>setArticles(data));
},[])

useEffect(()=>{
  fetch("/api/blogs")
  .then((res)=>res.json())
  .then((data)=>setBlogs(data));
},[])
  return(


    

    // <pre>{JSON.stringify(articles, null, 2)}</pre>
    <>
    <header className="bg-gray-600 text-white py-20">
    <h1 className="text-4xl font-bold">my tech blog</h1>
    </header>
    <main className="p-6 space-y-12">

    <div className="flex justify-end">
    <button>
        <Link href="/qiita" className="btn button-primary">もっと見るボタン</Link>
        </button>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
      {articles.map((item)=>(<ArticleCard 
      key={item.url} 
      title={item.title}
      date={item.date}
      url={item.url}
      thumbnail={item.thumbnail}
      />))}
      
      </div>

        



        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
          {blogs.map(blog=>(
            <ArticleCard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            url={blog.url}
            thumbnail={blog.thumbnail}/>
          ))}
        </div>
          <button>
            <Link href="/blogs" className="btn btn-primary">もっと見るボタン</Link>
          </button>




    </main>


</>      
  )




}

// UIのみ変更、ここはクライアント側、homeページ