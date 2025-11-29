"use client";

import { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard";

export default function BlogsPage() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then(res => res.json())      
      .then(data => setBlogs(data)); 
  }, []);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
        {blogs.map(blog => (
          <ArticleCard
            key={blog.id}            
            title={blog.title}
            date={blog.date}
            url={`/blogs/${blog.id}`}
            thumbnail={blog.thumbnail}
          />
        ))}
      </div>
    </main>
  );
}
