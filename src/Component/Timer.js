import React from "react";
import Countdown from 'react-countdown';
const Timer = () =>{
    return(     
        <div class="header">
        <h1 style={{fontsize:"150px", fontWeight:"bold"}} class="ps-section__title">Best Deals of <span style={{fontsize:"150px", color:"rgb(251, 139, 53)",fontWeight:"bold"}}class="spatal-main-title"> the Day!</span>  <span class="countdown">
            <Countdown  date={Date.now() + 5554763000}>
             </Countdown>
        </span></h1>

    </div>
        )
        
}
export default Timer;