function Robo(nome, ataque, defesa, especial){
    this.nome = nome;
    this.ataque = ataque;
    this.defesa = defesa;
    this.especial = especial;

    console.log("O Robo " + this.nome + ", tem o ataque de " + this.ataque + " e defesa de " + this.defesa + ", seu especial é " + this.especial + ".");
    console.log("####################################################################################################################")
   
}

function RoboVoador(nome, ataque, defesa, especial, alturaMaxima){
    Robo.call(this, nome, ataque, defesa, especial);
    this.alturaMaxima = alturaMaxima;
}  

function RoboTerrestre(nome, ataque, defesa, especial, velocidadeMaxima){
    Robo.call(this, nome, ataque, defesa, especial);
    this.velocidadeMaxima = velocidadeMaxima;
}  

function RoboAguatico(nome, ataque, defesa, especial, profundidadeMaxima){
    Robo.call(this, nome, ataque, defesa, especial);
    this.profundidadeMaxima = profundidadeMaxima;
}  

let RoboVoador1 = new RoboVoador("Águia de Aço", 250, 150, "Fogo", 1500);
let RoboTerrestre1 = new RoboTerrestre("Tanque de Ferro", 240, 450, "Agua", 180);
let RoboAguatico1 = new RoboAguatico("Tubarão de Aço", 245, 300, "Agua e Fogo", 3000);

console.log(RoboVoador1);
console.log("################################");
console.log(RoboTerrestre1);
console.log("################################");
console.log(RoboAguatico1);