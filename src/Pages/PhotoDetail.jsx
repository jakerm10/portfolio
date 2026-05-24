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
                {(photo.event.length > 0 || photo.date.length > 0) && (
                    <h2>
                        {photo.event.length > 0 && photo.event}
                        {photo.event.length > 0 && photo.date.length > 0 && ', '}
                        {photo.date.length > 0 && photo.date}
                    </h2>
)}
                {photo.other.length>0 && <h3>{photo.other}</h3>}
                {photo.location.length>0 && <h3>{photo.location}</h3>}
                <p>{photo.description}</p>
            </div>
            
        </div>
    );
}