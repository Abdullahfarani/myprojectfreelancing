import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Element2 = () =>{
    useEffect(()=>{
        Aos.init({duration:1000})
    })
    return (
        <>
        <div data-aos="fade-up" style={{marginTop:'20%', marginBottom:'10%'}}>
        <div className="container">
            <div class="row">
                <div class="col-4 test21img">
                    <img src="/freelancingProject/testi21.png" alt="test"></img>
                </div>
                <div class="col-8 whitecolorclass">
                    <img style={{width:'60px', height:'60px'}} src="/freelancingProject/quotes.png" alt="quotes"></img>
                    <h1>The quick brown fox jump over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymphs, for quick jigs vex !</h1>
                    <h2> Amman Paye</h2>
                    <h2>CEO of Figma</h2>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}
export default Element2;