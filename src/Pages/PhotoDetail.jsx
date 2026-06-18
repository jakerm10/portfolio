import { useParams } from 'react-router-dom';
import { photoData } from '../data/photoData';
import { vertsf, horizsf, vertst, horizst } from '../components/Photos.js';
import '../css/PhotoDetail.css';

export default function PhotoDetail() {
    const { id } = useParams();
    const photo = photoData.find(p => p.id === id);

    const thumb = photo.type === 'vert' ? vertst[photo.thumb] : horizst[photo.thumb];
    const full = photo.type === 'vert' ? vertsf[photo.full] : horizsf[photo.full];

    return (
        <div className="box">
            <div>
                <img src={full} className="mainimage" />
            </div>
            <div>
                <h1>{photo.title}</h1>
                {(photo.event.length > 0 || photo.date.length > 0) && (
                    <h3>
                        {photo.event.length > 0 && photo.event}
                        {photo.event.length > 0 && photo.date.length > 0 && ', '}
                        {photo.date.length > 0 && photo.date}
                    </h3>
                )}
                {photo.other && photo.other !== '' && <h3>{photo.other}</h3>}
                {photo.location && photo.location.length > 0 && <h3>{photo.location}</h3>}
                {photo.description && <p>{photo.description}</p>}
            </div>
        </div>
    );
}
