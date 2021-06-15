const funcaoMudar = function(){
    const mudarDeCor = document.getElementById('subDivPrincipalResultado');
    mudarDeCor.style.display ="flex";
   };
   const funcaoMudarRetirar = function(){
       const mudarDeCor = document.getElementById('subDivPrincipalResultado');
       mudarDeCor.style.display ="none";
   };
   const funcaoMudarDois = function(){
       const mudarDeCor = document.getElementById('subDivPrincipalResultadoUm');
       mudarDeCor.style.display ="flex";
      };
      const funcaoMudarRetirarDois = function(){
       const mudarDeCor = document.getElementById('subDivPrincipalResultadoUm');
       mudarDeCor.style.display ="none";
   };

  function mudarCelsius(elementId){
    const adicionar = document.getElementById('textoCelsius');
  
    adicionar.innerHTML += elementId.value;
    
   }
   function mudarFare(elementId){
    let variavelUm = elementId.value;
     
    let adicionar = document.getElementById('far');
    

    adicionar.innerHTML += variavelUm;
  
    
    

  
     

        }

     
       
    

   
   function ativarCelsius(){
    let mudar = document.getElementById('textoCelsius');
    mudar.innerHTML = 0;
    const adicionar = document.getElementById('botoes');
    const adicionar_um = document.getElementById('botoes_um');
    const adicionar_dois = document.getElementById('botoes_dois');
    const adicionara = document.getElementById('fare');
    const adicionara_um = document.getElementById('fare_um');
    const adicionara_dois = document.getElementById('fare_dois');
    const botoes = document.getElementById('funcoes');
    const bb = document.getElementById('funcoesDois');
    bb.style.display = "none";
    botoes.style.display = "inline";
    adicionar.style.display = "inline";
    adicionar_um.style.display = "inline";
    adicionar_dois.style.display = "inline";
    adicionara.style.display = "none";
    adicionara_um.style.display = "none";
    adicionara_dois.style.display = "none";
   }
   function ativarFare(){
    let mudar = document.getElementById('far');
    mudar.innerHTML = 0;
    const adicionar = document.getElementById('fare');
    const adicionar_um = document.getElementById('fare_um');
    const adicionar_dois = document.getElementById('fare_dois');
    const adicionara = document.getElementById('botoes');
    const adicionara_um = document.getElementById('botoes_um');
    const adicionara_dois = document.getElementById('botoes_dois');
    const botoes = document.getElementById('funcoesDois');
    const bb = document.getElementById('funcoes');
    bb.style.display = "none";
    botoes.style.display = "inline";
    adicionar.style.display = "inline";
    adicionar_um.style.display = "inline";
    adicionar_dois.style.display = "inline";
    adicionara.style.display = "none";
    adicionara_um.style.display = "none";
    adicionara_dois.style.display = "none";
   }
   function limpa(){
    const adicionar = document.getElementById('textoCelsius');
    adicionar.innerHTML = '0';
   }
   function Limpa(){
    const adicionar = document.getElementById('far');
    adicionar.innerHTML = '0';
   }
   function converterCelsius(){
    let adicionar = document.getElementById('textoCelsius').innerHTML;
    let mostrar = document.getElementById('far');

    adicionar = parseInt(adicionar);
    let conta = (adicionar*1.8000)+32;
    conta =  conta.toFixed(3);
    mostrar.innerHTML = conta;
}
function converterFare(){
   let adicionar = document.getElementById('far').innerHTML;
    adicionar = parseInt(adicionar);
    let texto = document.getElementById('textoCelsius');
    let conta = (adicionar-32)/1.8000;
    conta = conta.toFixed(3);
    texto.innerHTML = conta;
}   