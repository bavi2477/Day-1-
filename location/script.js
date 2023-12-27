const URL ="https://restcountries.com/v3.1/all";

const request = new XMLHttpRequest();

request.open("GET", URL);
request.send();

request.onload = () => {

    const data = JSON.parse(request.response);
    for(let ind = 0; ind < data.length; ind++){
       
        const output = data[ind].capital + ' ' + data[ind].region + ' ' + data[ind].subregion + ' ' + data[ind].population;
        console.log(output);

    }
}