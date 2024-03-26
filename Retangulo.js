//Declaro a class retangulo e coloco suas propriedades para executar o calculo
class Retangulo { 
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
  //Getter -A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada
    get area() {
        return this.calculaArea()
    }
    //efetuo o calculo da área
    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Retangulo(10, 10); // valores

console.log(quadrado.area);
//----------------------------------------------------------------------------------------------
class Circulo { 
  constructor(area, pi, raio) {
    this.area = area; this.pi = pi; this.raio=raio;
  }
//Getter -A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada
  get circulo() {
      return this.calculaCirculo()
  }
  //efetuo o calculo da área
  calculaCirculo() {
      return this.pi * this.raio;
  }
}

const circulo = new Circulo(5, 3.14, 15); // valores

console.log(circulo.circulo);
//----------------------------------------------------------------------------------------------
//Calculo do Trapezio
class Trapezio { 
  constructor(basemaior, basemenor, altura) {
    this.basemaior = basemaior; this.basemenor = basemenor; this.altura=altura
  }
//Getter -A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada
  get trap() {
      return this.calculaTrapezio()
  }
  //efetuo o calculo do trapezio
  calculaTrapezio() {
      return (this.basemaior + this.basemenor) * this.altura/ 2;
  }
}

const trapezeio = new Trapezio(12,4,5); // valores

console.log(trapezeio.trap);