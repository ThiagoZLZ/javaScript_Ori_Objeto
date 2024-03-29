function Robo(ataque, defesa, especial){
    this.ataque = ataque;
    this.defesa = defesa;
    this.especial = especial;
   
}

function RoboVoador(ataque, defesa, especial, alturaMaxima){
    Robo.call(this, ataque, defesa, especial);
    this.alturaMaxima = alturaMaxima;
}  

function RoboTerrestre(ataque, defesa, especial, velocidadeMaxima){
    Robo.call(this, ataque, defesa, especial);
    this.velocidadeMaxima = velocidadeMaxima;
}  

function RoboAguatico(ataque, defesa, especial, profundidadeMaxima){
    Robo.call(this, ataque, defesa, especial);
    this.profundidadeMaxima = profundidadeMaxima;
}  

let RoboVoador1 = new RoboVoador(250, 150, "Fogo", 1500);
let RoboTerrestre1 = new RoboTerrestre(240, 450, "Agua", 180);
let RoboAguatico1 = new RoboAguatico(245, 300, "Agua e Fogo", 3000);

console.log(RoboVoador1);
console.log("################################");
console.log(RoboTerrestre1);
console.log("################################");
console.log(RoboAguatico1);