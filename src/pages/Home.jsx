import Hero from "../components/Home/Hero";
import Newsletter from "../components/Home/Newsletter";
import HomeProducts from "../components/Home/HomeProducts";
import Intro from "../components/Home/Intro";
import { useLoaderData } from "react-router";


export default function Home(){
    const products = useLoaderData()
    // console.log(products);


    return(
        <>
        <section className="home">
        
        <HomeProducts
        data={products}
        />
        <Hero/>
        <Intro/>
        <Newsletter/>
        </section>
        </>
    )
}