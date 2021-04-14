function login() {
  var myHeaders = new Headers();


  var formdata = new FormData();
  formdata.append("username", document.getElementById("inputEmail").value);
  formdata.append("password", document.getElementById("inputPassword").value);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
    mode: "no-cors"
  };

  fetch("http://localhost:8080/prochild/login", requestOptions)
    .then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
        swal.fire({
          icon: "error",
          title: "Erro",
          text: "Falha ao efetuar Login"
        })
      } else {
        swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Login efetuado com sucesso"
        }).then(function () {
          window.location.href = './MenuPrincipal.html';
        })
      }
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function recuperarPassword() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var data = {};
  data.username = document.getElementById("inputUsername").value,
    data.email = document.getElementById("inputEmail").value

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/prochild/email", requestOptions)
    .then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
        swal.fire({
          icon: "error",
          title: "Erro",
          text: "Username e Email não coincidem"
        })
      } else {
        swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Password de recuperação enviada para o seu email " + data.email
        })
      }
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}