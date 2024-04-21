//codigo do carro no comments

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 318];
let velocidadeCarros = [11, 5.5, 6.2, 8, 6.3, 4.3 ];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}

/*////////////////////////////////////////////////*/



//código do carro

//saindo de 9 variáveis para 3 listas

/*
let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];*/

//carro 1
//let xCarro = 600;
//let yCarro = 40;
//let velocidadeCarro1 = 2;

//carro 2
//let xCarro2 = 600;
//let yCarro2 =96;
//let velocidadeCarro2 = 2.5;

//carro 3
//let xCarro3 = 600;
//let yCarro3 =150;
//let velocidadeCarro3 = 3.2;

/*function mostraCarro(){ //refatorando função
  
  //criando repetição de instrução "criar carrinhos" (3x)
  for (let i = 0; i < imagemCarros.length; i = i+1)  { 
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    
    //image(imagemCarros[1], xCarros[1], yCarros[1], 50, 40); 
    //image(imagemCarros[2], xCarros[2], yCarros[i2], 50, 40);
    //print(yCarros[2]);
    //print("O valor do i nesta repetição é " +i);
  }
}*/

/*function movimentaCarro(){ //refatorando função
  
  //xCarros[0] = xCarros[0] - velocidadeCarros[0];    
  //assim não precisa repetir variável xCarros pra subtrair: 
  
  for (let i =0; i <imagemCarros.length; i = i+1)  {
    xCarros[i] -= velocidadeCarros[i];
  
  //xCarros[1] -= velocidadeCarros[1];
  //xCarros[2] -= velocidadeCarros[2];
  //print(xCarro) //mostra posição atual do carro
  }
}*/

/*function voltaPosicaoInicialDoCarro(){ //refatorando função
 
  for (let i = 0; i <imagemCarros.length; i = i+1){
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
    /*if (xCarros[1] < -50) {
      xCarros[1] = 600
    }
    if (xCarros[2] < -50) {
      xCarros[2] = 600
    }*/
//  }
// }

/*function passouTodaATela(xCarro){
  return xCarro < -50;
}*/

