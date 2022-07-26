export const BlogList = (props) => {
    const blogs = props.blogs;

    console.log(props, blogs);

  return (
    <div className="blog-list">
        {blogs.map((blog) => (
            <div className="blog-previev" key={ blog.id }>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
        )) }
    </div>
  );
}
