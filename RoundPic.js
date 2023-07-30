import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const RoundPic = () =>{
        useEffect(()=>{
            AOS.init({duration:1000})
        },[])

    return(
        <> 
           
          
          <div class="row" style={{marginBottom:"30%"}}>
              <div class="col-sm-5">
                <h4 className="introclass" data-aos="fade-down"> --- Introducing</h4>
                <h1 className="jessy" data-aos="fade-down">Hello<br></br> I'm Jessy<br></br> Walter</h1>
                <h6 className="paragraphclass" data-aos="fade-down">Since beginning my journey as a freelance designer <br></br>nearby 7 years ago, I 've done remote work for <br></br> agencies, consulted for startup, and collaborated with<br></br> talented people to create digital products.</h6>
                <button type="button" data-aos="fade-up" className="btn btn-warning my-3 mx-5 btn-lg">Contact Me </button>
              </div>
              <div class="col-sm-7" data-aos="fade-up"
              style={{backgroundImage:'url(/freelancingProject/hero-img-bg.png)',backgroundRepeat:'no-repeat'}}
              alt="hero-img"
              >
                
        <div data-aos="fade-right"
        style={{
          position:'absolute',
          marginLeft:'70px',
          marginTop:'20px'
        }}
        >
        <div class="aux-scroll-anim elementor-element roundclass elementor-element-53a4ee7 elementor-view-stacked elementor-widget__width-auto aux-appear-watch-animation aux-scale-down-2 elementor-shape-circle elementor-widget elementor-widget-icon aux-animated aux-animated-once"  data-move-in="" data-aos="fade-left" data-move-out="moveHorizontal" data-axis-x="-30" data-axis-y="200" data-rotate="45" data-scale="0.5" data-vp-top="0.5" data-vp-bot="0.5" data-el-top="0.2" data-scroll-animation-off="1024" data-id="53a4ee7" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container" style={{transform: "translateX(24.2355px)"}}>
					<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="35.447" viewBox="0 0 40 35.447">
  <path id="ps_-_icon" data-name="ps - icon" d="M8.7,8.947c0-.212.444-.368.71-.368,2.04-.1,5.031-.158,8.168-.158,8.783,0,12.2,4.816,12.2,10.981,0,8.048-5.836,11.5-13,11.5-1.2,0-1.616-.054-2.455-.054V43.022c0,.263-.1.368-.364.368H9.068c-.263,0-.364-.1-.364-.358V8.947Zm5.624,16.83c.729.051,1.305.051,2.566.051,3.707,0,7.192-1.305,7.192-6.324,0-4.024-2.49-6.064-6.723-6.064-1.255,0-2.455.051-3.032.1V25.787Zm27.27-3.764c-2.509,0-3.346,1.255-3.346,2.3,0,1.15.57,1.933,3.919,3.659,4.968,2.408,6.533,4.7,6.533,8.1,0,5.069-3.865,7.794-9.093,7.794a13.842,13.842,0,0,1-6.5-1.362c-.206-.1-.253-.26-.253-.523V37.335c0-.317.152-.421.361-.266a11.672,11.672,0,0,0,6.375,1.882c2.509,0,3.555-1.046,3.555-2.459,0-1.15-.729-2.145-3.919-3.818-4.5-2.154-6.381-4.341-6.381-8.006,0-4.078,3.187-7.477,8.729-7.477a14.768,14.768,0,0,1,5.684.887.691.691,0,0,1,.317.627v4.341c0,.263-.158.421-.475.317A11.346,11.346,0,0,0,41.581,22Z" transform="translate(-8.7 -8.421)" fill="#64f4ab"></path>
</svg>
			</div>
		</div>
				</div>
				</div>
        </div>


        <div data-aos="fade-left">
                <div class="aux-scroll-anim elementor-element roundclass elementor-element-499ab51 elementor-view-stacked elementor-widget__width-auto aux-appear-watch-animation aux-scale-down-2 elementor-shape-circle elementor-widget elementor-widget-icon aux-animated aux-animated-once" style={{marginLeft:"95%"}} data-aos="fade-left" data-move-in="" data-move-out="moveHorizontal" data-axis-x="30" data-axis-y="200" data-rotate="30" data-scale="0.5" data-vp-top="0.5" data-vp-bot="0.5" data-el-top="0.2" data-scroll-animation-off="1024" data-id="499ab51" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container" style={{transform:"translateX(-24.2155px)"}}>
					<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="36.13" height="40" viewBox="0 0 36.13 40">
  <path id="id_-_icon" data-name="id - icon" d="M16.918,47.449c0,.359-.061.473-.473.473H10.936c-.359,0-.473-.179-.473-.473V8.948c0-.359.179-.473.473-.473h5.569c.294,0,.412.118.412.416V47.449Zm6.347-13.886c0-8.582,5.659-15.266,14.71-15.266.767,0,1.183,0,1.893.054V8.834a.346.346,0,0,1,.359-.359h5.828c.3,0,.359.122.359.3V42.325a26.712,26.712,0,0,0,.179,3.6c0,.237-.072.3-.312.416a21.743,21.743,0,0,1-9.41,2.134c-7.936,0-13.617-4.913-13.617-14.911Zm16.6-9.41a5.315,5.315,0,0,0-2.13-.359c-4.608,0-7.843,3.55-7.843,9.467,0,6.749,3.292,9.467,7.434,9.467a6.94,6.94,0,0,0,2.546-.412V24.154Z" transform="translate(-10.463 -8.475)" fill="#64f4ab"></path>
</svg>
			</div>
		</div>
				</div>
				</div>
                </div>




                <div 
                style={{
                  position:'absolute',
                  marginLeft:'110px',
                  marginTop:'-100px'
                }}
                data-aos="fade-up" data-aos-delay="1000"
                >
                      <img src="/freelancingProject/hero-img.png"></img>
                </div>
              
              </div>
            </div>
         
        
   
        
        </>
    );
}
export default RoundPic;