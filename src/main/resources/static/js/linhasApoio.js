let linhas;

let fileContent;
window.addEventListener("load", function () {
  document.getElementById("file").onchange = function (event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      fileContent = reader.result;
      console.log(fileContent);
    }
  }
});

function saveLinha() {
  let data = {};
  data.nome = document.getElementById("nomeLinha").value;
  data.contacto = document.getElementById("contactoLinha").value;
  data.imagem = fileContent;
  data.link = document.getElementById("inputSite").value;

  console.log(data);

  var myHeaders = new Headers();
  //myHeaders.append("Cookie", "JSESSIONID=B082F7E7ABE2EBF64420BBAB600DF404");
  myHeaders.append("Content-Type", "application/json");


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/prochild/linhasapoio", requestOptions)
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
          text: "Livro inserido com sucesso"
        }).then(function () {
          window.location.href = "./MenuLinhasApoio.html";
        })
      }
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}

function fetchLinhas() {
  async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/linhasapoio`);
    linhas = await response.json()
    console.log(linhas);
    showLinhas();

  }
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}

function showLinhas() {
  let code = ``;
  let colors = ["#43bbc9", "#e5004e", "#f7be00"];
  let color = 0;
  for (i = 0; i < linhas.length; i++) {
    code = code + `<div class="col-lg-3 col-md-6 mb-4 ">
        <div class="card h-100">
          <img class="card-img-top" src="${linhas[i].imagem}" alt=""> <br>
          <p style="font-weight: bold; font-size:15px; color: ${colors[color]}" class="">${linhas[i].nome}</p>
          <p style="font-weight: bold; font-size:15px; color: ${colors[color]}" class="">${linhas[i].contacto}</p>
          <a href="${linhas[i].link}" target="_blank"> <i class="fas fa-globe fa-3x"></i></a>
          <br>
          <a class="btn btn-primary" onclick="deleteLinha(${linhas[i].id}, '${linhas[i].nome}')" style="display: none" name="editingbtn"><i class="far fa-trash-alt"></i></a>
        </div>
      </div>`;
    color++;
    if (color > 2) {
      color = 0
    }
  }
  document.getElementById("sitioLinhas").innerHTML = code;
}

function deleteLinha(id, nome) {
  swal.fire({
    icon: "warning",
    title: "Concluir",
    text: "Deseja apagar a linha: " + nome + " ?",
    showCancelButton: true,
    confirmButtonText: 'Sim, apagar!',
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      var requestOptions = {
        method: 'DELETE',
      };

      //selecionar o id do jogo selecionado
      fetch(`http://localhost:8080/prochild/linhasapoio/${id}`, requestOptions)
        .then(function (response) {
          if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            swal.fire({
              icon: "error",
              title: "Erro",
              text: "Falha ao eliminar linha " + nome
            })
          } else {
            console.log("Success POST");
            console.log(response);
            swal.fire({
              icon: "success",
              title: "Sucesso",
              text: "Linha " + nome + "apagada com sucesso"
            }).then(function () {
              window.location.href = "./MenuLinhasApoio.html";
            })
          }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  })
}