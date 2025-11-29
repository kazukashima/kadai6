// import Link from "next/link"

// export function ArticleCard({title,date,url,thumbnail}){

//   return(
//     <Link href={url}>
//     <div className="bg-white shadow-md rouded-xl p-4 hover:shadow-lg transition cursor-pointer">
//       <img src={thumbnail} alt={title} className="w-full h-40 object-cover rounded-lg mb-3"/>
//     <p className="text-lg font-semibold">{title}</p>
//     <p className="text-lg font-semibold">{date}</p>
//     <p>{url}</p>
//     <img src={thumbnail}/>
//     </div>
//     </Link>
//   )
// }

import Link from "next/link";

export function ArticleCard({ title, date, url, thumbnail }) {
  return (
    <Link href={url}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer">

        {/* サムネイル */}
        {/* 以下変更点　imgの追加 */}
        <img
          src={thumbnail || "/no-image.png"}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />

        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </Link>
  );
}
