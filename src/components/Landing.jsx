import Webbie from "../assets/images/Webbie.png";
import "../css/Landing.css";

export default function Landing(){
    return(
        <section className="Landing">
            <img src={Webbie} alt="Jake Moore" className="webbie" />
            <h1>Jake Moore</h1>
        </section>
    );
}