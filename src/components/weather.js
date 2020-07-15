import React from "react"

// function celsius()
const Weather = (props)=>{
    return(
       <div className="container text-center">
           <div className="cards">
                <h1 className="container">{props.city}, {props.country}</h1>
                <i className={`fas ${props.weathericons} display-1 py-3`}></i>
                <h2 className="py-1">{props.main}&deg;C</h2>
                {minmaxTemp(props.min,props.max)}
                <h3 className="py-1">{props.description}</h3>
           </div>
       </div>   
    )
}

function minmaxTemp(min, max){
    return(
        <h3>
            <span  className="px-4">{min}&deg;</span>
            <span className=" px-4">{max}&deg;</span>
        </h3>
        
    );
}
export default Weather