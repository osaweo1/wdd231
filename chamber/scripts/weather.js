
const key = '9bee080de17b5e909032950248c3560b'

const baseeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Benin City&units=metric&appid=${key}`

const getWeather=async()=>{
        const response=await fetch(baseeUrl)
        const data=await response.json()
        console.log(data)
        document.getElementById("temp").textContent = data.list[0].main.temp;
        document.getElementById("desc").textContent = data.list[0].weather[0].description;


        
        

        const forecastDiv = document.getElementById("forecast");

        for (let i = 0; i < 3; i++) {
            let day = data.list[i * 8]; // 24hr intervals
            const date = new Date(day.dt * 1000);
             const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
            
            let p = document.createElement("p");
            p.textContent = `${dayName}: ${day.main.temp}°C  Condition:${day.weather[0].description}`;
            forecastDiv.appendChild(p);
            console.log(forecastDiv)
        }
}


getWeather()