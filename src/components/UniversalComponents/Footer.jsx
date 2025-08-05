import { Link } from "react-router";
import phoneimg from "/phone-solid_1.png";
import dinmaegler from "/Dinmaegler.png";
import facebookimg from "/facebook.png";
import instagramimg from "/instagram.png";
import youtubeimg from "/youtube.png";
import stribe from "/stribe.png";
import mastercard from "/mastercard.png";
import visa from "/visa.png";
import "/src/styles/styles.scss";
export default function Footer() {

    return (
        <>
            <footer className="footer">
                <img src={dinmaegler} />
                <h3 className="footer__para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</h3>
                <div className="footer__primary">
                    <section className="footer__navigation">

                        <p className="footer__para"><Link to="https://www.de.dk/" className="footer__navigationItem">Medlem af </Link></p>
                        <p className="footer__para"><Link to="https://www.de.dk/" className="footer__navigationItem">DMS</Link></p>
                        <p className="footer__para"><Link to="https://www.de.dk/" className="footer__navigationItem">Dansk Mægler Sammenslutning</Link></p>

                    </section>

                    <section className="footer__moreinfo">
                        <div className="footer__moreinfoItems">
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Boliger til salg</Link></p>
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Mæglere</Link></p>
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Kontakt os</Link></p>
                            <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Log ind / bliv bruger</Link></p>
                        </div>
                    </section>

                    <section className="footer__contact">
                        <h3 className="footer__contactTitle">Contact</h3>
                        <div className="footer__contactItems">
                            <div className="footer__para"><Link to="contact" className="footer__contactItem">
                                <p className="footer__para">Ring til os</p>
                                <p className="footer__para"><img src={phoneimg} /><span>+45 7070 4000</span></p></Link></div>
                            <div className="footer__para"><Link to="contact" className="footer__contactItem">
                                <p className="footer__para">Send en mail</p>
                                <p className="footer__para"><img src={phoneimg} />4000@dinmaegler.com</p></Link></div>
                                  <div className="footer__para"><Link to="contact" className="footer__contactItem">
                                <p className="footer__para">Butik</p>
                                <p className="footer__para"><img src={phoneimg} />Stændertorvet 78, 4000 Roskilde</p></Link></div>
                        </div>
                        <div className="footer__para">
                                <p className="footer__para">Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
                        </div>
                    </section>
                    


                </div>
                <hr></hr>
                <div className="footer__secondary">
                    <small className="footer__copyright">Layout By Jit Banik 2020</small>
                </div>
            </footer>
        </>
    )
}