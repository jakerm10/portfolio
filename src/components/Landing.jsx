import Webbie from "../assets/images/Webbie.jpeg";
import "../css/Landing.css";
import { useEffect, useRef, useState, useCallback } from "react";

export default function Landing() {
    const imageRef = useRef(null);
    const [clipRight, setClipRight] = useState(0);
    const [clipBottom, setClipBottom] = useState(9999);

    const updateClip = useCallback(() => {
        const img = imageRef.current;
        if (!img || !img.complete) return;
        const stack = img.closest('.stack');
    
        const renderedHeight = img.offsetWidth * (img.naturalHeight / img.naturalWidth);
        const imageRightEdge = img.offsetLeft + img.offsetWidth;
        const lightText = stack.querySelector('.landing-text.light');
        const adjustedRight = imageRightEdge - lightText.offsetLeft;
    
        setClipRight(adjustedRight);
        setClipBottom(renderedHeight-18);
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

    return (
        <section className="landing">
            <div className="stack">
                <img
                    src={Webbie}
                    ref={imageRef}
                    className="webbie"
                    onLoad={updateClip}
                />
                <div className="text-layer">
                    <div className="landing-text dark">
                        Jake<br />Moore
                    </div>
                    <div
                        className="landing-text light"
                        style={{
                            clipPath: `polygon(0px 0px, ${clipRight}px 0px, ${clipRight}px ${clipBottom}px, 0px ${clipBottom}px)`
                        }}
                    >
                        Jake<br />Moore
                    </div>
                </div>
            </div>
        </section>
    );
}