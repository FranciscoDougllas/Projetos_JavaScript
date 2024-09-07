// // Busca o elemento HTML com o id "mudarCor" e atribui a variável trocaCor
// const trocaCor = document.querySelector("#mudarCor");

// // Busca o elemento HTML <body> e atribui a variável body
// const body = document.querySelector("body");

// // Adiciona um evento de click ao elemento trocaCor
// trocaCor.addEventListener("click", () => {
//   // Gera um número aleatório entre 0 e 16777215 (número máximo de cores 
//   // possíveis em hexadecimal) e converte para string hexadecimal
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);

//   // Atribui a propriedade backgroundColor do elemento body a cor 
//   // hexadecimal gerada aleatoriamente
//   body.style.backgroundColor = "#" + randomColor;
// });


// // Busca o elemento HTML com o id "mudarCor" e atribui à variável trocaCor
// const trocaCor = document.querySelector("#mudarCor");

// // Busca o elemento HTML <body> e atribui à variável body
// const body = document.querySelector("body");

// // Função para gerar uma cor aleatória entre preto claro e preto escuro
// function gerarCorAleatoria() {
//   // Gera um número aleatório entre 0 e 255 (para tons de cinza)
//   const randomGray = Math.floor(Math.random() * 256);

//   // Converte o número para uma cor hexadecimal (exemplo: #3a3a3a)
//   const grayHexColor = "#" + randomGray.toString(16).padStart(2, "0").repeat(3);

//   return grayHexColor;
// }

// // Adiciona um evento de clique ao elemento trocaCor
// trocaCor.addEventListener("click", () => {
//   // Gera uma cor aleatória
//   const randomColor = gerarCorAleatoria();

//   // Atribui a propriedade backgroundColor do elemento body à cor gerada aleatoriamente
//   body.style.backgroundColor = randomColor;
// });


// // Busca o elemento HTML com o id "mudarCor" e atribui à variável trocaCor
// const trocaCor = document.querySelector("#mudarCor");

// // Busca o elemento HTML <body> e atribui à variável body
// const body = document.querySelector("body");

// // Função para gerar uma cor aleatória entre preto claro e preto escuro
// function gerarCorAleatoria() {
//   // Gera um número aleatório entre 0 e 255 (para tons de cinza)
//   const randomGray = Math.floor(Math.random() * 256);

//   // Converte o número para uma cor hexadecimal (exemplo: #3a3a3a)
//   const grayHexColor = "#" + randomGray.toString(16).padStart(2, "0").repeat(3);

//   return grayHexColor;
// }

// // Adiciona um evento de clique ao elemento trocaCor
// trocaCor.addEventListener("click", () => {
//   // Gera duas cores aleatórias para criar um gradiente
//   const color1 = gerarCorAleatoria();
//   const color2 = gerarCorAleatoria();
//   const color3 = gerarCorAleatoria();
//   const color4 = gerarCorAleatoria();

//   // Aplica o gradiente linear como plano de fundo
//   body.style.background = `linear-gradient(to right, ${color1}, ${color2}, ${color3}, ${color4})`;
// });





// // Busca o elemento HTML com o id "mudarCor" e atribui à variável trocaCor
// const trocaCor = document.querySelector("#mudarCor");

// // Busca o elemento HTML <body> e atribui à variável body
// const body = document.querySelector("body");

// // Função para gerar uma cor cinza dentro de um intervalo específico
// function gerarCorDentroIntervalo(baseGray) {
//   // Define o intervalo máximo permitido para a diferença de cor
//   const intervaloMaximo = 20;

//   // Gera um número aleatório no intervalo permitido em torno do valor base
//   const randomGray = Math.max(0, Math.min(255, baseGray + Math.floor(Math.random() * (intervaloMaximo * 2 + 1)) - intervaloMaximo));

//   // Converte o número para uma cor hexadecimal (exemplo: #3a3a3a)
//   return "#" + randomGray.toString(16).padStart(2, "0").repeat(3);
// }

// // Adiciona um evento de clique ao elemento trocaCor
// trocaCor.addEventListener("click", () => {
//   // Gera uma cor base aleatória
//   const corBase = Math.floor(Math.random() * 256);

//   // Gera quatro cores dentro do intervalo permitido em torno da cor base
//   const color1 = gerarCorDentroIntervalo(corBase);
//   const color2 = gerarCorDentroIntervalo(corBase);
//   const color3 = gerarCorDentroIntervalo(corBase);
//   const color4 = gerarCorDentroIntervalo(corBase);

//   // Aplica o gradiente linear como plano de fundo
//   body.style.background = `linear-gradient(95deg, ${color1}, ${color2}, ${color3}, ${color4})`;
// });



// Busca o elemento HTML com o id "mudarCor" e atribui à variável trocaCor
const trocaCor = document.querySelector("#mudarCor");

// Busca o elemento HTML <body> e atribui à variável body
const body = document.querySelector("body");

// Função para gerar uma cor cinza dentro de um intervalo específico
function gerarCorDentroIntervalo(baseGray) {
  // Define o intervalo máximo permitido para a diferença de cor
  const intervaloMaximo = 20;

  // Gera um número aleatório no intervalo permitido em torno do valor base
  const randomGray = Math.max(0, Math.min(255, baseGray + Math.floor(Math.random() * (intervaloMaximo * 2 + 1)) - intervaloMaximo));

  // Converte o número para uma cor hexadecimal (exemplo: #3a3a3a)
  return randomGray;
}

// Função para converter um número cinza para a cor hexadecimal
function cinzaParaHex(cinza) {
  return "#" + cinza.toString(16).padStart(2, "0").repeat(3);
}

// Adiciona um evento de clique ao elemento trocaCor
trocaCor.addEventListener("click", () => {
  // Gera uma cor base aleatória
  const corBase = Math.floor(Math.random() * 256);

  // Gera quatro cores dentro do intervalo permitido em torno da cor base
  const cores = [
    gerarCorDentroIntervalo(corBase),
    gerarCorDentroIntervalo(corBase),
    gerarCorDentroIntervalo(corBase),
    gerarCorDentroIntervalo(corBase)
  ];

  // Ordena as cores em ordem crescente
  cores.sort((a, b) => a - b);

  // Converte as cores para o formato hexadecimal
  const coresHex = cores.map(cinzaParaHex);

  // Aplica o gradiente linear como plano de fundo
  body.style.background = `linear-gradient(95deg, ${coresHex.join(', ')})`;
});

