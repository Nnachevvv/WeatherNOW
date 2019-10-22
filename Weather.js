function extractDataFromJson(json) {
    let city = json.data.nearest_area[0].areaName[0].value;
    let country = json.data.nearest_area[0].country[0].value;
    let temp = json.data.current_condition[0].temp_C;
    document.getElementById("city").innerText = city+ " " + country;
}

async function getCity(value)
{
    const URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c0eb8f9a895b4018b02104946192010&q=${value}&format=json&includelocation=yes`;
    const response = await fetch(URL);
    const jsonValue = await response.json();
    console.log(jsonValue);
    extractDataFromJson(jsonValue);
}

async function getUserIp(){
    const response = await fetch('https://api.ipify.org/?format=json');
    const ip = await response.json();
    await getCity(ip.ip).catch(error => {
        console.error(error);
    });
}

getUserIp().catch(error => {
    console.error(error);
});