const key = 'c1a9a48ed6c08d5300c521cb4e7f1c42'
const formEl = document.querySelector('form');
const details = document.querySelector('.details');

formEl.addEventListener("submit",(e) => {
    e.preventDefault();
    details.innerHTML = '<h1>Loading...<h1>';
    const location = e.target.location.value;
    weatherApp(location);
});


async function weather(location){
    const data = await fetchAPI(location);
    // Function to generate HTML
    generateHTML(data);

}

async function weatherApp(location){
    const baseURL = `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${key}&query=${location}`;
    const res = await fetch(baseURL);
    const data = await res.json();
    console.log(data)
    return data;
}
//dynamically generate html from the generate html function ... not working
function generateHTML(data){
    const html = `
    <h1 class="temp">${data.current.temperature}°C</h1>
    <h1 class="status">${data.current.weather_descriptions.map(item => item).join(' ')}</h1>
    <div class="more-info">
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_speed}km/h</p>
        <p>Wind Direction: ${data.current.wind_dir}</p>
        <p>Pressure: ${data.current.pressure}MB</p>
    </div>
    <div class = "query">${data.request.query}</div>
    `;
   Element.details.innerHTML = html;

   };
















// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={4e2f0bca6c645b82db8a9da4588af870}