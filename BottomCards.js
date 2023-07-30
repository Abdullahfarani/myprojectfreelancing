import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const BottomCard = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="container ">
             <div 
                    style={{
                        backgroundImage:"/freelancingProject/circleofBottomCard.png",
                        backgroundSize:"cover",
                        width:"100%",
                        height:"100%"
                    }}>
            <div className="card text-center" data-aos="zoom-in" style={{ borderRadius: "50px" }}>
           
                <div className="card-body bottomcardbg bottomcardWH d-flex flex-column align-items-center justify-content-center" style={{ position: "relative" }}>
                    {/* Add "position: relative" to the card-body container */}
                    
                    
                    <h1 style={{ fontWeight: 'bold', color: 'white' }} className="card-title">Let's Work Together</h1>
                    <p style={{ fontWeight: 'bold', color: 'white' }} className="card-text">The technological revolution is changing aspect of our lives, and the fabric of <br />society itself. it's also changing the way we learn and what we learn</p>
                    <a href="#" className="btn btn-primary">Contact Me</a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default BottomCard;
