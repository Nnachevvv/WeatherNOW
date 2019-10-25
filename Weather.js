let weatherCode = {
    113: "images/weather_icons/weather-clear.png",
    116: "images/weather_icons/weather-few-clouds.png",
    119: "images/weather_icons/weather-clouds.png",
    122: "images/weather_icons/weather-none.png",
    143: "images/weather_icons/weather-mist.png",
    176: "images/weather_icons/weather-showers-day.png",
    179: "images/weather_icons/weather-snow.png",
    182: "images/weather_icons/weather-showers-day.png",
    185: "images/weather_icons/weather-snow-rain.png",
    200: "images/weather_icons/weather-storm.png",
    227: "images/weather_icons/weather-snow.png",
    230: "images/weather_icons/weather-big-snow.png",
    248: "images/weather_icons/weather-fog.png",
    260: "images/weather_icons/weather-fog.png",
    263: "images/weather_icons/weather-showers-day.png",
    266: "images/weather_icons/weather-showers-day.png",
    281: "images/weather_icons/weather-showers-day.png",
    284: "images/weather_icons/weather-showers-day.png",
    293: "images/weather_icons/weather-rain-day.png",
    296: "images/weather_icons/weather-rain-day.png",
    302: "images/weather_icons/weather-rain-day.png",
    305: "images/weather_icons/weather-showers-day.png",
    308: "images/weather_icons/weather-showers-day.png",
    311: "images/weather_icons/weather-showers-day.png",
    314: "images/weather_icons/weather-showers-day.png",
    317: "images/weather_icons/weather-snow-rain.png",
    320: "images/weather_icons/weather-snow-rain.png",
    323: "images/weather_icons/weather-snow.png",
    326: "images/weather_icons/weather-snow.png",
    329: "images/weather_icons/weather-snow.png",
    332: "images/weather_icons/weather-snow.png",
    335: "images/weather_icons/weather-snow.png",
    338: "images/weather_icons/weather-snow.png",
    350: "images/weather_icons/weather-snow.png",
    353: "images/weather_icons/weather-showers-day.png",
    356: "images/weather_icons/weather-showers-day.png",
    359: "images/weather_icons/weather-showers-day.png",
    362: "images/weather_icons/weather-showers-day.png",
    365: "images/weather_icons/weather-snow-rain.png",
    368: "images/weather_icons/weather-snow-rain.png",
    371: "images/weather_icons/weather-snow-rain.png",
    374: "images/weather_icons/weather-snow-rain.png",
    377: "images/weather_icons/weather-snow-rain.png",
    386: "images/weather_icons/weather-storm.png",
    389: "images/weather_icons/weather-storm.png",
    392: "images/weather_icons/weather-snow.png",
    395: "images/weather_icons/weather-snow.png",

};


function getWeatherDescription(json) {
    let weatherDescription = json.data.current_condition[0].weatherCode;
    document.getElementById("tempImg").src = weatherCode[weatherDescription];


}


function extractDataFromJson(json) {
    let city = json.data.nearest_area[0].areaName[0].value;
    let country = json.data.nearest_area[0].country[0].value;
    let temp = json.data.current_condition[0].temp_C;
    document.getElementById("city").innerText = city+ " " + country;
    document.getElementById("temperature").innerText = temp;

}


async function getCity(value)
{
    const URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c0eb8f9a895b4018b02104946192010&q=${value}&format=json&includelocation=yes`;
    const response = await fetch(URL);
    const jsonValue = await response.json();
    console.log(jsonValue);
    extractDataFromJson(jsonValue);
    getWeatherDescription(jsonValue);
}

async function getUserIp(){
    const response = await fetch('https://api.ipify.org/?format=json');
    const ip = await response.json();
    getCity(ip.ip).catch(error => {
        console.error(error);
    });
}

getUserIp().catch(error => {
    console.error(error);
});
