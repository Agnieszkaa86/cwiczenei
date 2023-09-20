import { useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";

function StoreWall() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const category = searchParams.get("category") || "";
    const size = searchParams.get("size");
    const color = searchParams.get("color");
   
    console.log("Filters", {
        category,
        size,
        color,
    })
    const setFilter = () => {
        setSearchParams({ category: "jacket", size: "xl", color: "white"})
    }
    // useEffect(() => {
    //     console.log('Call Api to request for filter');
    // }, [searchParams]);
    return (
        <>
            <h1>Welcome to our store {category}</h1>
            {category && <h3>Categry: {category}</h3>}
            {size && <h3>Categry: {size}</h3>}
            {color && <h3>Categry: {color}</h3>}
            <button onClick={setFilter}>Set Filters</button>
            <hr />
            <Link to="/product/123">Product 123</Link>
        </>
    );
}

export default StoreWall;