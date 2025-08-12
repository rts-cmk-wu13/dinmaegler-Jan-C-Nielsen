import introimage from "/intro-image.png";
import house1 from "/house1.png";
import home1 from "/home1.png";
import property1 from "/property1.png";
import mapsandflags1 from "/maps-and-flags1.png";
import customer1 from "/customer1.png";

export default function Intro() {
  return (
    <>
      <section className="intro">
        <img src={introimage} alt="Intro Background" className="intro__background" />
        <div className="intro__content">
          <div>
            <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
            <h3>Det synes vi siger noget om os!</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

          </div>
          <div className="intro__images">
            <img src={house1} alt="House 1" className="intro__image" />
            <div>
              <h3>4829</h3>
              <p>boliger solgt</p>
            </div>
            <img src={home1} alt="Home 1" className="intro__image" />
            <div>  <h3>158</h3>
              <p>boliger til salg</p>
            </div>
          </div>
        </div>

      </section>

      <hr></hr>

      <section className="intro__footer">

        <article>
          <img src={property1} alt="Property 1" className="intro__footer-image" />
          <div>  
            <h3>Bestil et salgstjek</h3>
            <p>Med et Din Mægler Salgstjek
              bliver du opdateret på værdien
              af din bolig.</p>
          </div>
        </article>
        <article>
          <img src={mapsandflags1} alt="mapsandflags 1" className="intro__footer-image" />
          <div>
            <h3>74 butikker</h3>
            <p>Hos Din Mægler er din bolig
              til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
          </div>
        </article>
        <article>
          <img src={customer1} alt="customer 1" className="intro__footer-image" />
          <div>
            <h3>Tilmeld køberkartotek</h3>
            <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
          </div>
        </article>
      </section>
    </>
  )
}