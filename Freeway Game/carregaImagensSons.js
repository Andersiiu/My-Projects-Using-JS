//imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("arquivosImagens/estrada.png");
  imagemDoAtor = loadImage("arquivosImagens/ator-1.png");
  imagemCarro = loadImage("arquivosImagens/carro-1.png");
  imagemCarro2 = loadImage("arquivosImagens/carro-2.png");
  imagemCarro3 = loadImage("arquivosImagens/carro-3.png");
  //criando uma lista
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("arquivosSons/trilha.mp3");
  somDaColisao = loadSound("arquivosSons/colidiu.mp3");
  somDoPonto = loadSound("arquivosSons/pontos.wav");
}