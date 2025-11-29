// import { NextResponse } from "next/server";

// export async function GET(){
//   const token =process.env.QIITA_TOKEN;

//   const res=await fetch(
//     "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=4",
//     {
//       headers:{
//         Authorization:`Bearer ${token}`,
//       },
//     }
//   );

//   const items =await res.json();
//   const fixedThumbnail="固定画像URL";

//   const data =items.map((items:any)=>({
//     title:items.title,
//     url:items.url,
//     date:items.created_at,
//     thumbnail: fixedThumbnail,
//   }));
//   return NextResponse.json(data);

// }

import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.QIITA_TOKEN;

  const res = await fetch(
    "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=4",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const items = await res.json();

  // --- 確実に表示されるサンプルサムネイルに変更 ---
  const sampleThumbnail =
    "https://cdn.qiita.com/assets/public/article-ogp-background-9f5428127621718a910c8b63951390ad.png";

  const data = items.map((item: any) => ({
    title: item.title,
    url: item.url,
    date: item.created_at,
    thumbnail: sampleThumbnail, // ← 全部これ
  }));

  return NextResponse.json(data);
}

// 変更点
// 実際の実在する画像に置き換えた
