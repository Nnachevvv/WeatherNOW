const fetch = require("node-fetch");

function getCityByName(name)
{
    let jsonVar ;
        const URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c0eb8f9a895b4018b02104946192010&q=${name}&format=json&includelocation=yes`;
    fetch(URL)
        .then(res =>{
            return res.json()
        }).then(json =>
         {
            //console.log(data);
            extractDataFromJson(json);
         });
}

function extractDataFromJson(json) {
    let city = json.data.request[0].query;
    let temp = json.data.current_condition[0].temp_C;
    console.log(temp);
}


function getCityIp(ip)
{
    let userIp = ip.ip;
    console.log(userIp);
    const URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c0eb8f9a895b4018b02104946192010&q=${userIp}&format=json&includelocation=yes`;
    fetch(URL)
        .then(res => res.json())
        .then(json => console.log(json.data));
}


function getCurrentIP()
{
    fetch('https://api.ipify.org/?format=json')
        .then(res => res.json())
        .then((out) => {
            getCityIp(out);
        });
}
let print = getCityByName("Sofia");
