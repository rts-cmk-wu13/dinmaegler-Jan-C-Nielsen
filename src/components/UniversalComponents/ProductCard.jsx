import Button from "./Button";

export default function ProductCard({ headertext, headericon, title, price, pagefooter, Id, btnText, btnPath, pic,
    city, postalcode, adress1, rooms, cost, livingspace
}) {
    return (
        <>

            <article className="productcard">

                <header className="productcard__header">
                    <p className="productcard__header-text">{headertext}</p>
                    <span>{headericon}</span>
                </header>

                <section className="productcard__details">
                    <div className="productcard__img-container">
                        <div className="productcard__img">
                            <img src={pic} alt={title} />
                        </div>
                    </div>
                    <p className="productcard__adress1">{adress1}</p>
                    <p className="productcard__city">
                        {postalcode},  {city}
                    </p>
                    <p className="productcard__textbox">
                        <span className="productcard__title">{title}•</span> <span className="productcard__cost">Ejerudgift {new Intl.NumberFormat('de-DE').format(cost)} kr.</span>
                    </p>
                    <hr></hr>
                    <p className="productcard__info">
                        <span className="productcard__rooms">
                            {rooms} værelser • {livingspace} m²
                        </span>
                        <span className="productcard__price">
                            Kr. {new Intl.NumberFormat('de-DE').format(price)}
                        </span>
                    </p>
                </section>



            </article>
        </>
    )
}