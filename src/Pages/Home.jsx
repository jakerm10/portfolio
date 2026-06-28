import Webbie from "../assets/images/background.jpg";
import profile from "../assets/images/profile.jpeg";
import grad from "../assets/images/grad.jpeg";
import "../css/Home.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Gondola from "../assets/Logos/GondolaLogo_White.png";
import { IoMdMail } from "react-icons/io";




export default function Landing() {
    const imageRef = useRef(null);
    const arrowRef = useRef(null);
    const [clipRight, setClipRight] = useState(0);
    const [clipBottom, setClipBottom] = useState(9999);
    const [cliparrow, setClipArrow]=useState(0);

    

    const updateClip = useCallback(() => {
        const img = imageRef.current; 
        if (!img || !img.complete) return;
        const stack = img.closest('.stack');
    
        const renderedHeight = img.offsetWidth * (img.naturalHeight / img.naturalWidth);
        const imageRightEdge = img.offsetLeft + img.offsetWidth;
        const lightText = stack.querySelector('.landing-text.light');
        const adjustedRight = imageRightEdge - lightText.offsetLeft;

        const arrowTop = arrowRef.current ? arrowRef.current.offsetTop : 0;
        const clipInsideArrow = renderedHeight - arrowTop;
    
        setClipRight(adjustedRight);
        setClipBottom(renderedHeight-10);
        setClipArrow(clipInsideArrow+43);
        console.log(adjustedRight);
        console.log(renderedHeight);
    }, []);

    useEffect(() => {
        if (!imageRef.current) return;

        const observer = new ResizeObserver(updateClip);
        observer.observe(imageRef.current);
        window.addEventListener('resize', updateClip);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateClip);
        };
    }, [updateClip]);


    const arrowDarkRef = useRef(null);
    const sectionRef = useRef(null);
    useEffect(() => {
        let tick = false;
        const handleScroll = () => {
            if (!tick) {
                requestAnimationFrame(() => {
                    const fade=window.innerHeight*0.2;
                    const alpha = Math.min(1, window.scrollY / fade);
                    const beta = Math.max(0, 1 - window.scrollY / 200);
                    if (sectionRef.current) sectionRef.current.style.backgroundColor = `rgba(1,43,85,${alpha})`;
                    if (arrowRef.current) arrowRef.current.style.opacity = beta;
                    if (arrowDarkRef.current) arrowDarkRef.current.style.opacity = beta;
                    tick = false;
                });
                tick = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="landing" ref={sectionRef}>
            <div className="stack">
                <img src={Webbie} ref={imageRef} className="webbie" onLoad={updateClip}/>
                <div className="text-layer">
                    <div className="landing-text dark">
                        Jake<br />Moore
                    </div>
                    <div className="landing-text light" style={{clipPath: `polygon(0px 0px, ${clipRight}px 0px, ${clipRight}px ${clipBottom}px, 0px ${clipBottom}px)`}}>
                        Jake<br />Moore
                    </div>
                </div>
                <div>
                    <FiArrowDownCircle ref={arrowDarkRef} className="arrowdark" size={72}/>
                </div>
                <div ref={arrowRef} className="arrow">
                    <FiArrowDownCircle size={72}/>
                </div>
            </div>
            <div className="photogrid">
                <div className="phototext-layer">
                    Photographer
                    <div className="textone">
                     Creative Media intern at University of Colorado Boulder, specializing in women's soccer, track, and men's basketball. Always trying something new and trendy. Live Laugh Love my Sony A1 and Fujifilm Polaroid
                    </div>
                </div>
                <img src={profile} className="profile"/>
            </div>
            <div className="photogrid">
            <img src={grad} className="hs"/>
                <div className="cstext-layer">
                    &lt;coder&gt;
                    <div className="textone">
                    Computer Science major at University of Colorado Boulder, specializing in databases, UI, and UX. Trying to make my life easier through code. Fun fact: I made this website!
                    </div>
                </div>
            </div>

            <div className="icons">
                <a href="https://www.instagram.com/jakermphoto" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} color="white"/>
                </a>  
                <a href="https://github.com/jakerm10" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} color="white"/>
                </a>
                <a href="https://linkedin.com/in/jakermoore" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="white"/>
                </a>
                <a href="https://gondola.cc/jakermphotography" target="_blank" rel="noopener noreferrer">
                <img src={Gondola} className="gondola"></img>
                </a> 
                <a href="https://www.facebook.com/profile.php?id=61571343885678" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} color="white"/>
                </a>
                <a href="https://x.com/jakermphoto" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={40} color="white"/>
                </a>
                <a href="mailto:jakermoorephotography@gmail.com" target="_blank" rel="noopener noreferrer">
                <IoMdMail size={40} color="white"/>
                </a>
                
            </div>
        </section>
    );
}