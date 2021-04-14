let forum;
let messages;
let isAdmin = false;
let answerFunction = "answer";
function pagAdmin() {
    isAdmin = true;
   
}

function isChild() {
    if(localStorage.getItem("type") === "Child"){
        document.getElementById("btnAddDiscuss").setAttribute("onclick", "addDiscussChild()");
        answerFunction = "answerChild";
    }
}

function isMobile() {
    var check = false;
    (function(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);console.log(check);
    return check;
    
  }
  
isMobile();
function addDiscuss() {
    let data = {};
    data.nome = document.getElementById("novaDiscussaoTitulo").value;
    data.descricao = document.getElementById("novaDiscussaoTexto").value;
    data.usersId = "1";
    console.log(data);
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
                    window.location.href = "./MenuForum.html";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function addDiscussChild() {
    let data = {};
    data.nome = document.getElementById("novaDiscussaoTitulo").value;
    data.descricao = document.getElementById("novaDiscussaoTexto").value;
    console.log(data);
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
                    window.location.href = "./MenuForum.html";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}

function answer(topico) {
    let data = {};
    data.conteudo = document.getElementById("novaMensagem").value;
    data.usersId = "1";
    data.topicosId = topico;
    console.log(data);
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
                    window.location.href = "./MenuForum.html";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function answerChild(topico) {
    let data = {};
    data.conteudo = document.getElementById("novaMensagem").value;
    data.topicosId = topico;
    console.log(data);
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
                    window.location.href = "./MenuForum.html";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function fetchForum() {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/topicos`);
        forum = await response.json()
        console.log(forum);
        console.log(forum.length);
        if (isAdmin) {
            document.getElementById("totalTopicos").innerHTML = forum.length;
        }
        else {
            show();
        }
    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}

function fetchMessages() {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/mensagens`);
        messages = await response.json()
        console.log(messages);
        console.log(messages.length);
        console.log(isAdmin);
        /*if(isAdmin){
            document.getElementById("totalTopicos").innerHTML = messages.length;
            console.log("ola0");
        }
        else{*/
        reloadSame();
        //}

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
            console.log("ola"); 
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
        console.log(forum[r].descricao);
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
    console.log(messages);
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
    console.log(id);
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
    console.log(id);
    //selecionar o id do jogo selecionado
    for (let i = 0; i < messages.length; i++) {
        let message = messages[i].topicosId.id;
        if (message == id) {
            fetch(`http://localhost:8080/prochild/mensagens/${messages[i].id}`, requestOptions)
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

    fetch(`http://localhost:8080/prochild/topicos/${params}`, requestOptions)
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
                    text: "Tópico " + params + "apagado com sucesso"
                }).then(function () {
                    window.location.href = "./MenuForum.html";
                })
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
