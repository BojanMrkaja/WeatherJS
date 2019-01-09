document.getElementById('submiteWeather').addEventListener('click', getWeather);

function getWeather(e){
    e.preventDefault();

    const inputVal = document.getElementById('city').value;
    const apiKey = '1d35ffec5ac88d4247bbf4246529ec04';
    const alertDanger =  document.querySelector('.alert-danger');

    const xhr = new XMLHttpRequest();

    if(inputVal != ''){
        xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&APPID=${apiKey}`, true);

        xhr.onload = function(){
            if(this.status === 200){
                alertDanger.classList.remove('d-block');
                alertDanger.classList.add('d-none');
                console.log(this.responseText);
            }
        }
    
        xhr.send();
    }else{
        alertDanger.classList.remove('d-none');
        alertDanger.classList.add('d-block');
    }
}