import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Menu= () =>{

    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <>
   
        <div style={{marginBottom:"10%"}}>
   <nav className="navbar navbar-expand-lg bg-dark  border-bottom border-bottom-dark" data-bs-theme="dark">
   <img src="/freelancingProject/logo-header.png" data-aos="fade-right" className="myclass ml-6" alt="logo-header"></img>
  <div className="container-fluid ">

    <a className="navbar-brand myclassanchar myclassmarginleft" data-aos="zoom-in" href="/">Home</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active myclassanchar" data-aos="zoom-in" aria-current="page" href="/">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active myclassanchar" data-aos="zoom-in" href="/">Contact</a>
        </li>
        </ul>
          
          <button type="button" data-aos="fade-left" className="btn btn-warning my-3 mx-5 btn-lg">Contact Me </button>
    
          
          
    </div>
  </div>
</nav>
</div>
        </>
    );
}
export default Menu;