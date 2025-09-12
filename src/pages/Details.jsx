import { useParams } from "react-router"
import Specifications from "../components/Details/Specifications";
import ProductDetails from "../components/Details/Product-details";
import { useLoaderData, useLocation } from "react-router";
import Carousel from "../components/Details/Carousel";



export default function Detail() {
    const product = useLoaderData();
    console.log(product);
    
    return (
        <>
            <section className="details">
                <section className="details__top">
                    <ProductDetails product={product} />
                </section>
            </section>

        </>
    )
}


