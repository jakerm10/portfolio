import { useParams } from 'react-router-dom';
import { projectData } from "../data/projectData.js";
import ReactMarkdown from 'react-markdown';
import "../css/ProjectDetail.css";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projectData.find(p => p.id === id);

    return (
        <div>
            <h1>{project.title}</h1>
            <div className='textdiv'>
                <ReactMarkdown>{project.text}</ReactMarkdown>
            </div>
        </div>
    );
}