import { vertst, horizst } from "../components/Photos.js";
import { photoData } from "../data/photoData.js";
import "../css/Photography.css";
import { Link } from 'react-router-dom';

export default function Photography({ category, main }) {
    let filtered = category 
        ? photoData.filter(p => p.category === category) 
        : photoData;

    if (main) {
        filtered = filtered.filter(p => p.main === 'yes');
    }

    return (
        <div className="gridimages">
            {filtered.map(photo => {
                const thumb = photo.type === 'vert' ? vertst[photo.thumb] : horizst[photo.thumb];
                console.log(vertst["jace.jpg"]);
                console.log(vertst["jace.jpg"].default);
                return (
                    <Link to={`/photography/${photo.id}`} key={photo.id}>
                        <div className="imgcontainer">
                            <img className="images" src={thumb} alt="" />
                            <div className="textbox">
                                <div className="text">{photo.title}</div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}