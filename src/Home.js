import { useState } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum - huipsum...', author: 'mario', id: 1},
    {title: 'Welcome party!', body: 'lorem ipsum - huipsum...', author: 'yoshi', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsum - huipsum...', author: 'mario', id: 3},
  ]);

  return (
    <div className="home">
      <BlogList blogs = {blogs} title="All blogs!"/>
      <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario' )} title="Marios blogs!"/>
    </div>
  );
}
