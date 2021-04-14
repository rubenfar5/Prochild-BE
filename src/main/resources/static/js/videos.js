let videos /*= [
    ["fairyTails", 
    ["https://www.youtube.com/embed/Kymxpr32uVQ", "O gato das botas"],
    ["https://www.youtube.com/embed/PL_ZU0xcqi8", "O feiticeiro de Oz"], 
    ["https://www.youtube.com/embed/uxcrfaD3yq0", "O livro da selva"],
    ["https://www.youtube.com/embed/YQKM5T4X0kM","Os três porquinhos"],
    ["https://www.youtube.com/embed/_Xv3suV-PZQ", "O príncipe sapo"],
    ["https://www.youtube.com/embed/0LLZEvXP4KQ", "O patinho feio"]
    ],
    ["languages",
    ["https://www.youtube.com/embed/DR-cfDsHCGA", "Números em inglês"],
    ["https://www.youtube.com/embed/ybt2jhCQ3lA", "Cores em inglês"],
    ["https://www.youtube.com/embed/v5aVK0APPkU", "Animais em inglês"],
    ["https://www.youtube.com/embed/Q2CNDJysSu8", "Números em francês"],
    ["https://www.youtube.com/embed/DAjssWEquzM", "Cores em francês"],
    ["https://www.youtube.com/embed/hx6BJ9j1B3M", "Animais em francês"]
    ],
    ["diverse",
    ["https://www.youtube.com/embed/g1knSkH-Swg", "Lady Bug"],
    ["https://www.youtube.com/embed/RGImJxsnjX8", "Mickey Mouse"],
    ["https://www.youtube.com/embed/ZCNlQv6pyDg", "Nody"],
    ["https://www.youtube.com/embed/9MIQcDdDk7I", "Bob o construtor"],
    ["https://www.youtube.com/embed/yntso82TPO8", "Masha e o Urso"],
    ["https://www.youtube.com/embed/kE1lxvGFlnM", "Patrulha Pata"]
    ],
    ["gameplays",
    ["https://www.youtube.com/embed/0Ltse-yfne0", "RicFazeres Spider-man"],
    ["https://www.youtube.com/embed/8iWlhYexIUo", "RicFazeres Subnáutica"],
    ["https://www.youtube.com/embed/EtjHxuZ8a1s", "RicFazeres FIFA"],
    ["https://www.youtube.com/embed/JR0Xk8iW_aE", "Feromonas Minecraft"],
    ["https://www.youtube.com/embed/u-nQ93vDT5c","Feromonas Minecraft"],
    ["https://www.youtube.com/embed/HVlIMDm64MQ", "Sea3po AmongUs"]
    ]
]*/;
let tipo;
function showAddFormVideo(genero) {
  document.getElementById("formAdd").style.display = "";
  tipo = genero;
  window.location.href = "#formAdd"
}

function getId(ze) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = ze.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

function saveVideo() {
  let data = {};
  data.nome = document.getElementById("inputName").value;
  data.descricao = tipo;
  data.link = getId(document.getElementById("inputVideo").value);

  var myHeaders = new Headers();
  //myHeaders.append("Cookie", "JSESSIONID=B082F7E7ABE2EBF64420BBAB600DF404");
  myHeaders.append("Content-Type", "application/json");


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/prochild/videos", requestOptions)
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
          text: "Vídeo inserido com sucesso"
        }).then(function () {
          window.location.href = "./MenuVideos.html";
        })
      }
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}
function fetchVideos() {
  async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/videos`);
    videos = await response.json()
    console.log(videos);
    showVideos();

  }
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}


function showVideos() {
  let codef = ``;
  let codel = ``;
  let coded = ``;
  let codeg = ``;
  for (i = 0; i < videos.length; i++) {

    if (videos[i].descricao === "Contos de fada") {
      codef = codef + `<div class="col-lg-4 col-md-6 mb-4 justify-content-md-center">
          <p>${videos[i].nome}</p>
          <div class="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[i].link}"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
              </div>
              <br>
              <a class="btn btn-primary" onclick="deleteVideos(${videos[i].id}, '${videos[i].nome}')" style="display: none" name="editingbtn"><i class="far fa-trash-alt"></i></a>        
              </div>`;
    } else if (videos[i].descricao === "Linguas") {
      codel = codel + `<div class="col-lg-4 col-md-6 mb-4 justify-content-md-center">
          <p>${videos[i].nome}</p>
          <div class="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[i].link}"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
              </div>
              <br>
              <a class="btn btn-primary" onclick=deleteVideos(${videos[i].id}) style="display: none" name="editingbtn"><i class="far fa-trash-alt"></i></a>
        </div>`;
    } else if (videos[i].descricao === "Diversos") {
      coded = coded + `<div class="col-lg-4 col-md-6 mb-4 justify-content-md-center">
          <p>${videos[i].nome}</p>
          <div class="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[i].link}"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
             </div>
             <br>
             <a class="btn btn-primary" onclick=deleteVideos(${videos[i].id}) style="display: none" name="editingbtn"><i class="far fa-trash-alt"></i></a>
        </div>`;
    } else if (videos[i].descricao === "Games") {
      codeg = codeg + `<div class="col-lg-4 col-md-6 mb-4 justify-content-md-center">
          <p>${videos[i].nome}</p>
          <div class="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[i].link}"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
              </div>
              <br>
              <a class="btn btn-primary" onclick=deleteVideos(${videos[i].id}) style="display: none" name="editingbtn"><i class="far fa-trash-alt"></i></a>
        </div>`;
    }

  }
  document.getElementById("fairyTails").innerHTML = codef;
  document.getElementById("languages").innerHTML = codel;
  document.getElementById("diverse").innerHTML = coded;
  document.getElementById("gameplays").innerHTML = codeg;
}


function deleteVideos(id, nome) {
  swal.fire({
    icon: "warning",
    title: "Concluir",
    text: "Deseja apagar o video: " + nome + " ?",
    showCancelButton: true,
    confirmButtonText: 'Sim, apagar!',
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      var requestOptions = {
        method: 'DELETE',
      };

      //selecionar o id do jogo selecionado
      fetch(`http://localhost:8080/prochild/videos/${id}`, requestOptions)
        .then(function (response) {
          if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            swal.fire({
              icon: "error",
              title: "Erro",
              text: "Falha ao eliminar video " + nome
            })
          } else {
            swal.fire({
              icon: "success",
              title: "Sucesso",
              text: "Livro " + nome + "apagado com sucesso"
            }).then(function () {
              window.location.href = "./MenuVideos.html";
            })
          }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  })
}
