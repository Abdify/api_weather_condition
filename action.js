document.getElementById('searchBtn').addEventListener('click', () => {

    const apiLink = "http://api.openweathermap.org/data/2.5/weather";
    const apiKey = 'ad358a9a5ce0438101a43a680384cf3f';
    const userCity = document.getElementById('userCity').value;
    const url = `${apiLink}?q=${userCity}&units=metric&appid=${apiKey}`;
    console.log(userCity);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.main)
        document.getElementById('cityName').innerText = data.name;
        document.getElementById('temperature').innerText = data.main.temp;
        document.getElementById('sky').innerText = data.weather[0].description;
        switch(data.weather[0].description){
            case 'clear sky':
                document.getElementById('skyIcon').setAttribute('src', 'https://image.flaticon.com/icons/png/512/3032/3032746.png');
                break;
        }
    })
    .catch(error => {
        console.log(error);
        document.getElementById('cityName').innerText = 'No city found! try again letter.';
    });
})
