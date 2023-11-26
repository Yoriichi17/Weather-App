import React, { useEffect, useState } from 'react'
import Crad from './Crad'
import { setFunction } from './icons';
import Boxone from './Boxone'


function Main() {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("");
    const [icon,setIcon] = useState("");
    console.log(search) 
    
    useEffect(() => {
        async function getData() {
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=212820b06b1576f8869e53075aac0cd0`;
            try {
                let response = await fetch(api) 
               
                let data = await response.json();
                console.log(data);
                setCity(data)
                if(data?.name){
                    setIcon(data.weather[0].icon)
                }
            }
            catch (err) {  
                console.log("City not found : ", err.message);
            }
        }
        
            
            getData();
          
         
    },[search]);

    
    console.log(city);
  return (
    <div className='all-ele'>
        <header>
            <h1 id='head'>WEATHER REPORT</h1>
        </header>
        <div>
            <input id='search-bar' type="search" placeholder='Search City'
            onChange={(e) => setSearch(e.target.value)}/>
           
            
        </div>
        {
            city?.name ? (<Crad search={search} city = {city} url={setFunction(icon)}/>) 
            :  <div> <h1>  </h1> <Boxone/> </div>
           
        }
        
   
        
    </div>
  )
}

export default Main