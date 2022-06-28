
//calculos principais

// Enviando as informações para tabela
const btn = document.querySelector('#send-valor');
    btn.addEventListener('click', (e) => {
    
    e.preventDefault();
    let selec = document.getElementById("show-gastos")
    let displayprecos = document.getElementById("show-preços")

    let input = document.querySelector('#gasto-diario');
    let texto = input.value;
    selec.innerHTML= `${texto}`;

    let nuninput = document.querySelector('#valor-gasto');
    let txtnun = nuninput.value;
    displayprecos.innerHTML = `${txtnun}`
        
    });

// Fazendo alertas da pagina gastos diarios
function enviaralertas(){
    let valor  = document.getElementById("valor-gasto")
    let com = document.getElementById("gasto-diario")
    
    if(com.value.length == 0){
        window.alert('coloque com oque foi gasto')
    }else if(valor.value.length == 0){
        window.alert('coloque o valor da compra')
    }   
}
//abrindo a pagina dos ganhos diarios
function ganhosim(){
    let ganhos = window.open('ganhos-diarios.html', '_self')
}

//abrindo a pagina do gasto diario
function gastosim(){
  window.open('gasto-diario.html', '_self')

}

//abrindo a pagina index em entrar

function openIndex(){
    window.open("wellcome.handlebars", "_self");

}

//quando nn foi feito nenhum gasto 
function naogasto(){
  window.alert('PARABÉNS!!! continue assim.')
}

//saldo diario
function saldo(){
    let inganhos =document.getElementById("valor-ganho");
    let ganhos = ingastastos;
    let saldo = inganhos;
    let somavalores = inganhos - 100;
    let totalsaldo ='R$ ' + saldo
    
    document.getElementById('saldo-disponivel').innerHTML=totalsaldo
}
//data do site
function data(){
    let data = new Date()
    let dia = data.getDate()
    let mess = data.getMonth()
    let mes = mess + 1
    let ano = data.getFullYear()

    if(dia < 10) dia = "0" + dia;
    if(mes < 10) mes = "0" + mes;

    var fullyear = dia+'/'+mes+'/'+ano;
    
    

    document.getElementById('data-site').innerHTML=fullyear;
}
//Horario do site
function showTime(){
    let time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();  
    let segundo = time.getSeconds();

    if (hora < 10) hora = "0" +hora;
    if (minutos < 10) minutos = "0" +minutos;
    if (segundo < 10) segundo = "0" +segundo;
    let tempo = hora +':' +minutos+':'+segundo;

    document.getElementById('timer').innerHTML=tempo;

}
function initTime(){
    setInterval (showTime, 1000);
};