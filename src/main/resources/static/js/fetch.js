//---------------------funcao para fazer Post de utilizadores-----------------------------------------

function saveFamilia() {
  var data = {};
  data.username = document.getElementById("nameFamily").value;
  let password = document.getElementById("PwdFamily").value;
  let repPwd = document.getElementById("PwdFamily2").value;
  data.email = document.getElementById("mailFamily").value;
  data.tipo = "familia";
  data.nome = document.getElementById("nameFamily").value;
  if(document.getElementById("inlineRadio1").checked){
    data.sexo = document.getElementById("inlineRadio1").value;
  }
  else if(document.getElementById("inlineRadio2").checked){
    data.sexo = document.getElementById("inlineRadio2").value;
  }
  data.localizacao = "1111";
  data.concelho = document.getElementById("countyFamly");

  if(password === "" || repPwd === ""){
    return false;
  }
  else if(password !== repPwd){
    return false;
  }
  else{
    data.password = password;
  }

  console.log(data); //debugging para ver os dados que foram enviados

  //chamada fetch para envio dos dados para o servior via POST
  fetch('http://localhost:8080/prochild/users/familias',
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
      } else {
        console.log("Success POST");
        console.log(response);
      }
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      alert("Submission error");
      console.error(err);
    });
}

/*
function verImagem() {
  async function fetchAsync() {

  let response = await fetch('http://localhost:8080/prochild/livros', {
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    method: "GET"
  })
  let vari = await response.json();
  console.log(vari);
  /*const variavel = response.json();
  console.log(variavel);*/
  /*.then(res => res.json())
  .then((out) => {
    console.log(out[0]);
  })*/
  //console.log(users1);
  /*
    .then (res => res.Blob())
    .then(images => {
      // Then create a local URL for that image and print it
      outside = URL.createObjectURL(images)
      console.log(outside)
    console.log(res);
}
fetchAsync()
      .then((data) => console.log("ok"))

}
*/

function verImagem() {
  //let outside;
  fetch('http://localhost:8080/prochild/users/familias')
  .then(res => res.json())
  .then(data => console.log(data));
  /*.then(images => {
    // Then create a local URL for that image and print it
    outside = URL.createObjectURL(images)
    console.log(outside)
  })*/
  //.catch(console.error("Erro"))

  }
//----------------------------------------------------------------------------------------------------------------------
//funcao de login como user normal
function LoginAdmin() {
  var pila = {};
  pila.username = document.getElementById("inputEmail").value;
  pila.password = document.getElementById("inputPassword").value;

  if (pila.email == "" || pila.password == "") {
    document.getElementById("labelErro").style.display = "block";
    return false;
  }

  console.log(pila);
  fetch('http://localhost:8080/prochild/login', {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(pila),
  })
    /*.then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers

      } else {
        console.log("Success POST");
        console.log(response);

        //chama a funcao que faz o get dos dados
        //ToFetchLoginDataAdmin();
      }
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.error(err);
    });*/
    .then(res => res.json())
    .then(data => console.log(data));
}

//funcao que retorna os dados do admin
function ToFetchLoginDataAdmin() {
  async function fetchAsync() {
    var data1 = {};
    data1.email = document.getElementById("inputEmail").value;

    const renderUsers = document.getElementById("result");
    const response = await fetch(
      ``,
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data1),
      }
    );
    const users = await response.json();
    localStorage.setItem("tipo", users[0].tipo);

    window.location.href = "./Index.html";
  }
  //chama a função fetchAsync()
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}