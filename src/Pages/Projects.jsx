import "../css/Projects.css";
import { Link } from 'react-router-dom';
import { projectData } from "../data/projectData.js";

export default function Projects() {
    return (
        <div className="projimages">
            {projectData.map(project => (
                <Link to={`/Projects/${project.id}`} key={project.id}>
                    <div className="projcontainer">
                        <img className="images" src={project.image} alt="" />
                        <div className="textbox">
                            <div className="imagetext">{project.title}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
