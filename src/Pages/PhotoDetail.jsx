import { useParams } from 'react-router-dom';
import { photoData } from '../data/photoData';
import '../css/PhotoDetail.css';

export default function PhotoDetail() {
    const { id } = useParams();
    const photo = photoData.find(p => p.id === id);

    return (
        <div>
            <img src={photo.image} className="mainimage" />
            <h1>{photo.title}</h1>
            <p>{photo.description}</p>
        </div>
    );
}