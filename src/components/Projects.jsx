
import '../assets/css/projects.css'
import projectData from "../data.jsx";
export default function ProjectsSection() {

    console.log("load section 4")
    let projects = projectData()
    console.log(projects);
    return (
        <div className="section4">
            <h2>MES PROJETS</h2>
            <div className="imgContainer">
                {projects.map((item, i) => (
                    <a href={`/project/${item.uniqueName}`} key={i}>
                        <img key={i} src={item.image}  alt="" />
                    </a>
                ))}
            </div>

        </div>
    )


}
