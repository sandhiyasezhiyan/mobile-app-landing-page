import {Link} from "react-router-dom"



function Menus()
{
    return(
        <>
        <div className="header">
            <h2>Best Mobile App</h2>
             
            
            <div className="menus">
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>

                    <li className="dropdown"><Link to="/moredemos">More Demos</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/mobileapp">Mobile App</Link></li>
                        <li><Link to="/co-working">Co-Working</Link></li>
                        <li><Link to="/bussinessschool">Bussiness-School</Link></li>
                        <li><Link to="/headers">Headers</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/tabs&accordions">Tabs&Accordions</Link></li>
                        <li><Link to="/contents">Contents</Link></li>
                        <li><Link to="/sliders&video">Sliders&Video</Link></li>
                        <li><Link to="/team&forms">Team&Forms</Link></li>
                        <li><Link to="/socialmaps">SocialMaps</Link></li>
                        <li><Link to="/footers">Footers</Link></li>

                    </ul>
                    </li>
                    
                    < li><Link to="/contactus" className="cont-btn">Contact Us</Link></li>
                   
                </ul>

            </div>
            </div>
                
                

                
            
           
       
        
        </>
    );
    
}
export default Menus;