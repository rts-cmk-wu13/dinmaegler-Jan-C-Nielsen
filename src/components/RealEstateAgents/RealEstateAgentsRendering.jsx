import AgentCard from "../UniversalComponents/AgentCard";

import { useLocation } from "react-router";


export default function RealEstateAgentsRendering({ data }) {
    const location = useLocation();
    
    const products = data
    console.log("RealEstateAgentsRendering data: " + data)

    return (
        <>
            <h1 className="list__h1">Medarbejdere i Roskilde</h1>
          
            <section className="agentlist">
                {products.map(item => (
                    <AgentCard
                        key={item.id}
                         id={item.id}
                        name={item.name}
                        title={item.title}
                        phone={item.phone}
                        email={item.email}
                        image={item.image}
                    />
                ))}
            </section>
        </>
    )
}