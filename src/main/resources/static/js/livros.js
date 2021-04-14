let livros;
let imgFile;
let pdfFile;
window.addEventListener("load", function () {
  document.getElementById("file").onchange = function (event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      imgFile = reader.result;
    }
  }
});
window.addEventListener("load", function () {
  document.getElementById("filePdf").onchange = function (event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      pdfFile = reader.result;
    }
  }
});

function getId(ze) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = ze.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

function saveLivro() {
  let data = {};
  data.nome = document.getElementById("inputName").value;
  data.descricao = document.getElementById("inputDesc").value;
  data.capa = imgFile;
  data.link = pdfFile;
  data.video = getId(document.getElementById("inputLinkVideo").value);
  var myHeaders = new Headers();
  //myHeaders.append("Cookie", "JSESSIONID=B082F7E7ABE2EBF64420BBAB600DF404");
  myHeaders.append("Content-Type", "application/json");


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/prochild/livros", requestOptions)
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
          text: "Livro inserido com sucesso"
        }).then(function () {
          window.location.href = "./MenuLivros.html";
        })

      }
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}



function fetchLivros() {
  async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/livros`);
    livros = await response.json()
    console.log(livros);
    showLivros();

  }
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}

fetchLivros();

function showLivros() {
  let table = ``;
  let model = ``;
  for (i = 0; i < livros.length; i++) {

    table = table + `<div class="col-lg-4 col-sm-6 mb-4">
    <div class="portfolio-item" align="center">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i}">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="${livros[i].capa}" alt="" />
      </a>
      <div class="portfolio-caption">
        <div class="portfolio-caption-heading">${livros[i].nome}</div>
      </div>
      <a class="btn btn-primary" onclick="deleteLivros(${livros[i].id}, '${livros[i].nome}')" style="display: none" name="editingbtn"><i class="far fa-trash-alt"></i></a>
    </div>
  </div>`;

    let video = ``
    if (livros[i].video !== null) {
      video = video + `<iframe width="560" height="315" src="https://www.youtube.com/embed/${livros[i].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else {
      video = video + `<div>
          <img class="img-fluid d-block mx-auto" style="height: 200px; width: 200px; object-fit: contain" src="${livros[i].capa}" alt="" />
      </div>`;
    }




    model = model + `<div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <h2 class="text-uppercase">${livros[i].nome}</h2>
                <p class="item-intro text-muted">
                  ${livros[i].descricao}
                </p>
                <div class="iframe-container">
                 ${video}
                </div>
                <br>
                <div align="center">
                <iframe src="${livros[i].link}" class="responsive" style="width:800px; height:700px;" frameborder="0"></iframe>
                </div>
                <p></p>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times mr-1"></i>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("divLivros").innerHTML = table;
  document.getElementById("divModelsLivros").innerHTML = model;
}


function deleteLivros(id, nome) {
  swal.fire({
    icon: "warning",
    title: "Concluir",
    text: "Deseja apagar o livro: " + nome + " ?",
    showCancelButton: true,
    confirmButtonText: 'Sim, apagar!',
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      var requestOptions = {
        method: 'DELETE',
      };

      //selecionar o id do jogo selecionado
      fetch(`http://localhost:8080/prochild/livros/${id}`, requestOptions)
        .then(function (response) {
          if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            swal.fire({
              icon: "error",
              title: "Erro",
              text: "Falha ao eliminar livro " + nome
            })
          } else {
            swal.fire({
              icon: "success",
              title: "Sucesso",
              text: "Livro " + nome + "apagado com sucesso"
            }).then(function () {
              window.location.href = "./MenuLivros.html";
            })
          }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  })
}