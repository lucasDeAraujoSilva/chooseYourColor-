const carro = document.getElementById("carro");
const carroAzul = document.getElementById("azul");
const carroVermelho = document.getElementById("vermelho");
const carroBranco = document.getElementById("branco");
const carroPreto = document.getElementById("preto");
const carroCinza = document.getElementById("cinza");
const impressão = document.getElementById("imprimir");


function blueCar() {
    carro.src = "color/azul.jpeg"
  }

function redCar() {
    carro.src = "color/vermelho.jpeg"
  }
  
function whiteCar() {
  carro.src = "color/branco.jpeg"
}

function blackCar() {
  carro.src= "color/preto.jpeg"
}

function grayCar() {
  carro.src= "color/cinza.jpeg"
}

function ToPrint (){
  print();
}

carroAzul.addEventListener("click", blueCar);
carroVermelho.addEventListener("click" , redCar);
carroBranco.addEventListener("click" , whiteCar);
carroPreto.addEventListener("click" , blackCar);
carroCinza.addEventListener("click" , grayCar);
impressão.addEventListener("click" , ToPrint);