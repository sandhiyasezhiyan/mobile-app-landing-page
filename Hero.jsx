import BackgroungImg from "../assets/BackgroungImg.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { FiSend } from "react-icons/fi"
import {TbDiamond} from "react-icons/tb"
function Hero()
{
    return(
        <>
        <div className="hero" 
        style={{backgroundImage:`url(${BackgroungImg})`}}>
            <div className="hero-content">
                <h2>AMP HTML MOBILE TEMPLATE</h2>
                <p className="description"> we created this AMP HTML 
                    Mobile App Template  to make it easier for you to work on your projects.
                    Download this AMP Mobile App Template from the App Template from the 
                    app store and use it without limits.Build your free AMP Mobile Template</p>
                    <div className="btn">
                        <button className="btn-get">Get Started</button>
                    <button className="btn-more">More Info</button>

                    </div>
                    
                    <div className="features-sec">
                        <div className="card">
                            <div className="icon">
                                <HiOutlineMenuAlt2 />
                                
                                 <p className="para">Smart Interface</p>
                                 </div>
                                  </div>
                                  <div className="card">
                                    <div className="icon">
                        <FiSend />
                        <p className="para">Fastest communication</p>
                    </div>

                                  </div>
                                  <div className="card">
                                                        <div className="icon">
                        <TbDiamond />
                        <p className="para">Free without Adv</p>
                    </div>

                                  </div>

                    
                   

                    </div>
                    
            </div>
        </div>

        </>
    );
}
export default Hero;