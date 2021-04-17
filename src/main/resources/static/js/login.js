
let dados = true;
let proceed = false;

function getDados() {
  async function fetchAsync() {
    const response = await fetch("http://localhost:8080/prochild/users/loggedIn");
    user = await response.json()
    console.log(user);
    localStorage.setItem("loggedIn", user.id);
    localStorage.setItem("type", user.tipo);
    if (localStorage.getItem("type") == "Family") {
    const response1 = await fetch("http://localhost:8080/prochild/users/familias/dados/" + user.id);
    familia = await response1.json();
    console.log(familia);
    localStorage.setItem("id", familia.id);
    }
    if (localStorage.getItem("type") == "Institution") {
    const response2 = await fetch("http://localhost:8080/prochild/users/instituicoes/dados/" + user.id);
    instituicao = await response2.json();
    localStorage.setItem("id", instituicao.id);
    localStorage.setItem("function", instituicao.funcao);
    }
  }
  fetchAsync()
  .then(function () {
            proceed = true;
          }).then(function(){

                    swal.fire({
                      icon: "success",
                      title: "Sucesso",
                      text: "Login efetuado com sucesso"
                    }).then(function () {
                      window.location.href = '/menuPrincipal';
                    })
                    })
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}


function login() {
  var myHeaders = new Headers();


  var formdata = new FormData();
  formdata.append("username", document.getElementById("inputEmail").value);
  formdata.append("password", document.getElementById("inputPassword").value);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/loginFamilia", requestOptions)
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
        getDados();
      }
    })

    .catch(error => console.log('error', error));
}

function recuperarPassword() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var data = {};
  data.username = document.getElementById("inputUsername").value;

function validateEmail(email){
            var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(email);
        }
    if(validateEmail(document.getElementById("inputEmail").value)){
        data.email = document.getElementById("inputEmail").value;

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
    }else{
        swal.fire({
        icon: "error",
        title: "Erro",
        text: "O email está errado!"
        }).then(function () {
                  return false;
                                    });
        }
}

