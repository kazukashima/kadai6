import { NextResponse } from "next/server";

export async function GET() {
  const SERVICE_DOMAIN = process.env.SERVICE_DOMAIN;
  const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;

  const response = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/blogs`,
    {
      headers: {
        "X-MICROCMS-API-KEY": MICROCMS_API_KEY!,
      },
    }
  );

  const items = await response.json();

  const blogs = items.contents.map((item: any) => ({
    id: item.id,
    title: item.title,
    thumbnail: item.thumbnail?.url || "",
    date: item.publishedAt,
    url: `/blogs/${item.id}`
  }));

  return NextResponse.json(blogs);
}




// import { NextResponse } from "next/server";

// export async function GET() {
//   const SERVICE_DOMAIN = process.env.SERVICE_DOMAIN;
//   const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;

//   const res = await fetch(
//     `https://${SERVICE_DOMAIN}.microcms.io/api/v1/blogs`
//     ,{
//       headers: {
//         "X-MICROCMS-API-KEY": MICROCMS_API_KEY!,
//       },
//     }
//   );

//   const json = await res.json();

//   const data = json.contents.map((item: any) => ({
//     id: item.id,
//     title: item.title,
//     date: item.publishedAt,
//     url: `/blogs/${item.id}`,
//     thumbnail: item.eyecatch ? item.eyecatch.url : "/no-image.png", // ←★ 重要！
//   }));

//   return NextResponse.json(data);
// }
