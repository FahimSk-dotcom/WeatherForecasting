const apiKey = "7cb5f038b48f8b347bacde5a02a19989";
async function getWeather() {
    let city = 'Mumbai';
    let Usercity = document.getElementById("city").value.toString();
    if(Usercity.trim()!=""){
        city=Usercity;
    }
    else{
        Usercity=city
    }
    const container = document.getElementById("weather");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        const name = result.name;
        const temp = result.main.temp;
        const weather = result.weather[0].description;
        const windSpeed = result.wind.speed;
        const humidity = result.main.humidity
        container.innerHTML = `                
                <p class="resultitems">Name: ${name}</p>
                <p class="resultitems">Temperature: ${temp}<sup>o</sup></p>
                <p class="resultitems">Humidity: ${humidity}</p>
                <p class="resultitems">Weather: ${weather}</p>
                <p class="resultitems">Wind Speed: ${windSpeed}</p>`
    } catch (error) {
        console.log(error);
        container.innerHTML = `                
                <p class="resultitems">Unable to get the Weather Please try after <br> sometime
                or  Check the name of city before <br> trying  again</p>
                `
    }

}
getWeather();