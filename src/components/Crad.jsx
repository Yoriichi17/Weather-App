import React from 'react'
import { BsGeoAlt } from "react-icons/bs";
import { LiaThermometerFullSolid } from "react-icons/lia";
import { AiFillInfoCircle } from "react-icons/ai";
function Crad({city,search,url}) {
  return (
    <main className='card'>
        <div className='card-body'>
          
           <header>
                <h1><BsGeoAlt id='locpin'/> {search}</h1>
                
            </header>
            <div className='sub-block'>
            <div>
                <img src={url} alt='imgg' width={300} height={300}/>
            </div>
           
           
            <div>
                {/* temperature */}
                <h2> <LiaThermometerFullSolid/>   Teamperauture : {city?.main?.temp}℃</h2>
                <p>(Feels like {city?.main?.feels_like}℃)</p>
                <h3><AiFillInfoCircle /> Weather Info : {city?.weather[0].description}</h3>
                <div className='sub'>
                    <span>Max Temp : {city?.main.temp_max}℃   </span>
                    <span>Min Temp : {city?.main.temp_min}℃</span>
                </div>
                <p>Humidity : {city?.main.humidity}</p>
            </div>

            </div>
           
        </div>
    </main>
  )
}

export default Crad