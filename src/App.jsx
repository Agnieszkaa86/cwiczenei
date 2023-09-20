import { Routes, Route } from "react-router-dom";
import WebappTemplate from "components/WebbappTemplate";
import Home from "./pages/Home";
import About from "./pages/about";
import AboutMission from "./pages/about/Mission";
import AboutReviews from "./pages/about/Reviews";
import AboutTeam from "./pages/about/Team";
import Contacts from "./pages/Contacts";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/Post";
import Login from "./pages/Login"
import StoreWall from "pages/shop";
import Product from "./pages/shop/Product";
import NotFound from "./pages/NotFound";
import "./App.css";


function App() {
    return (
        <>
        <Routes>
          <Route path="/" element={<WebappTemplate />}>
                {/*HOME*/}
              <Route index element={<Home /> } />
                  {/*ABOUT*/}
                <Route path="/about" element={<About />}>
                    <Route path="mission" element={<AboutMission />}/>
                    <Route path="team" element={<AboutTeam/>}/>
                    <Route path="reviews" element={<AboutReviews />}/>
              </Route>
                {/*BLOG-INDEX*/}
                <Route path="/blog" element={<Blog />} />
                {/*BLOG-POST*/}
                <Route path="/blog/:postId" element={<BlogPost />} />
                {/*CONTACTS*/}
            <Route path="/contacts" element={<Contacts />} />
                 {/*LOGIN*/}
            <Route path="/login" element={<Login />} />
                {/*STORE*/}
            <Route path="/shop" element={<StoreWall />} />
             <Route path="/product/:productId" element={<Product />} />
                {/*404*/}
              <Route path="/*" element={<NotFound/>} />
          </Route>
        </Routes>
        </>
    )
}
export default App;