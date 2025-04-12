import '../assets/css/footer.css'
export default function Footer(){
    console.log("Footer rendered")
    return (

        <div className="footer">
            <div className="top">
                <h2>Travaillons ensemble</h2>
                <p>Besoin d’un design clair, efficace et impactant ? Je vous accompagne en adaptant chaque création à votre identité et à vos besoins spécifiques. Discutons de votre projet et trouvons ensemble la meilleure approche pour le concrétiser.</p>

            </div>
            <div className="bottom">
                <div>
                    <div className="data">
                        <span>[Lieu]</span>
                        <span>Lyon</span>
                    </div>
                    <div className="data">
                        <span>[Nom]</span>
                        <span>Antoine CLAITTE</span>
                    </div>
                </div>
                <div>
                    <div className="data">
                        <span>[@]</span>
                        <a href={"mailto:contact@antoineclaitte.com"}>contact <span className={"arobase"}>@</span>antoineclaitte.com</a>
                    </div>
                    <div className="data">
                        <span>[RS]</span>
                        <a href="https://www.linkedin.com/in/antoine-claitte-a14a06245/" target="_blank"
                           rel="noreferrer">LinkedIn</a>
                    </div>
                    <div className="data">
                        <span>[+33]</span>
                        <span>06 51 48 42 25</span>
                    </div>
                </div>

            </div>
            <a href={"/mentionslegales"} className="mentions">..Mention légales..</a>
            <div className="elipse"></div>
        </div>
    )
}
