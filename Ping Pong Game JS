//no p5, a estremidade esquerda do x da bolinha é 0

//variáveis da bolinha
let xBolinha = 250;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


//variáveis do oponente
let xRaqueteOponente = 485;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false;

//placar do jogo

let meusPontos = 0;
let pontosDoOponente =0;

//sons do jogo

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

//variaveis das condernadas raquete/bolinha

/*    let esquerdaBolinha = xBolinha - raio;
    let superiorBolinha = yBolinha - raio;
    let inferiorBolinha = yBolinha + raio;
    
    let direitaRaquete = xRaquete + raqueteComprimento;
    let superiorRaquete = yRaquete;
    let inferiorRaquete = yRaquete + raqueteAltura;	*/



//"cria fundo" ou o palco do nosso jogo (dimensões)
function setup() {
  createCanvas(500, 400); //1° Parametro é o limite da tela do lado direito
  trilha.loop();
}

function draw() {
  //add fundo preto 
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //movimentaRaqueteOponente();
  //mostraRaqueteOponente();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  //verificaColisaoRaquete(xRaquete, yRaquete);
  //ccolisaoMinhaRaqueteBiblioteca();
  //colisaoRaqueteOponeneteBiblioteca();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaqueteMY();
  incluiPLacar();  
  marcaPonto();
  bolinhaNaoFicaPresa();

}
 //Movimenta raquete de acordo como movimento da nossa bolinha
function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente;
  // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
  yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);
  calculaChanceDeErrar();
}

/*
function movimentaRaqueteOponente() {
  
  if  (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if  (keyIsDown(83)){
    yRaqueteOponente += 10;  
  }
  //Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
  
  yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);
}*/

function mostraBolinha()  { 
  
  // circle(x, y, d) d = diameter
  //x-coordinate of the center of the circle
  circle(xBolinha,yBolinha,diametro);
  
}

function movimentaBolinha()  { 
  //xBolinha = xBolinha + 1;
  //xBolinha = xBolinha + velocidadeXBolinha;
  //outra forma de escrever o código acima
  xBolinha += velocidadeXBolinha;  //movimenta na horizontal
  yBolinha += velocidadeYBolinha;  //movimenta na vertical
}

function verificaColisaoBorda()  {      
  //se no x da bolinha estiver tocando a borda ou menor que zero
  if (xBolinha + raio> width || xBolinha - raio <0 )  {
  //velocidadeXBolinha = velocidadeXBolinha * (-1); 
  velocidadeXBolinha *= -1;
  }
  //se no y da bolinha estiver tocando a altura ou menor que zero
  if (yBolinha + raio > height || yBolinha - raio <0)  {
  //velocidadeYBolinha = velocidadeYBolinha * (-1); inverte vel multiplicando por -1
  velocidadeYBolinha *= -1; 
  }   
}

function mostraRaquete(x,y)  {  
  //criar raquete (x,y,w,h)
  rect(x,y, raqueteComprimento, raqueteAltura);
}

/*
function mostraRaqueteOponente()  {  
  //criar raquete (x,y,w,h)
  rect(xRaqueteOponente,yRaqueteOponente, raqueteComprimento, raqueteAltura);
}*/


//quanto menor (-) o y mais pra cima a seta vai
function movimentaMinhaRaquete()  {
  if  (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if  (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;  
  }
  // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
  
  yRaquete = constrain(yRaquete, 10, 310);
  
}


//definir é a extremidade esquerda da bolinha, calculado por xBolinha - raio

//próximo passo extremidade superior da bolinha, calculado por yBolinha - raio

//no eixo Y (vertical), quanto maior o valor, mais para baixo estamos indo


// A extremidade superior da raquete é calculada por yRaquete, a extremidade inferior da raquete é calculada por yRaquete + raqueteAltura e a extremidade direita da raquete é calculada por xRaquete + raqueteComprimento


function verificaColisaoRaqueteMY()  {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1
      raquetada.play();
  }
}  

/*function colisaoRaqueteOponeneteBiblioteca()  {
    colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *=-1;
  }  */
  
function verificaColisaoRaquete(x, y)  {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *=-1;
    raquetada.play();
  }

}

function incluiPLacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(350, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 370, 26);
  }

function marcaPonto(){
  if (xBolinha > 490)  {
    meusPontos +=1;  
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente +=1;
    ponto.play();
  }
}
function calculaChanceDeErrar(){
  if (pontosDoOponente >= meusPontos)  {
    chanceDeErrar += 1;
    if(chanceDeErrar >= 39){
    chanceDeErrar = 40;
    }
  }else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35){
      chanceDeErrar =35;
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}





