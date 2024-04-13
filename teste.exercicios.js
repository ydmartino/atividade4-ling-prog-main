/* Crie funções que devem ter como parâmetro uma propriedade “lista” que vai receber um array com vários números, as funções devem ser criadas para devolver os dados conforme solicitado:
Uma função que devolve os valores que são maiores que a média
Uma função que devolva o menor valor da lista
Uma função que devolva o valor da soma dos itens da lista
Uma função que devolva todos os valores que são menores que 20
Uma função que vai devolver o primeiro e o último valor da lista
*/


function valoresMaioresQueMedia(valores) {
  // ### Escreva Seu código aqui :) ###
  let media = valores.reduce((total, atual) =>  total + atual,0)/valores.length
  let maiores = valores.filter((j) => j>media)

  return [maiores]
  // ### FIM do código ###
}

function menorValor(valores) {
  
   let menor = Math.min(...valores)
  return [menor]
  // ### FIM do código ###
}

function somaDosItens(valores) {
  // ### Escreva Seu código aqui :) ###
  let soma = valores.reduce((vlrAnterior, vlrAtual) => vlrAnterior+vlrAtual,0)

  return [soma]
  // ### FIM do código ###
}

function valoresMenoresQue20(valores) {
  // ### Escreva Seu código aqui :) ###
  
  let menor = []

  valores.forEach(i => {
    if(i<20){
      menor.push(i)
    }
    })  

  return [menor]
  // ### FIM do código ###
}

function primeiroEUltimo(valores) {
  // ### Escreva Seu código aqui :) ###
let primeiro = valores[0]
let ultimo = valores[valores.length-1]


  return [primeiro,ultimo]
  // ### FIM do código ###
}

/* ==== Não apagar ==== */
module.exports = {
  valoresMaioresQueMedia,
  menorValor,
  somaDosItens,
  valoresMenoresQue20,
  primeiroEUltimo
}
const input = [1, 2, 3, 4, 5]
console.log("1 - ",valoresMaioresQueMedia(input),"2 - ",menorValor(input),"3 - ",somaDosItens(input),"4 - ",valoresMenoresQue20(input),"5 - ",primeiroEUltimo(input))
