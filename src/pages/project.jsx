
import projectData from "../data.jsx";
import {NotFound} from "./_404.jsx";

export function Project({name}) {

    const projects = projectData();
    let project = null
    for (let item of projects) {

        if (item.uniqueName === name) {
            project = item;
            break;
        }
    }
    if (!project) {
        return (
            <NotFound />
        )
    }
    console.log(project);

    function navigateToHome(){
        window.location.href = "/";
    }

    if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("animation",true);
    } else {
        console.log("localStorage n'est pas disponible.");
    }


    return (
        <>  <div className="elipse" />

            <div className="oneProjectSection">

                <div className="navbarResponsive">

                    <div className="link" onClick={() => {
                        navigateToHome()
                    }}><span>[01]</span>
                        <span>A propos</span>
                    </div>

                    <div className="link" onClick={() => {
                        navigateToHome()
                    }}><span>[02]</span>
                        <span>Projets</span>
                    </div>
                    <div className="link"  onClick={() => {
                        navigateToHome()
                    }}><span>[03]</span>
                        <span>Contact</span>
                    </div>

                </div>
                <div className="columns">
                    <div className="column">
                        <div className="logo"><span onClick={navigateToHome}>Antoine Claitte</span></div>

                    </div>
                    <div className="column" />
                    <div className="column" />
                    <div className="column">
                        <div className="link" onClick={navigateToHome}><span>[01]</span>
                            <div className="animatedSpan">
                                <div>
                                    <span>A propos</span>
                                    <span>A propos</span>
                                    <span>A propos</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="link" onClick={navigateToHome}><span>[02]</span>
                            <div className="animatedSpan">
                             <div>
                                 <span>Projets</span>
                                 <span>Projets</span>
                                 <span>Projets</span>
                             </div>

                            </div>
                        </div>
                    </div>
                    <div className="column" onClick={navigateToHome}>
                        <div className="link"><span>[03]</span>
                            <div className="animatedSpan">
                            <div>
                                <span>Contact</span>
                                <span>Contact</span>
                                <span>Contact</span>
                            </div>

                            </div>
                        </div>
                    </div>
                    </div>

                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a  target="_blank" className="blackButton" href={project.link} rel="noreferrer">Voir le projet en ligne
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.65625 12.6264L12.6258 1.65682M12.6258 1.65682L12.625 12.4998M12.6258 1.65682H1.31211"
                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>

                <div className={"imageContainer"}>
                    {project.images.map((image, index) => (
                        <img key={index} src={image} alt="" />
                    ))}
                </div>

            </div>

        </>

    );
}

