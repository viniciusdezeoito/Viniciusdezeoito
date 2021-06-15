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
    let adicionar = document.getElementById('far');
    let array = [];
    const obj = {
    um : adicionar += elementId.value,
    dois:adicionar += elementId.value,
    tres:adicionar += elementId.value,
    }
    adicionar.innerHTML = obj.um,obj.dois,obj.tres;
 
     

        }
       
    

   
   function ativarCelsius(){
    const adicionar = document.getElementById('botoes');
    const adicionar_um = document.getElementById('botoes_um');
    const adicionar_dois = document.getElementById('botoes_dois');
    const adicionara = document.getElementById('fare');
    const adicionara_um = document.getElementById('fare_um');
    const adicionara_dois = document.getElementById('fare_dois');
    adicionar.style.display = "inline";
    adicionar_um.style.display = "inline";
    adicionar_dois.style.display = "inline";
    adicionara.style.display = "none";
    adicionara_um.style.display = "none";
    adicionara_dois.style.display = "none";
   }
   function ativarFare(){
    const adicionar = document.getElementById('fare');
    const adicionar_um = document.getElementById('fare_um');
    const adicionar_dois = document.getElementById('fare_dois');
    const adicionara = document.getElementById('botoes');
    const adicionara_um = document.getElementById('botoes_um');
    const adicionara_dois = document.getElementById('botoes_dois');
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