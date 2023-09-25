const apiKey = "fb1367c5ae9c2b533769659939897af6";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=japan";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)
}

checkWeather()
