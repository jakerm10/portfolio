import "../css/Footer.css";
import {verts} from './Photos.js';
import {useState} from "react";

export default function Footer(){
    const[rand, setRand]=useState(()=>{
        const newnums=[];
        while(newnums.length<10){
            const num=Math.floor(Math.random()*(verts.length));
            if(!newnums.includes(num)){
                newnums.push(num);
            }
        }
        return newnums.map(i=>verts[i]);
    });
    return(
        <footer className="footer">
            <img src={rand[0]} className="image"/>
            <img src={rand[1]} className="image"/>
            <img src={rand[2]} className="image"/>
            <img src={rand[3]} className="image"/>
            <img src={rand[4]} className="image"/>
            <img src={rand[5]} className="image"/>
            <img src={rand[6]} className="image"/>
            <img src={rand[7]} className="image"/>
            <img src={rand[8]} className="image"/>
            <img src={rand[9]} className="image"/>
        </footer>
        
    );
}