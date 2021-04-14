var slideIndex = 1;
var fotos1 = [
["assets/img/Direitos/menor18.png", "A criança é todo o ser humano com menos de dezoito anos.", "assets/audios/1.mp3"], 
["assets/img/Direitos/allchildren.png", "Todos os direitos se aplicam a todas as crianças sem exceção.", "assets/audios/2.mp3"],
["assets/img/Direitos/speaker.png", "Todas as decisões que digam respeito à criança devem ter em conta o seu interesse superior. ", "assets/audios/3.mp3"],
["assets/img/Direitos/4.png", "O Estado deve fazer tudo o que puder para aplicar os direitos acordados na Convenção. ", "assets/audios/4.mp3"],
["assets/img/Direitos/5.png", "Os direitos e responsabilidades dos pais na orientação da criança devem ser respeitados.", "assets/audios/5.mp3"],
["assets/img/Direitos/6.png", "Direito inerente à vida.", "assets/audios/6.mp3"],
["assets/img/Direitos/7.png", "O Estado deve assegurar a sobrevivência e desenvolvimento da criança.", "assets/audios/7.mp3"],
["assets/img/Direitos/8.png", "A criança tem direito a um nome desde o nascimento e a uma nacionalidade.", "assets/audios/8.mp3"],
["assets/img/Direitos/9.png", "O Estado deve proteger os aspectos fundamentais da identidade da criança. ", "assets/audios/9.mp3"],
["assets/img/Direitos/10.png", "Direito de viver com os seus pais e de manter contacto com eles caso haja separação.", "assets/audios/10.mp3"],
["assets/img/Direitos/11.png", "As crianças e os seus pais têm o direito de mudar de país para fins de reunificação.", "assets/audios/11.mp3"],
["assets/img/Direitos/12.png", "O Estado deve combater as deslocações e retenções ilegais de crianças no estrangeiro.", "assets/audios/12.mp3"],
["assets/img/Direitos/13.png", "Direito de exprimir livremente a sua opinião e que esta seja levada em consideração. ", "assets/audios/13.mp3"],
["assets/img/Direitos/14.png", "Direito de obter informações e dar a conhecer ideias e informações.", "assets/audios/14.mp3"],
["assets/img/Direitos/15.png", "Direito à liberdade de pensamento, consciência e religião.", "assets/audios/15.mp3"],
["assets/img/Direitos/16.png", "Direito de se reunir e de se juntar ou formar associações.", "assets/audios/16.mp3"],
["assets/img/Direitos/17.png", "Direito de ter a sua vida privada protegida, sem ofensas à sua honra e reputação.", "assets/audios/17.mp3"],
["assets/img/Direitos/18.png", "Ter acesso a diversas informações e materiais confiáveis e de diversas fontes.", "assets/audios/18.mp3"],
["assets/img/Direitos/19.png", "Direito a ter uma educação responsável proporcionada pelos pais.", "assets/audios/19.mp3"],
["assets/img/Direitos/20.png", "O Estado deve proteger a criança contra todas as formas de maus-tratos e negligência.", "assets/audios/20.mp3"],
["assets/img/Direitos/21.png", "O Estado deve assegurar proteção especial às crianças privadas do seu ambiente familiar.", "assets/audios/21.mp3"],
["assets/img/Direitos/22.png", "A adoção só poderá acontecer segundo o interesse superior da criança e com todas as autorizações necessárias.", "assets/audios/22.mp3"],
["assets/img/Direitos/23.png", "Deve ser dada proteção às crianças refugiadas ou que queiram obter o estatuto de refugiadas. ", "assets/audios/23.mp3"],
["assets/img/Direitos/24.png", "As crianças com deficiência têm direito a cuidados especiais, educação e formação adequados.", "assets/audios/24.mp3"],
["assets/img/Direitos/25.png", "Direito a ter o melhor estado de saúde possível e a beneficiar de serviços médicos. ", "assets/audios/25.mp3"],
["assets/img/Direitos/26.png", "As crianças institucionalizadas têm direito a uma revisão periódica da colocação na instituição. ", "assets/audios/26.mp3"],
["assets/img/Direitos/27.png", "Direito de beneficiar da segurança social e prestações sociais.", "assets/audios/27.mp3"],
["assets/img/Direitos/28.png", "Direito a um nível de vida adequado ao desenvolvimento físico, mental, espiritual, moral e social.", "assets/audios/28.mp3"],
["assets/img/Direitos/29.png", "Todas as crianças têm direito à educação e o ensino primário deve ser obrigatório e gratuito. ", "assets/audios/29.mp3"],
["assets/img/Direitos/30.png", "A educação deve promover o desenvolvimento da personalidade e aptidões mentais e físicas da criança.", "assets/audios/30.mp3"],
["assets/img/Direitos/31.png", "Direito de crianças pertencentes a povos indígenas ou minorias a ter a sua própria vida cultural.", "assets/audios/31.mp3"],
["assets/img/Direitos/32.png", "Direito ao repouso, a tempos livres e a participar em atividades culturais e artísticas.", "assets/audios/32.mp3"],
["assets/img/Direitos/33.png", "Direito à proteção contra trabalhos que ponham em perigo a saúde, educação ou desenvolvimento. ", "assets/audios/33.mp3"],
["assets/img/Direitos/34.png", "Direito de ser protegida da produção e contra o consumo de drogas.", "assets/audios/34.mp3"],
["assets/img/Direitos/35.png", "O Estado deve proteger a criança contra a violência e todas as formas de exploração.", "assets/audios/35.mp3"],
["assets/img/Direitos/36.png", "O Estado tem a obrigação de fazer tudo para impedir o rapto, venda ou tráfico de crianças.", "assets/audios/36.mp3"],
["assets/img/Direitos/37.png", "Nenhuma criança deve ser submetida à tortura, a penas cruéis nem à prisão ilegal. ", "assets/audios/37.mp3"],
["assets/img/Direitos/38.png", "Criança com menos de 15 anos não podem ser incorporadas nos exércitos nem em conflitos armados. ", "assets/audios/38.mp3"],
["assets/img/Direitos/39.png", "Crianças vítimas de conflitos armados ou exploração devem beneficiar de cuidados adequados.", "assets/audios/39.mp3"],
["assets/img/Direitos/40.png", "Crianças culpadas de terem cometido um crime devem ter um tratamento que favoreça a sua dignidade e valor pessoal.", "assets/audios/40.mp3"],
["assets/img/Direitos/41.png", "Qualquer lei nacional que seja mais favorável do que a correspondente na Convenção, deve ser aplicada preferencialmente.", "assets/audios/41.mp3"]
];
var slides = fotos1.length;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    var i = 0;
    let dots = "";
    if (n > slides) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides }
    if(slideIndex > 5){
        i = slideIndex - 5
    }
    for (i; i < fotos1.length; i++) {
        if(slideIndex == i + 1){
            dots = dots + `<span class="dot active" style="fo" onclick="currentSlide(${i + 1})">${i + 1}</span>`;
        }
        else{
        dots = dots + `<span class="dot" onclick="currentSlide(${i + 1})">${i + 1}</span>`;
        }
        if(slideIndex == i - 3){
            break;
        }
    }   
    document.getElementById("rights-texts").innerHTML = dots;
    document.getElementById("mySlides").innerHTML = `<div class="numbertext">${slideIndex} / ${fotos1.length}</div><br> <br><div><img  class="responsive" src='${fotos1[slideIndex - 1][0]}' style="display: block; width:50%; margin-left: auto; margin-right: auto;"/></div> <br> <br> <div class="text responsive">${fotos1[slideIndex - 1][1]}</p><audio controls src="${fotos1[slideIndex - 1][2]}">AQUI</audio></div> <br> `;

}

function rightNormal(){
    let rights = ``;
    let color = 0;
    let colors = ["background-color: #7CCFD9","background-color: #ED4D83","background-color: #F9D24D","background-color: #B8DD9D"];
    for(i=0;i<fotos1.length;i++){
        rights = rights + `<div class="kids-ages" style= '${colors[color]}'>
        <div class="ages-thumb">
          <div class="ages-img" style='font-size: 120px; color: #ffffff;'>
            ${i+1}
          </div>
          <div class="ages-content">
            <p class="responsive" style="font-size: 20px; color: #ffffff">
              ${fotos1[i][1]}
            </p>
          </div>
        </div>
      </div>`;
        color++;
        if(color > 3){
            color = 0
        }
    }
    document.getElementById("direitos").innerHTML = rights;
}
