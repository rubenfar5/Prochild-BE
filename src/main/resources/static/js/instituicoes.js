function saveInstitution() {
  var data = {};
  data.username = document.getElementById("inputUsername").value;
  data.email = document.getElementById("exampleInputEmail").value;
  let password = document.getElementById("InputPwd").value;
  let repPwd = document.getElementById("InputPwd2").value;
  data.tipo = "institution";
  data.nome = document.getElementById("exampleFirstName").value;
  data.concelho = document.getElementById("InputConcelho").value;
  data.funcao = document.getElementById("InputFuncao").value;

  if (password === "" || repPwd === "") {
    return false;
  }
  else if (password !== repPwd) {
    return false;
  }
  else {
    data.password = password;
  }
  console.log(data); //debugging para ver os dados que foram enviados

  //chamada fetch para envio dos dados para o servior via POST
  fetch('http://localhost:8080/prochild/users/instituicoes',
    {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
        swal.fire({
          icon: "error",
          title: "Erro",
          text: "Falha de submissão"
        })
      } else {
        swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Instituição inserida com sucesso"
        }).then(function () {
          window.location.href = "./LoginInstituicoes.html";
        })

      }
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function editDataInstitution() {
  let password = document.getElementById("inputPassword").value;
  let repPwd = document.getElementById("inputConfirmarPasse").value;
  let pass;
  let btns = document.getElementsByName("pass");
  let isOn;
  for (n = 0; n < btns.length; n++) {
    isOn = btns[n].getAttribute("style");
  }
  console.log(isOn);

  var requestOptions = {
    method: 'PUT',
    redirect: 'follow'
  };

  if (isOn != "display: none;") {
    if (password === "" || repPwd === "") {
      return false;
    }
    else if (password !== repPwd) {
      return false;
    }
    else {
      console.log("ta a qui");
      pass = password;
      console.log(pass);
      //nestas tem de ser o id do UsersId
      fetch(`http://localhost:8080/prochild/users/2?password=${pass}`, requestOptions)
        .then(function (response) {
          if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            swal.fire({
              icon: "error",
              title: "Erro",
              text: "Falha de submissão"
            })
          } else {
            swal.fire({
              icon: "success",
              title: "Sucesso",
              text: "Password alterada com sucesso"
            }).then(function () {
              window.location.href = "./DadosPerfil.html";
            })

          }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  }

  //verificar confirmação password
  //colocar id da instituicao
  fetch(`http://localhost:8080/prochild/users/instituicoes/1?concelho=${document.getElementById("inputConcelho").value}&nome=${document.getElementById("inputNome").value}`, requestOptions)
    .then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
        swal.fire({
          icon: "error",
          title: "Erro",
          text: "Falha de submissão"
        })
      } else {
        swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Dados alterados com sucesso"
        }).then(function () {
          window.location.href = "./DadosPerfil.html";
        })

      }
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  //verificar confirmação password
  //colocar id do user
  fetch(`http://localhost:8080/prochild/users/2?email=${document.getElementById("inputEmail").value}`, requestOptions)
    .then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
        swal.fire({
          icon: "error",
          title: "Erro",
          text: "Falha de submissão"
        })
      } else {
        swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Dados alterados com sucesso"
        }).then(function () {
          window.location.href = "./DadosPerfil.html";
        })

      }
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function fetchInstituicao(/*id*/) {
  async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/users/instituicoes/1`);
    var data = await response.json();
    document.getElementById("inputNome").setAttribute("value", data.nome);
    document.getElementById("inputEmail").setAttribute("value", data.usersId.email);
    document.getElementById("inputConcelho").setAttribute("value", data.concelho);
    document.getElementById("inputUsername").setAttribute("value", data.usersId.username);
    document.getElementById("inputFuncao").setAttribute("value", data.funcao);

    console.log(data.usersId.password);
  }
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}
