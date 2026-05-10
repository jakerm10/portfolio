import Webbie from "../assets/images/Webbie.jpeg";
import "../css/Landing.css";
import { useEffect, useRef, useState } from "react";

export default function Landing(){
    const imageRef = useRef(null);
    const [clip, setClip] = useState("50%");

    useEffect(() => {
        setClip("50%");
      }, []);

    return(
        <section className="landing">
            <div className="stack">
                <img src={Webbie} alt="Jake Moore" className="webbie" />
                <div className="text-wrapper">
                    <div className="landing-text">
                        Jake<br></br>Moore
                    </div>
                    <div className="landing-text landing-overlay" style={{clipPath: `inset(0 ${clip} 0 0)`}}>
                       Jake<br></br>Moore
                    </div>
                </div>
            </div>
            
        </section>
    );
}