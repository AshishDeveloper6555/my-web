 
import React from "react";
import { ReactDOM } from "react";

 function Footer(){
    return(
        ReactDOM.createPortal(

        
    
            <div>
                <h2>this is footer</h2>
            </div>,
            document.getElementById('footer')
        )
     

    )
    
    
}

export default Footer;