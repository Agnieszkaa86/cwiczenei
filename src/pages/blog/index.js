import { Link } from "react-router-dom";

function Blog() {
return (
        <>
        `   <h1>Blog lista artykułów</h1>
            <ul>
                <li>
                    <Link to="/blog/post-1">Post 1 </Link>
                </li>
                <li>
                    <Link to="blog/post-2">Post 2 </Link>
                </li>
                <li>
                    <Link to="blog/3">Post 3 </Link>
                </li>
            </ul>
        </>
    );
}

export default Blog;