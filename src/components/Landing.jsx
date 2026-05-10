import Webbie from "../assets/images/Webbie.jpeg";
import "../css/Landing.css";

export default function Landing(){
    return(
        <section className="landing">
            <div className="imagetextcontainer">
                <img src={Webbie} alt="Jake Moore" className="webbie" />
                <div className="text-wrapper">
                    <div className="landing-text">
                        Jake Moore
                    </div>
                    <div className="landing-overlay">
                       Jake Moore
                    </div>
                </div>
                
            
                
            </div>
            
        </section>
    );
}