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

    const [scrollval, updateScrollVal] = useState(0); //current state, update func, useState(default val)
    useEffect(()=>{ //runs on every render, when value changes runs
        const handleScroll = () =>updateScrollVal(window.scrollY);
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    },[]);

    return (
        <section className="landing">
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
                <CircleArrowDown className="arrowdark"  size={52} style={{opacity: 1-scrollval/300}}/>
                <div ref={arrowRef} className="arrow">
                    <CircleArrowDown size={52} style={{opacity: 1-scrollval/300, clipPath: `polygon(0px 0px, 100% 0px, 100% ${cliparrow}px, 0px ${cliparrow}px)`}}/>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>text
        </section>
    );
}