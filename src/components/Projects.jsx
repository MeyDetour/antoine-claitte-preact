/*
<?php


use Bdd\Data;

$data = new  Data();
$projects = $data->projects;

?>*/
import '../assets/css/projects.css'
import projectData from "../data.jsx";
export default function ProjectsSection() {


    function navigateTo(link){
        window.location.href = "/project/"+link;
    }
    let projects = projectData()
    console.log(projects);
    return (
        <div className="section4">
            <h2>MES PROJETS</h2>
            <div className="imgContainer">
                {projects.map((item, i) => (
                    <img key={i} src={item.image} onClick={()=>{navigateTo(item.uniqueName)}} alt="" />
                ))}
            </div>

        </div>
    )


}
