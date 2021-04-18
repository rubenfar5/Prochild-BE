function saveFamilia() {
    var data = {};
    data.username = document.getElementById("usernameFamily").value;
    let password = document.getElementById("PwdFamily").value;
    let repPwd = document.getElementById("PwdFamily2").value;
    function validateEmail(email)
        {
            var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(email);
        }
    if(validateEmail(document.getElementById("mailFamily").value)){
        data.email = document.getElementById("mailFamily").value;
    }else{
    swal.fire({
    icon: "error",
    title: "Erro",
    text: "O email está errado!"
    }).then(function () {
              return false;
                                });
    }
data.sexo = "";
    data.tipo = "Family";
    data.nome = document.getElementById("nameFamily").value;
    if (document.getElementById("inlineRadio1").checked) {
        data.sexo = document.getElementById("inlineRadio1").value;
    }
    else if (document.getElementById("inlineRadio2").checked) {
        data.sexo = document.getElementById("inlineRadio2").value;
    }
    data.concelho = document.getElementById("countyFamily").value;
    if (password === "" || repPwd === "" || data.username === "" || data.nome === "" || data.sexo === "") {
    swal.fire({
    icon: "error",
    title: "Erro",
    text: "Preencha todos os campos"
    }).then(function () {
        return false;
                          });
    }
    else if (password !== repPwd) {
    swal.fire({
        icon: "error",
        title: "Erro",
        text: "Password e Confirmar Password não são iguais"
        }).then(function () {
                  return false;
                                    });
    }
    else {
        data.password = password;

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
                swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Falha de submissão"
                });
            } else {
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Conta criada com sucesso"
                })
                    .then(function () {
                        window.location.href = "/loginFamilias";
                    })
                console.log("Success POST");
                console.log(response);
            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
} }

function editDataFamily() {
    let password = document.getElementById("inputPassword").value;
    let repPwd = document.getElementById("inputConfirmarPasse").value;
    let pass;
    let btns = document.getElementsByName("pass");
    let isOn;
    let nome = document.getElementById("inputNome").value;
    let email = document.getElementById("inputEmail").value;
    let concelho = document.getElementById("inputConcelho").value;
    for (n = 0; n < btns.length; n++) {
        isOn = btns[n].getAttribute("style");
    }

    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };
if (nome === "" || concelho === "" || email === "") {
               swal.fire({
                   icon: "error",
                   title: "Erro",
                   text: "Preencha todos os campos"
                   }).then(function () {
                       return false;
                                         });
            }else {
    if (isOn != "display: none;") {
        if (password === "" || repPwd === "") {
           swal.fire({
               icon: "error",
               title: "Erro",
               text: "Preencha o campo Password e Confirmar Password"
               }).then(function () {
                   return false;
                                     });
        }
        else if (password !== repPwd) {
           swal.fire({
                   icon: "error",
                   title: "Erro",
                   text: "Password e Confirmar Password não são iguais"
                   }).then(function () {
                             return false;
                                               });
        }
        else {
            pass = password;

            //nestas tem de ser o id do UsersId
            fetch("http://localhost:8080/prochild/users/" + localStorage.getItem("loggedIn") + "?password=" + pass, requestOptions)
                .then(function (response) {
                    if (!response.ok) {
                        console.log(response.status); //=> number 100–599
                        console.log(response.statusText); //=> String
                        console.log(response.headers); //=> Headers
                        swal.fire({
                            icon: "error",
                            title: "Erro",
                            text: "Falha ao alterar password"
                        })
                    } else {
                        swal.fire({
                            icon: "success",
                            title: "Sucesso",
                            text: "Password alterada com sucesso"
                        }).then(function () {
                            window.location.href = "/dadosPerfil";
                        })

                    }
                })
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }else{


    fetch("http://localhost:8080/prochild/users/familias/"+ localStorage.getItem("id") + "?concelho=" + concelho + "&nome=" + nome , requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Falha ao alterar dados de perfil"
                })
            } else {
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Dados alterados com sucesso"
                }).then(function () {
                    window.location.href = "/dadosPerfil";
                })

            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    //nestas tem de ser o id do UsersId
    fetch("http://localhost:8080/prochild/users/" + localStorage.getItem("loggedIn") + "?email=" + email , requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Falha ao alterar email"
                })
            } else {
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Email alterado com sucesso"
                }).then(function () {
                    window.location.href = "/dadosPerfil";
                })

            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}}}

function fetchFamilia() {
    async function fetchAsync() {
        const response = await fetch("http://localhost:8080/prochild/users/familias/" + localStorage.getItem("id"));
        var data = await response.json();
        document.getElementById("inputNome").setAttribute("value", data.nome);
        document.getElementById("inputEmail").setAttribute("value", data.usersId.email);
        document.getElementById("inputConcelho").setAttribute("value", data.concelho);
        document.getElementById("inputUsername").setAttribute("value", data.usersId.username);

    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}