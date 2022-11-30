// 4c8e5fe2e56f232a00ed92923aa50e78

// ZQWZR7YVRKD5RNDH9NV4LH584

async function fetchData() {
    let access_key = document.getElementById("access_token").value
    let location = document.getElementById("location").value
    
    if(access_key ==='' || location===''){
    
        return false
    }
    const url =  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${access_key}&contentType=json`
    
    let data = await fetch(url)
    // console.log(data);
    try{
    data = await data.json();    
    }
    catch{
    return data;
    }
    return data
}

async function displayData() {
    
    let data = await fetchData()
    // console.log(data);

    let details = '';
    if(data === false){
        document.getElementById("wheather_details").innerHTML = "location and API key cannot be empty!";
        document.getElementById("wheather_details").style.paddingLeft = "50px";
    }
    else if(data.ok===false){
        document.getElementById("wheather_details").innerHTML = "no result found";
        document.getElementById("wheather_details").style.paddingLeft = "50px";
        
    }
    else{
    details = `
                <div>Location: ${data.address}</div>
                <div style = "">
                    <div> Lat: ${data.latitude}</div>
                    <div> Long: ${data.longitude}</div>
            
                </div>
                <div>TimeZone: ${data.tzoffset}</div>
                <div>Wind Speed: ${data.currentConditions.windspeed}</div>
                <div>Pressure: ${data.currentConditions.pressure}</div>
                <div>Humidity: ${data.currentConditions.humidity}</div>
                <div>Wind Direction: ${data.currentConditions.winddir}</div>
                <div>UV Index: ${data.currentConditions.uvindex}</div>
                <div>Feels Like: ${data.currentConditions.feelslike}</div>
                `

    document.getElementById("wheather_details").innerHTML = details;
                
}
}
