import { useParams } from "react-router"
import Specifications from "../components/Details/Specifications";
import ProductDetails from "../components/Details/Product-details";
import { useLoaderData } from "react-router";
import Carousel from "../components/Details/Carousel";



export default function Detail(){
    const product = useLoaderData();
    console.log(product);


    const {id}= useParams();

    // const {id}= useParams();
    // console.log(id)


    return  (
        <>

        <h1 className="headline">PRODUCT</h1>   

        <section className="details">

        <section className="details__top">
        <Carousel product={product}/>
        <ProductDetails product={product}/>
        </section>

        <Specifications product={product} />

        </section>
        
        </>
    )
}


