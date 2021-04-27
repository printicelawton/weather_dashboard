const key = '4e2f0bca6c645b82db8a9da4588af870'
const formEl = document.querySelector('form');
const details = document.querySelector('.details');

formEl.addEventListener('submit',(e) => {
    e.preventDefault();
    details.innerHTML = '<h1>Loading...<h1>';
    const location = e.target.location.value;
    weatherApp(location);
});


function weather(location){
    fetchAPI(location);
}

async function weatherApp(location){
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${location},{state code}&appid=${key}`
    const res = await fetch(baseURL);
    const data = await res.json();
    console.log(data)
}
















// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={4e2f0bca6c645b82db8a9da4588af870}