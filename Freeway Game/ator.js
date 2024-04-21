//código do ator
let xAtor = 85
let yAtor = 366
var colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  //print(yAtor)
  //print(xAtor)
}

function movimentaAtor(){
  //se telca pressionada pra cima subtrai 
  if (keyIsDown(UP_ARROW)){   
    yAtor -= 5;
  }
  //se tecla pressionada pra direita soma 
  if (keyIsDown(RIGHT_ARROW)){
      if(podeSeMoverPraDireita()){
    xAtor +=5
  }
}
  //se tecla pressionada pra esquerda subtrai  
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMoverPraEsquerda()){
    xAtor -=5
    }
  }
  //se telca pressionada pra baixo soma 
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMoverPraBaixo()){
    yAtor += 5;
    //print(podeSeMoverPraBaixo())
   }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) { 
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      //print("Colidiu")
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;  
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,240,60));
  text(meusPontos, width/5, 27)
}

function marcaPontos(){
  if (yAtor < 15){
     meusPontos += 1; // poderia ser meusPontos = meusPontos+1 tambem
     voltaAtorParaPosicaoInicial();
     somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMoverPraBaixo(){
  return yAtor < 366;
}
function podeSeMoverPraEsquerda(){
  return xAtor > 0;
}
function podeSeMoverPraDireita(){
  return xAtor < 473;
}




  

