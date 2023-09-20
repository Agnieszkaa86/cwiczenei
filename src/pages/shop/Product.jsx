import { useLocation } from "react-router-dom";

function Product() {
    const location = useLocation();

    console.log("location", location)
    return ( 
        <>
        <h1>Product details page</h1>
        </>
     );
}

export default Product;