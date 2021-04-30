let forum;
let messages;
let answerFunction = "answer";
let isItAdmin = false;
function checkAdminPag() {
    isItAdmin = true;
}

function isChild() {
    if(localStorage.getItem("type") === "Child"){
        document.getElementById("btnAddDiscuss").setAttribute("onclick", "addDiscussChild()");
        answerFunction = "answerChild";
    }
}


function addDiscuss() {
    let data = {};
    data.nome = document.getElementById("novaDiscussaoTitulo").value;
    data.descricao = document.getElementById("novaDiscussaoTexto").value;

    if (data.nome === "" || data.descricao === "") {
    swal.fire({
    icon: "error",
    title: "Erro",
    text: "Preencha todos os campos"
    }).then(function () {
        return false;
                          });
    }else{
    data.usersId = localStorage.getItem("loggedIn");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("http://localhost:8080/prochild/topicos", requestOptions)
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
                console.log("Success POST");
                console.log(response);
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Discussão inserida com sucesso"
                }).then(function () {
                    window.location.href = "/menuForum";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        }
}

function addDiscussChild() {
    let data = {};
    data.nome = document.getElementById("novaDiscussaoTitulo").value;
    data.descricao = document.getElementById("novaDiscussaoTexto").value;
    if (data.nome === "" || data.descricao === "") {
        swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha todos os campos"
        }).then(function () {
            return false;
                              });
        }else{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("http://localhost:8080/prochild/topicos/child", requestOptions)
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
                console.log("Success POST");
                console.log(response);
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Discussão inserida com sucesso"
                }).then(function () {
                    window.location.href = "/menuForum";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
}

function answer(topico) {
    let data = {};
    data.conteudo = document.getElementById("novaMensagem").value;
    if (data.conteudo === "") {
        swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha todos os campos"
        }).then(function () {
            return false;
                              });
        }else{
    data.usersId = localStorage.getItem("loggedIn");
    data.topicosId = topico;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("http://localhost:8080/prochild/mensagens", requestOptions)
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
                console.log("Success POST");
                console.log(response);
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Resposta inserida com sucesso"
                }).then(function () {
                    window.location.href = "/menuForum";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        }
}

function answerChild(topico) {
    let data = {};
    data.conteudo = document.getElementById("novaMensagem").value;
    if (data.conteudo === "") {
            swal.fire({
            icon: "error",
            title: "Erro",
            text: "Preencha todos os campos"
            }).then(function () {
                return false;
                                  });
            }else{
    data.topicosId = topico;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("http://localhost:8080/prochild/mensagens/child", requestOptions)
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
                console.log("Success POST");
                console.log(response);
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Resposta inserida com sucesso"
                }).then(function () {
                    window.location.href = "/menuForum";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        }
}


function fetchForum() {
    async function fetchAsync() {
        const response = await fetch("http://localhost:8080/prochild/topicos");
        forum = await response.json();
        if (isItAdmin) {
            document.getElementById("totalTopicos").innerHTML = forum.length;
        }else {
            show();
        }
    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}

function fetchMessages() {
    async function fetchAsync() {
        const response = await fetch("http://localhost:8080/prochild/mensagens");
        messages = await response.json();
        reloadSame();

    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}

function show() {
    let tab = ` <thead>
    <th>
        Nome
    </th>
    <th>
        Autor
    </th>
    <th>

    </th>
</thead>`;

    // Loop to access all rows
    for (let r = 0; r < forum.length; r++) {
        let owner;
        let idOwner;
        if(forum[r].usersId === null){
            owner = "Criança";

            idOwner = "crianca";
        }else {
            owner = forum[r].usersId.username;
            idOwner = forum[r].usersId.id;
        }
        tab += `<tbody>
      <tr>
          <td>
              ${forum[r].nome}
          </td>
          <td>
              ${owner}
          </td>
          <td>
              <a onclick="showDetail(${forum[r].id}, '${forum[r].nome}', '${forum[r].descricao}'); "><i class="fas fa-search-plus"></i> </a>
              <a name="garbage" id="${idOwner}" style="display: none;" onclick="deleteMessage(${forum[r].id});"><i class="far fa-trash-alt"></i> </a>
          </td>

      </tr>
  </tbody>`;

    }
    // Setting innerHTML as tab variable
    document.getElementById("discussTable").innerHTML = tab;

    garbage();
}
function showDetail(id, title, descricao) {
    localStorage.setItem("titleMessage", title);
    localStorage.setItem("idMessage", id);
    localStorage.setItem("descMessage", descricao);
    document.getElementById("titulo").innerHTML = title;
    document.getElementById("sexaoMensagem").style.display = "";
    document.getElementById("descricao").innerHTML = descricao;
    let resp = `<thead>
    <th>
        Mensagem
    </th>
    <th>
        Autor
    </th>
</thead>
<tbody>`;

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].topicosId.id == id) {
            let owner;
        if(messages[i].usersId === null){
            owner = "Criança";
        }else {
            owner = messages[i].usersId.username;
        }
            resp += `
            <tr>
                <td>
                ${messages[i].conteudo}
                </td>
                <td>
                ${owner}
                </td>
            </tr>
       `;
        }
    }
    resp += `</tbody>`;
    document.getElementById("messageTable").innerHTML = resp;
    document.getElementById("btnSendAnswer").setAttribute("onclick", `${answerFunction}(${id})`);
    window.location.href = "#messageTable";
}

function reloadSame() {
    if (localStorage.hasOwnProperty("titleMessage") && localStorage.hasOwnProperty("idMessage")) {
        showDetail(localStorage.getItem("idMessage"), localStorage.getItem("titleMessage"), localStorage.getItem("descMessage"));
    }
}


function deleteMessage(id) {
    var requestOptions = {
        method: 'DELETE',
    };
    //selecionar o id do jogo selecionado
    for (let i = 0; i < messages.length; i++) {
        let message = messages[i].topicosId.id;
        if (message == id) {
            fetch("http://localhost:8080/prochild/mensagens/" + messages[i].id, requestOptions)
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
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }
    deleteForum(id);

}

function deleteForum(params) {
    var requestOptions = {
        method: 'DELETE',
    };

    fetch("http://localhost:8080/prochild/topicos/" + params, requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Falha ao eliminar Tópico " + params
                })
            } else {
                console.log("Success POST");
                console.log(response);
                localStorage.removeItem("idMessage");
                localStorage.removeItem("titleMessage");
                localStorage.removeItem("descMessage");
                swal.fire({
                    icon: "success",
                    title: "Sucesso",
                    text: "Tópico " + params + " apagado com sucesso"
                }).then(function () {
                    window.location.href = "/menuForum";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}