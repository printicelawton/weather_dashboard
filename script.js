const key = '4e2f0bca6c645b82db8a9da4588af870'
const formEl = document.querySelector('form');
const details = document.querySelector('.details');

formEl.addEventListener('submit',(e) => {
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
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${location},{state code}&appid=${key}`;
    const res = await fetch(baseURL);
    const data = await res.json();
    console.log(data)
    return data;
}

function generateHTML(_data){
    const html = `
    <h1 class="temp">30</h1>
    <h1 class="status">Cloudy</h1>
    <div class="more-info">
        <p>info-1</p>
        <p>info-2</p>
        <p>info-3</p>
        <p>info-4</p>
    </div>`;
    details.innerHTML = html;
}
















// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={4e2f0bca6c645b82db8a9da4588af870}