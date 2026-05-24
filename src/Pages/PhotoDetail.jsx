import { useParams } from 'react-router-dom';
import { photoData } from '../data/photoData';
import '../css/PhotoDetail.css';

export default function PhotoDetail() {
    const { id } = useParams();
    const photo = photoData.find(p => p.id === id);

    return (
        <div className="box">
            <div>
                <img src={photo.image} className="mainimage" />
            </div>
            <div>
                <h1>{photo.title}</h1>
                <h2>{photo.event}, {photo.date}</h2>
                <h3>{photo.location}</h3>
                <p>{photo.description}</p>
            </div>
            
        </div>
    );
}