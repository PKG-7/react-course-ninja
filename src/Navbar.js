import { Link } from "react-router-dom/cjs/react-router-dom.min"

export const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Dojo Block</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link className="new-blog" to="/create">NewBlog</Link>
        </div>
    </nav>
  )
}
