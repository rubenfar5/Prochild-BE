function saveFamilia() {
    var data = {};
    data.username = document.getElementById("usernameFamily").value;
    let password = document.getElementById("PwdFamily").value;
    let repPwd = document.getElementById("PwdFamily2").value;
    data.email = document.getElementById("mailFamily").value;
    data.tipo = "family";
    data.nome = document.getElementById("nameFamily").value;
    if (document.getElementById("inlineRadio1").checked) {
        data.sexo = document.getElementById("inlineRadio1").value;
    }
    else if (document.getElementById("inlineRadio2").checked) {
        data.sexo = document.getElementById("inlineRadio2").value;
    }
    data.concelho = document.getElementById("countyFamily").value;
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
                        window.location.href = "./LoginFamilias.html";
                    })
                console.log("Success POST");
                console.log(response);
            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function editDataFamily() {
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
            pass = password;

            //nestas tem de ser o id do UsersId
            fetch(`http://localhost:8080/prochild/users/1?password=${pass}`, requestOptions)
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
                            window.location.href = "./DadosPerfil.html";
                        })

                    }
                })
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }


    fetch(`http://localhost:8080/prochild/users/familias/1?concelho=${document.getElementById("inputConcelho").value}&nome=${document.getElementById("inputNome").value}`, requestOptions)
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
                    text: "Dados ao alterar dados"
                }).then(function () {
                    window.location.href = "./DadosPerfil.html";
                })

            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    //nestas tem de ser o id do UsersId
    fetch(`http://localhost:8080/prochild/users/1?email=${document.getElementById("inputEmail").value}`, requestOptions)
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
                    window.location.href = "./DadosPerfil.html";
                })

            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function fetchFamilia(/*id*/) {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/users/familias/1`);
        var data = await response.json();
        document.getElementById("inputNome").setAttribute("value", data.nome);
        document.getElementById("inputEmail").setAttribute("value", data.usersId.email);
        document.getElementById("inputConcelho").setAttribute("value", data.concelho);
        document.getElementById("inputUsername").setAttribute("value", data.usersId.username);
        console.log(data.usersId.password);

        //document.href = "#detalhes-denuncias";
    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}