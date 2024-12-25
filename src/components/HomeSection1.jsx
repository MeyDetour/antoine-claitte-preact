import '../assets/css/home.css'
import {scrollToDiv} from "../index.jsx";
import "../assets/css/oneProject.css"
import NavbarResponsif from "./navbar.js";


export default function HomeSection1() {


    return (
        <div className="section1">

            <NavbarResponsif />
            <div className="columns">
            <div className="whiteBlur1"/>
                <div className="column">
                    <div className="logo"><span>Antoine Claitte</span></div>
                    <div className="mailAndLinkedin">
                        <div>
                            <span>[RS]</span>
                            <a href="https://www.linkedin.com/in/antoine-claitte-a14a06245/" target="_blank"
                               class="animatedSpan" rel="noreferrer">
                                <span>LinkedIn</span>
                                <span>LinkedIn</span>
                                <span>LinkedIn</span>
                            </a></div>
                        <div>
                            <span>[@]</span>
                            <div className="animatedSpan">
                                <span>contact@antoineclaitte.com</span>
                                <span>contact@antoineclaitte.com</span>
                                <span>contact@antoineclaitte.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column"/>
                <div className="column"/>
                <div className="column">
                    <div className="link" onClick={() => {
                        scrollToDiv('.section2')
                    }}><span>[01]</span>
                        <div className="animatedSpan">
                            <span>A propos</span>
                            <span>A propos</span>
                            <span>A propos</span>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="link" onClick={() => {
                        scrollToDiv('.section4')
                    }}><span>[02]</span>
                        <div className="animatedSpan">
                            <span>Projets</span>
                            <span>Projets</span>
                            <span>Projets</span>
                        </div>
                    </div>
                </div>
                <div className="column" onClick={() => {
                    scrollToDiv('.footer')
                }}>
                    <div className="link"><span>[03]</span>
                        <div className="animatedSpan">
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>

                <div className="whiteBlur2"/>
            </div>

            <div className="elipse1" />
            <div className="elipse2" />
            <div className="elipse3" />
            <div className="elipse4" />
            <div className="titles">
                <h1>Antoine Claitte</h1>
                <h2>Web Designer</h2>
            </div>


            <h1 class="bienvenue">Bienvenue</h1>
        </div>


    )
}