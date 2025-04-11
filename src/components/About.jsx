import '../assets/css/about.css'

export default function About() {
    // if (typeof window !== "undefined" && window.localStorage) {
    //      localStorage.setItem("animation",true);
    // } else {
    //     console.log("localStorage n'est pas disponible.");
    // }

    return (

        <div className="section2">
            <div className="elipse"/>
            <h2>A PROPOS</h2>
            <div className="line">
                <div>
                    <div className="bloc5">
                        <h4>Présentation</h4>
                        <p>Hello, moi c’est Antoine, j’ai 20 ans et je viens de Lyon. Je suis un passionné de web design
                            depuis
                            le
                            début de mes études. Je prends une grande attention à tout ce qui entoure ce domaine afin de
                            rester
                            à
                            l’affut !</p>
                    </div>
                    <div className="bloc3">
                        <svg width="44" height="59" viewBox="0 0 44 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.9141 29.4998C21.9141 24.0691 26.8198 19.6665 32.8715 19.6665C38.923 19.6665 43.8289 24.0691 43.8289 29.4998C43.8289 34.9307 38.923 39.3332 32.8715 39.3332C26.8198 39.3332 21.9141 34.9307 21.9141 29.4998Z"
                                fill="#A172F9"/>
                            <path
                                d="M0 49.1666C0 43.7359 4.9058 39.3333 10.9574 39.3333H20.9148C21.4671 39.3333 21.9148 39.781 21.9148 40.3333V49.1666C21.9148 54.5974 17.0091 58.9999 10.9574 58.9999C4.9058 58.9999 0 54.5974 0 49.1666Z"
                                fill="#A172F9"/>
                            <path
                                d="M22.9141 0C22.3618 0 21.9141 0.447715 21.9141 1V18.6666C21.9141 19.2189 22.3618 19.6666 22.9141 19.6666H32.8715C38.9231 19.6666 43.8289 15.2641 43.8289 9.83333C43.8289 4.40254 38.9231 0 32.8715 0H22.9141Z"
                                fill="#A172F9"/>
                            <path
                                d="M0 9.83333C0 15.2641 4.9058 19.6666 10.9574 19.6666H20.9148C21.4671 19.6666 21.9148 19.2189 21.9148 18.6666V1C21.9148 0.447715 21.4671 0 20.9148 0H10.9574C4.9058 0 0 4.40253 0 9.83333Z"
                                fill="#A172F9"/>
                            <path
                                d="M0 29.4998C0 34.9307 4.9058 39.3332 10.9574 39.3332H20.9148C21.4671 39.3332 21.9148 38.8855 21.9148 38.3332V20.6665C21.9148 20.1142 21.4671 19.6665 20.9148 19.6665H10.9574C4.9058 19.6665 0 24.0691 0 29.4998Z"
                                fill="#A172F9"/>
                        </svg>
                        <p>UI - Figma</p>

                    </div>
                    <div className="bloc4">
                        <svg width="67" height="58" viewBox="0 0 67 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M42.2804 0H66.8758V58L42.2804 0ZM24.9378 0H0.3125V58L24.9378 0ZM33.6027 21.3704L49.2851 58H39.007L34.313 46.3315H22.8369L33.6027 21.3704Z"
                                  fill="#A172F9"/>
                        </svg>
                        <p>Suite Adobe</p>
                    </div>

                </div>

                <img src="/images/antoineclaitte.png" alt="Antoine Claitte est un web designer freelance spécialisé dans la conception de sites internet intuitifs et modernes avec Figma."/>

                <div>
                    <div className="bloc1">
                        <p className="underlined">Esprit d'équipe</p>
                        <p className="underlined">Adaptation</p>
                        <p className="underlined">A l'écoute</p>
                        <p className="underlined">Réactif</p>
                    </div>
                    <div className="bloc2">
                        <p>À la fois étudiant et freelance, j’alterne entre alternance et entrepreneuriat afin de
                            développer mes
                            compétences au sein d’un domaine qui m’anime !</p>
                    </div>
                </div>
            </div>

            <a  href="/Antoine_claitte_CV.pdf" download   target="_blank" rel="noopener"  className="blackButton ">
                <span> Télécharger mon CV </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.65625 12.6264L12.6258 1.65682M12.6258 1.65682L12.625 12.4998M12.6258 1.65682H1.31211"
                          stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </div>

    )
}
