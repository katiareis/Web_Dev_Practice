/*Considere uma função que recebe uma lista de valores a serem reajustados sob um determinado percentual, e devolve a impressão do valor antigo e do novo valor calculado. Assinale a opção que gerará como resultado os valores apresentados corretamente, conforme o requisito:


function reajustaValores(itens, percentual) {
    const ajuste = (item) => (item = item + (item * percentual));
    const itensReajustados = itens.map(ajuste);
    console.log("Valor inicial: " + itens);
    console.log("Valor reajustado: " + itensReajustados);
}
reajustaValores([15, 20, 25], 0.5);


class Pessoa {
    constructor(nome, anoNascimento){
      this.nome = nome;
      this.anoNascimento = anoNascimento;
    }
   
    calculaIdade(anoAtual){
      return anoAtual - this.anoNascimento;
    }
  }
  const pessoa1 = new Pessoa("joão", 1999);
  const idade = pessoa1.calculaIdade(2021);


class Televisor {
    constructor(fabricante, modelo, canalAtual, volume) {
      this._fabricante = fabricante;
      this._modelo = modelo;
      this._canalAtual = canalAtual;
      this._volume = volume;
    }
  
    get fabricante() {
      return this._fabricante;
    }
  
    get modelo() {
      return this._modelo;
    }
  
    get volume() {
      return this._volume;
    }
  
    set volume(volume) {
      if (isNaN(volume)) {
        this._volume = 0;
      } else {
        this._volume = volume;
      }
    }
  
    get canalAtual() {
      return this._canalAtual;
    }
  
    set canalAtual(canal) {
      this._canalAtual = canal;
    }
  }
  
  const minhaTV = new Televisor("LG", "LG2021", 5, 12);
  
  minhaTV.volume = 55;
  minhaTV.canalAtual = 7;
  minhaTV.volume--;
  console.log(`Minha televisão está ligada no canal ${minhaTV.canalAtual} com o volume em ${minhaTV.volume}.`);

*/
