import logo from "../assets/logo.png";
function Footer()
{
    return(
        <>
        <div className="about-container">
            <div className="about-content">
                <img src={ logo } className="logo" alt="logo" />
                <p>HTML AMP Mobile App Template is suitable 
                    for developers and beginners
                     to launch their personal and corporate projects.</p>
                     <p>📱+1 (0) 000 0000 001</p>
                     <p>📍1234 Street Name City AA 99999</p>
                     <p>✉️support@mobirise.com</p>
            </div>
            <div className="categories">
                <h2>Categories</h2>
                <ul>
                    <li>
                         <div className="list-color"></div>
                        <span>Projects</span>
                    
                    </li>
                   <li>
                    <div className="list-color"></div>
                        <span>Design</span>
                    
                   </li>
                    <li>
                        <div className="list-color"></div>
                        <span>Team</span>
                    
                    </li>
                    <li>
                        <div className="list-color"></div>
                        <span>Help</span>
                    

                    </li>
                    <li>
                        <div className="list-color"></div>
                        <span>TechSupport</span>
                    
                    </li>
                    
                </ul>
            </div>
            <div className="contandaddress">
                <h2>Contact</h2>
                <p>Email: support@mobirise.com
                    <br />
                Phone: +1 (0) 000 0000 001
                <br />
                Fax: +1 (0) 000 0000 002</p>
                <h2>Address</h2>
                <p>1234 Street Name
                    <br/>
                City, AA 99999</p>
             </div>

             <div className="form">
                <form>
                    <input type="text" className="textbox"placeholder="Name" />
                    <input type="text" className="textbox" placeholder="Email" />
                    <input type="textarea" className="textmsg" placeholder="Message" />
                    <button className="btncont">CONTACT US</button>
                </form>
             </div>

            
        </div>
        </>
    )

}
export default Footer;