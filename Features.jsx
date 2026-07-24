import {
    FaVolumeUp,
    FaCalendarAlt,
    FaGlobeAmericas,
    FaTrophy
} from "react-icons/fa";
function Features()
{
    return(
        <>
        <div className="features-div">
            <div className="features-card">

  <div className="features-icongrid">
    <FaVolumeUp />
  </div>

  <div className="features-content">
    <h2>Stay Successful</h2>
    <p>Our case studies show how you can succeed thanks 
        to AMP HTML Mobile Template</p>
  </div>

</div>
           
            <div className="features-card">
                <div className="features-icongrid">
                    <FaCalendarAlt />

                </div>
                
                <div className="features-content">
                    <h2>Create an Effective Team</h2>
                    <p>Organise your team as fast as possible with AMP HTML 
                        Mobile App Template</p>
                </div>
            </div>
            <div className="features-card">
                <div className="features-icongrid">
                    <FaGlobeAmericas />

                </div>
                
                <div className="features-content">
                    <h2>Launch A Unique Project</h2>
                    <p>You won't believe that starting your project with AMP 
                        HTML Mobile App Template can be that easy.</p>


                </div>
            </div>
            <div className="features-card">
                <div className="features-icongrid">
                    <FaTrophy />

                </div>
                
                <div className="features-content">
                    <h2>Achieve your Targets</h2>
                    <p> your team  will help you reach your goals as AMP HTML 
                        Mobile App Template does.</p>
                </div>
            </div>
        </div>
        </>
    )
    
}
export default Features;