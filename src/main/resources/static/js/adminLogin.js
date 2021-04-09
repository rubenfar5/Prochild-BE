function pila() {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("username", document.getElementById("email").value);
urlencoded.append("password", document.getElementById("password").value);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded
};

fetch("http://localhost:8080/prochild/login", requestOptions)
  .then(function (response) {
    if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
    } else {
        console.log("Success POST");
        console.log(response);
        window.location.href = "/prochild/menu";
    }
  })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  }
