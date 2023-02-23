console.log("eae");

//  Plain:  abcdefghijklmnopqrstuvwxyz
//  Cipher: nopqrstuvwxyzabcdefghijklm

let alfabeto_padrao = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let cifra = [
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
];

console.log(alfabeto_padrao.length);
console.log(cifra.length);

const criptografar = (palavra) => {
  let criptografado = "";

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === " ") {
      criptografado += " ";
    } else {
      let indice_alfabeto_padrao = alfabeto_padrao.indexOf(palavra[i]);

      criptografado += cifra[indice_alfabeto_padrao];
    }
  }
  console.log(criptografado);
};

const desCriptografar = (palavra) => {
  let criptografado = "";

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === " ") {
      criptografado += " ";
    } else {
      let indice_cifra = cifra.indexOf(palavra[i]);



      criptografado += alfabeto_padrao[indice_cifra];
    }
  }
  console.log(criptografado);
};
