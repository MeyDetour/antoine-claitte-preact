import '../assets/css/footer.css'
export default function Footer(){
    console.log("Footer rendered")
    return (

        <div className="footer">
            <div className="top">
                <h2>Travaillons ensemble</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid at eligendi enim et hic id iste
                    laborum
                    maxime minus modi nemo nihil, odio velit!</p>

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
                        <span>contact@antoineclaitte.com</span>
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
