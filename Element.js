import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import AOS from 'aos';

const Element = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(elementRef.current);

    return () => {
      // observer.unobserve(elementRef.current);
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    console.log("isVisible:", isVisible);
  }, [isVisible]);

  return (
    <>
      <div ref={elementRef} className="container whitecolorclass aligntopdistance">
        <div className="row">
        <div className="col alignclass" data-aos="fade-up">
            <h6>--- Project 1</h6>
            <h1>Branding Nice Studio</h1>
            <p>
              The technological revolution is changing aspects of our lives and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.
            </p>
          </div>
         
          
        <div className="col">
          <motion.div  data-aos="reset-rotate">
            <img
              src="/freelancingProject/portfolio-1-img.jpg"
              style={{
                borderRadius: "45px",
                zIndex: "1",
                transform: isVisible ? "rotate(0deg)" : "rotate(-10deg)",
                transitionDuration:"2s",
                transitionDelay:"0.5s"
              }}
              alt="portfolio"
            />
          </motion.div>
          <div style={{
            position:"absolute",
            marginTop:"-40%"
          }}>
          <svg style={{
            
          }} xmlns="http://www.w3.org/2000/svg" width="725.221" height="627.133" viewBox="0 0 725.221 627.133"><rect id="_0d30a061-2dae-4920-9275-da62c26ef3e5" data-name="0d30a061-2dae-4920-9275-da62c26ef3e5" width="650" height="532" rx="45" transform="translate(0 101.682) rotate(-9)" fill="#fff" opacity="0.1"></rect></svg>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Element;
