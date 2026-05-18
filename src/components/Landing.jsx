import Webbie from "../assets/images/background.jpg";
import "../css/Landing.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { CircleArrowDown } from 'lucide-react';



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
        setClipBottom(renderedHeight-157);
        setClipArrow(clipInsideArrow+43);
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
                    const alpha = Math.min(1, window.scrollY / 500);
                    const beta = Math.max(0, 1 - window.scrollY / 300);
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
                    <CircleArrowDown ref={arrowDarkRef} className="arrowdark" size={52}/>
                </div>
                <div ref={arrowRef} className="arrow">
                    <CircleArrowDown size={52}/>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="info">
                
            </div>
        </section>
    );
}