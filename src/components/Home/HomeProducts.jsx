import Button from "../UniversalComponents/Button";
import ProductCard from "../UniversalComponents/ProductCard";

export default function HomeProducts({ data }) {
    const products = data; //.filter(item=> item.category === 'CDplayers')
    console.log(products);

    return (
        <>
           <section className="homeproducts">
                <header className="homeproducts__header">
                    <h1 className="homeproducts__headline">Udvalgte Boliger</h1>
                    <p className="homeproducts__subheadline">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
                </header>

                <section className="homeproducts__products">
                    {products.map(item => (
                        <ProductCard
                            key={item.id}
                            title={item.type}
                            price={item.price}
                            Id={item.id}
                            btnText="Read more"
                            btnPath="details"
                            pic={item.images[0].formats.thumbnail.url}
                            city={item.city}
                            postalcode={item.postalcode}
                            adress1={item.adress1}
                            rooms={item.rooms}
                            cost={item.cost}
                            livingspace={item.livingspace}
                        />
                    ))}
                </section>

                <div className="button-wrapper">
                    <Button className="homeproductscard__button"
                        text="Se alle boliger"
                        path="list"
                        classname="homeproducts"
                    />
                </div>
            </section>
        </>
    )
}