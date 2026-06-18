import "../css/Footer.css";
import { vertst } from './Photos.js';
import { useState } from "react";

export default function Footer() {
    const [rand] = useState(() => {
        const keys = Object.keys(vertst);
        if (keys.length === 0) return [];
        const selected = [];
        while (selected.length < 10) {
            const key = keys[Math.floor(Math.random() * keys.length)];
            if (!selected.includes(key)) {
                selected.push(key);
            }
        }
        return selected.map(key => vertst[key]);
    });

    return (
        <footer className="footer">
            {rand.map((src, i) => (
                <img key={i} src={src} className="image" />
            ))}
        </footer>
    );
}
// export default function Footer(){
//     const[rand, setRand]=useState(()=>{
//         const newnums=[];
//         while(newnums.length<10){
//             const num=Math.floor(Math.random()*(vertst.length));
//             if(!newnums.includes(num)){
//                 newnums.push(num);
//             }
//         }
//         return newnums.map(i=>vertst[i]);
//     });
//     return(
//         <footer className="footer">
//             <img src={rand[0]} className="image"/>
//             <img src={rand[1]} className="image"/>
//             <img src={rand[2]} className="image"/>
//             <img src={rand[3]} className="image"/>
//             <img src={rand[4]} className="image"/>
//             <img src={rand[5]} className="image"/>
//             <img src={rand[6]} className="image"/>
//             <img src={rand[7]} className="image"/>
//             <img src={rand[8]} className="image"/>
//             <img src={rand[9]} className="image"/>
//         </footer>
        
//     );
// }