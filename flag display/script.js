const URL ="https://restcountries.com/v3.1/all";

const request = new XMLHttpRequest();

request.open("GET", URL);
request.send();

request.onload = () => {

    const data = JSON.parse(request.response);

    for(let ind = 0; ind < data.length; ind++){
        console.log(data[ind].flags.png);
    }
}