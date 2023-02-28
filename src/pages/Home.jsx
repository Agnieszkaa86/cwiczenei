import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>HOME PAGE</h1>
            <p>This is my home page. Chek my <Link to="/about">about page.</Link></p>
        </>
    );
}

export default Home;