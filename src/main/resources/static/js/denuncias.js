
let isAdmin = false;

function pagAdmin() {
    isAdmin = true;
    console.log("é a pag admin");
}

//funcao que faz get de todas as denuncias e coloca na tabela
const api_url = "http://localhost:8080/prochild/denuncias";

// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    console.log(data.length);
    if (isAdmin) {
        document.getElementById("totalDenuncias").innerHTML = data.length;
    }

    if (response) {
        //hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById("loading").style.display = "none";
}

// Function to define innerHTML for HTML table
function show(data) {
    let tab = `<tr><th>Nº de denuncia</th> <th>Descrição</th>  <th></th></tr>`;

    // Loop to access all rows
    for (let r of data) {
        tab += `<tr><td>${r.id} </td> <td>${r.acontecimento}</td> <td><a class="btn" onclick = "showDetails(${r.id})"><i class="fas fa-search-plus"></i></a></td></tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("dataTable").innerHTML = tab;
}


//Aqui o fetch das informacoes!!
function showDetails(id) {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/denuncias/${id}`);
        var data = await response.json();
        window.location.href = "#detalhes-denuncias";
        var d = new Date(data.data);
        var mes = d.getMonth() + 1;
        let de = (d.getDate() + "/" + mes + "/" + d.getFullYear());
        document.getElementById("idDenuncia").setAttribute("value", data.id);
        document.getElementById("descricaoDenuncia").setAttribute("value", data.acontecimento);
        document.getElementById("dataDenuncia").setAttribute("value", de);
        document.getElementById("localDenuncia").setAttribute("value", data.localizacao);
        let idade;
        if (data.criancasId.faixa_etaria == 1) {
            idade = "3-6";
        }
        else if (data.criancasId.faixa_etaria == 2) {
            idade = "6-9";
        }
        else if (data.criancasId.faixa_etaria == 3) {
            idade = "9-12";
        }
        else if (data.criancasId.faixa_etaria == 1) {
            idade = "12-15";
        }
        document.getElementById("idadeDenuncia").setAttribute("value", idade);
        document.getElementById("sexoDenuncia").setAttribute("value", data.criancasId.sexo);


        console.log(data.localizacao);

        document.href = "#detalhes-denuncias";
    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}

let localizacao;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    localizacao = position.coords.latitude + "," + position.coords.longitude;
}

getLocation();

function saveDenuncia() {
    var data = {};
    data.sexo = localStorage.getItem("gender");
    data.faixa_etaria = localStorage.getItem("age");
    data.localizacao = localizacao;
    data.acontecimento = document.getElementById("acontecimento").value;


    console.log(data); //debugging para ver os dados que foram enviados

    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/prochild/denuncias',
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
                console.log("Success POST");
                console.log(response);
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Denúncia inserida com sucesso"
                });
            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function postDenuncia1() {
    var data = {};
    data.sexo = localStorage.getItem("gender");
    data.faixa_etaria = localStorage.getItem("age");
    data.localizacao = localizacao;
    data.acontecimento = "Violência verbal entre Pais";


    console.log(data); //debugging para ver os dados que foram enviados

    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/prochild/denuncias',
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
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Denúncia enviada com sucesso"
                });
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

function postDenuncia2() {
    var data = {};
    data.sexo = localStorage.getItem("gender");
    data.faixa_etaria = localStorage.getItem("age");
    data.localizacao = localizacao;
    data.acontecimento = "Violência física entre Pais";


    console.log(data); //debugging para ver os dados que foram enviados

    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/prochild/denuncias',
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
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Denúncia enviada com sucesso"
                });
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

function postDenuncia3() {
    var data = {};
    data.sexo = localStorage.getItem("gender");
    data.faixa_etaria = localStorage.getItem("age");
    data.localizacao = localizacao;
    data.acontecimento = "Violência com Filhos";


    console.log(data); //debugging para ver os dados que foram enviados

    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/prochild/denuncias',
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
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Denúncia enviada com sucesso"
                });
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