const key = '4e2f0bca6c645b82db8a9da4588af870'
const formEl = document.querySelector('form');
const details = document.querySelector('.details');

formEl.addEventListener('submit',(e) => {
    e.preventDefault();
    details.innerHTML = '<h1>Loading...<h1>';
})