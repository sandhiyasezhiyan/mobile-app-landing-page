import  img  from '../assets/img.jpg';

function WhyChoose()
{
    return(
        <>
        <div className="para-container">
             <div className="para-content">
                <h2>Why Choose us?</h2>
                <p>our experienced developers  created an AMP  
                    HTML Mobile App Template to help you establish your online presence and manage your daily
                    activities  in an efficient manner. you can download  AMP HTML Mobile App Template and enjoy creating  free AMP templates. </p>
                    <div className="btn">
                        <button className="btn-get">⬇️GetStarted</button>
                        <button className="btn-more">➡️More Info</button>
                        </div>


            </div>  
            <div className="img">
                <img src={img} className="phone-img" alt="img"></img>
                <button className="play">▶️AMP Mobile App</button>

            </div>
            






        </div>
           
            
            
        </>
    )
}
export default WhyChoose;