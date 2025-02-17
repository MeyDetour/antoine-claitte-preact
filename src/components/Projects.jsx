import { route } from "preact-router";
import '../assets/css/projects.css'
import projectData from "../data.jsx";
export default function ProjectsSection() {
    console.log("Section4 rendered")
    function navigateTo(link) {
        route(`/project/${link}`);
    }

    let projects = projectData()
    console.log(projects);
    return (
        <div className="section4">
            <h2>MES PROJETS</h2>
            <div className="imgContainer">
                {projects.map((item, i) => (
                    <img key={i} src={item.image} onClick={()=>{navigateTo(item.uniqueName)}} alt="" />
                ))}  {projects.map((item, i) => (
                    <img key={i} src={item.image} onClick={()=>{navigateTo(item.uniqueName)}} alt="" />
                ))}  {projects.map((item, i) => (
                    <img key={i} src={item.image} onClick={()=>{navigateTo(item.uniqueName)}} alt="" />
                ))}  {projects.map((item, i) => (
                    <img key={i} src={item.image} onClick={()=>{navigateTo(item.uniqueName)}} alt="" />
                ))}  {projects.map((item, i) => (
                    <img key={i} src={item.image} onClick={()=>{navigateTo(item.uniqueName)}} alt="" />
                ))}  {projects.map((item, i) => (
                    <img key={i} src={item.image} onClick={()=>{navigateTo(item.uniqueName)}} alt="" />
                ))}
            </div>

        </div>
    )


}
