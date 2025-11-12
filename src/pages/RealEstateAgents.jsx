
import { useLoaderData } from "react-router";
import RealEstateAgentsRendering from "../components/RealEstateAgents/RealEstateAgentsRendering";

export default function RealEstateAgents(){
    const products = useLoaderData()
     console.log(products);


    return(
        <>
        <section className="real_estate_agents">
        
          <RealEstateAgentsRendering data={products}
          />
      
        </section>
        </>
    )
}