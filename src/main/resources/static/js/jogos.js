let jogos; /*= [
  {
    "nome": 'Jogo do Galo',
    "imagem": 'assets/img/portfolio/jogodogalo.jpg',
    "descricao": 'O "Jogo do Galo", também conhecido por três em linha, pode ser jogado com um papel e lápis por dois jogadores que alternadamente vão desenhando um X e um O numa grelha de tamanho 3 x 3. Ganha o jogador que primeiro conseguir alinhar três símbolos na vertical, na horizontal ou na diagonal.',
    "regras": '1º: Começa por arranjar: um lápis ou caneta; uma folha de papel\n2º: Desenha uma grelha #\n3º: Escolhe com que simbolo vais jogar (X ou O) e começa o jogo',
    "video": '<iframe width="560" height="315" src="https://www.youtube.com/embed/YSbKz66dwVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    "nome": 'Jogo da macaca',https://www.youtube.com/watch?v=sgn6yrOJFX0
    "imagem": 'assets/img/portfolio/jogomacaca4.jpg',
    "descricao": 'O jogo tradicional da macaca, também conhecido como jogo do pé coxinho, remonta ao tempo das nossas avós. Este jogo tradicional pode ser jogado com apenas duas crianças. Ideal para o ar livre, por exemplo, jardim ou recreio. Material: espaço amplo, desenho de macaca e uma patela para cada jogador (por exemplo uma pequena pedra).',
    "regras": '1º: Desenhar a macaca\n2º: Começa a diversão\nPara jogar, a criança atira a patela para a primeira casa e desloca-se até lá ao pé-coxinho apanhando a mesma e voltando para trás;\nEfectua o mesmo processo até chegar ao último patamar;\nNa casa 4 e 5 e 7 e 8 os dois pés devem ser colocados em simultâneo;\nDepois de saltar as últimas casas é necessário efectuar o percurso contrário.',
    "video": ''
  }
];*/
/*window.addEventListener("load", function() { 
  }); */
  function isMobile() {
    var check = false;
    (function(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    console.log(check);
    if(check){
      document.getElementById("pcOnly").remove;
    }
  }
  
isMobile();
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

function getId(ze) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = ze.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

function saveJogo() {
  let data = {};
  data.nome = document.getElementById("inputName").value;
  data.descricao = document.getElementById("inputDesc").value;
  data.regras = document.getElementById("inputRules").value;
  data.imagem = fileContent;
  data.video = getId(document.getElementById("inputVideo").value);

  var myHeaders = new Headers();
  //myHeaders.append("Cookie", "JSESSIONID=B082F7E7ABE2EBF64420BBAB600DF404");
  myHeaders.append("Content-Type", "application/json");


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/prochild/jogos", requestOptions)
    .then(function (response) {
      if (!response.ok) {
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
          window.location.href = "./MenuJogos.html";
        })
      }
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}



function fetchJogos() {
  async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/jogos`);
    jogos = await response.json()
    console.log(jogos);
    showJogos();

  }
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}

fetchJogos();

function showJogos() {
  let table = ``;
  let model = ``;
  for (i = 0; i < jogos.length; i++) {

    table = table + `<div class="col-lg-4 col-sm-6 mb-4">
          <div class="portfolio-item" align="center">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i}">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" style="height: 200px; width: 200px;" src="${jogos[i].imagem}" alt="" />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">${jogos[i].nome} </div>
              <a class="btn btn-primary" onclick="deleteJogo(${jogos[i].id}, '${jogos[i].nome}')" style="display: none" name="editingbtn"><i class="far fa-trash-alt"></i></a>
              <div class="portfolio-caption-subheading text-muted"></div>
            </div>
          </div>
        </div>`;


    let video = ``
    if (jogos[i].video !== null) {
      video = video + `<iframe width="560" height="315" src="https://www.youtube.com/embed/${jogos[i].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else {
      video = video + `<div>
            <img class="img-fluid d-block mx-auto" style="height: 200px; width: 200px; object-fit: contain" src="${jogos[i].imagem}" alt="" />
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
                    <!--Project Details Go Here-->
                    <h2 class="text-uppercase">${jogos[i].nome}</h2>
                    <p class="item-intro text-muted paragrafo">
                    ${jogos[i].descricao}
                    </p>
                    ${video} 
                    <br>
                    <p class="item-intro text-muted paragrafo">
                    Instruções:
                    ${jogos[i].regras}
                    </p>
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
  document.getElementById("divJogos").innerHTML = table;
  document.getElementById("divModelsJogos").innerHTML = model;
}

function deleteJogo(id, nome) {
  swal.fire({
    icon: "warning",
    title: "Concluir",
    text: "Deseja apagar o jogo: " + nome + " ?",
    showCancelButton: true,
    confirmButtonText: 'Sim, apagar!',
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      var requestOptions = {
        method: 'DELETE',
      };

      //selecionar o id do jogo selecionado
      fetch(`http://localhost:8080/prochild/jogos/${id}`, requestOptions)
        .then(function (response) {
          if (!response.ok) {
            swal.fire({
              icon: "error",
              title: "Erro",
              text: "Falha ao eliminar jogo " + nome
            })
          } else {
            swal.fire({
              icon: "success",
              title: "Sucesso",
              text: "Jogo " + nome + "apagado com sucesso"
            }).then(function () {
              window.location.href = "./MenuJogos.html";
            })
          }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  })
}