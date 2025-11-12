
import { useLoaderData, Link, useLocation } from "react-router";
import ContactForm from "../Contact/ContactForm";

export default function AgentDetails() {
  const location = useLocation();
  const agent = useLoaderData();
  console.log(agent);
  //  const addressString = `${product.adress1} ${product.postalcode} ${product.city}`;

  //    const params = new URLSearchParams({
  //      street: product.adress1,
  //      city: product.city,
  //      postalcode: product.postalcode,
  //     // country: "denmark",
  //     format: "json",
  //      //addressdetails: "1",
  //      limit: "1",
  //     // email: "your@email.com"  // Replace with your email
  //    });
  return (
    <>
    <h1 className="list__h1">Kontakt en medarbejder</h1>
    <div className="agent-detail-container">
      <section className="agent-detail-section">
        <section  className="product__agent">
          <img src={agent.image.url} alt={agent.name} className="agent__img" />
          <div>
            <h3>{agent.name}</h3>
            <p>Ejendomsmægler</p>
            <hr />
            <p>{agent.phone}</p>
            <p>{agent.email}</p>
          </div>
        </section>
        <p>{agent.description}</p>
         <ContactForm classes = "agent-detail__contactform"/>
      </section>
      <aside className="sidebar">
        <p>Find The Best</p>
        <p>Property</p>
        <p>For Rent Or Buy</p>
        <hr />
        <small>Call Us Now</small>
        <p>+00 123 456 789</p>
      </aside>
    </div>
   
    </>
  );
}
