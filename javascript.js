function limpar() {
  document.getElementById("number").value = "";

}

function convertRoman() {
  
    //Requisitando o numero (valor) do input 
    var num = document.getElementById("number").value;
    
    var arr = num.toString().split("");
    var zeros = 1; //Iniciando com valor 1
    var roman = []; //Iniciando com nada dentro
    var rom = ""; //Iniciando com nada dentro
  
    //Fazendo looping de 0, começa com o comprimento do arr -1, e se o i for igual ou maior que 0, ele diminuira 1
    for (i = (arr.length - 1); i >= 0; i--) {
      arr[i] = arr[i] * zeros;
      zeros *= 10;
    }
  
    //Estou iniciando a variavel como 0 e verificando se o "i" é menor que arr.lenght e incrementando 1
    for (i = 0; i < arr.length; i++) {
  
    //Usando o switch para criar varias cases, para colocar as respostas do input        
      switch(arr[i]) {
        case 1:
          roman.push("I");
          break;
        case 2:
          roman.push("II");
          break;
        case 3:
          roman.push("III");
          break;
        case 4:
          roman.push("IV");
          break;
        case 5:
          roman.push("V");
          break;
        case 6:
          roman.push("VI");
          break;
        case 7:
          roman.push("VII");
          break;
        case 8:
          roman.push("VIII");
          break;
        case 9:
          roman.push("IX");
          break;
        case 10:
          roman.push("X");
          break;
        case 20:
          roman.push("XX");
          break;
        case 30:
          roman.push("XXX");
          break;
        case 40:
          roman.push("XL");
          break;
        case 50:
          roman.push("L");
          break;
        case 60:
          roman.push("LX");
          break;
        case 70:
          roman.push("LXX");
          break;
        case 80:
          roman.push("LXXX");
          break;
        case 90:
          roman.push("XC");
          break;
        case 100:
          roman.push("C");
          break;
        case 200:
          roman.push("CC");
          break;
        case 300:
          roman.push("CCC");
          break;
        case 400:
          roman.push("CD");
          break;
        case 500:
          roman.push("D");
          break;
        case 600:
          roman.push("DC");
          break;
        case 700:
          roman.push("DCC");
          break;
        case 800:
          roman.push("DCCC");
          break;
        case 900:
          roman.push("CM");
          break;
        case 1000:
          roman.push("M");
          break;
        case 2000:
          roman.push("MM");
          break;
        case 3000:
          roman.push("MMM");
          break;

        //Se passar de 3999, não aparecera nada     
        default:
          break;
      }
    }
  
    //Depois de receber ele resetara e mostrara no result
    rom = roman.join("");
    
    //Passando o resultado para a result (html)
    document.getElementById("result").innerHTML = rom;
}
