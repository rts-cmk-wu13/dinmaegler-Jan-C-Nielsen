import { Link } from "react-router";
import phoneimg from "/phone-solid_1.png";
import dinmaegler from "/Dinmaegler.png";
import phoneicon from "/PhoneIcon.png";
import paperplaneicon from "/PaperplaneIcon.png";
import pointericon from "/PointerIcon.png";
import stribe from "/stribe.png";
import mastercard from "/mastercard.png";
import visa from "/visa.png";
import "/src/styles/styles.scss";
export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer__primary">
                    <img src={dinmaegler} />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

                    <div className="footer__columns">

                        <section className="footer__contact">
                            <div className="footer__contactItems">
                                <div className="footer__para">
                                    <Link to="contact" className="footer__contactItem">
                                        <img src={phoneicon} />
                                        <div>
                                            <p className="footer__para">Ring til os</p>
                                            <p className="footer__para"><span>+45 7070 4000</span></p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="footer__para">
                                    <Link to="contact" className="footer__contactItem">
                                        <img src={paperplaneicon} />
                                        <div>
                                            <p className="footer__para">Send en mail</p>
                                            <p className="footer__para">4000@dinmaegler.com</p></div>
                                    </Link>
                                </div>

                                <div className="footer__para">
                                    <Link to="contact" className="footer__contactItem">
                                        <img src={pointericon} />
                                        <div>
                                            <p className="footer__para">Butik</p>
                                            <p className="footer__para">Stændertorvet 78, 4000 Roskilde</p>
                                        </div>
                                    </Link></div>
                            </div>
                            <div className="footer__para">
                                <p className="footer__para">Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
                            </div>
                        </section>
                        <div>
                            <section className="footer__moreinfo">
                                <div className="footer__moreinfoItems">
                                    <h3>Quick Links</h3>
                                    <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Boliger til salg</Link></p>
                                    <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Mæglere</Link></p>
                                    <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Kontakt os</Link></p>
                                    <p className="footer__para"><Link to="moreinfo" className="footer__moreinfoItem">Log ind / bliv bruger</Link></p>
                                </div>
                            </section>

                            <section className="footer__navigation">
                                <div className="footer__moreinfoItems">
                                    <p className="footer__para"><Link to="https://www.de.dk/" className="footer__navigationItem">Medlem af </Link></p>
                                    <p className="footer__para footer__dms"><Link to="https://www.de.dk/" className="footer__navigationItem">DMS</Link></p>
                                    <p className="footer__para"><Link to="https://www.de.dk/" className="footer__navigationItem">Dansk Mægler Sammenslutning</Link></p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div >

                <div className="footer__secondary">
                    <small className="footer__copyright">Layout By Jit Banik 2020</small>
                </div>
            </footer >
        </>
    )
}