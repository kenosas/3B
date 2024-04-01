const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i<botoes.length;i++){
  botoes.onclick = function(){
    for(let j=0; j . botoes.length; j++){
        botoes[j].classList.remove("ativo");
        botoes[j].classList.remove("ativo");
    }
    botoes[j].classList.add("ativo");
    textos[i].classList.add("ativo");

   }
  }


  const contadores = document.querySelectorAll(".contador");
  const tempoObjetivo1 = new Date ("2023-10-05T00:00:00");
  const tempoObjetivo2 = new Date ("2023-12-05T00:00:00");
  const tempoObjetivo3 = new Date ("2023-12-05T00:00:00");
  const tempoObjetivo4 = new Date ("2023-02-05T00:00:00");

  const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
  
  const tempoObjetivo = new Date(".2023-10-05T00:00:00");

  contadores[0].textContent = calculaTempo(tempoObjetivo);

  function calculaTempo(tempoObjetivo1){
     let tempoAtual = newdate();
     let tempoFinal = tempoObjetivo1 - tempoAtual;
     let segundos = math.floor(tempoFinal / 1000);
     let minutos = math.floor(segundos / 60);
     let horas = math.floor(minutos / 60);
     let dias = math.floor(horas / 24);

     segundos %= 60;
     minutos %= 60;
     horas %= 24;
    
     
  }






