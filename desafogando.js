
//calculos principais

// Enviando as informações para tabela
const btn = document.querySelector('#send-valor');
    btn.addEventListener('click', function(e){
    
    e.preventDefault();
    let selec = document.getElementById("show-gastos")
    let displayprecos = document.getElementById("show-preços")

    var input = document.querySelector('#gasto-diario');
    var texto = input.value;
    selec.innerHTML= `${texto}`;

    var nuninput = document.querySelector('#valor-gasto');
    var txtnun = nuninput.value;
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
    window.open("wellcome.html", "_self");

}

//quando nn foi feito nenhum gasto 
function naogasto(){
  window.alert('PARABÉNS!!! continue assim.')
}

//saldo diario
function saldo(){
    let inganhos =document.getElementById("valor-ganho");
    let ganhos = ingastastos;
    var saldo = inganhos;
    let somavalores = inganhos - 100;
    var totalsaldo ='R$ ' + saldo
    
    document.getElementById('saldo-disponivel').innerHTML=totalsaldo
}
//data do site
function data(){
    var data = new Date()
    var dia = data.getDate()
    var mess = data.getMonth()
    var mes = mess + 1
    var ano = data.getFullYear()

    if(dia < 10) dia = "0" + dia;
    if(mes < 10) mes = "0" + mes;

    var fullyear = dia+'/'+mes+'/'+ano;
    
    

    document.getElementById('data-site').innerHTML=fullyear;
}
//Horario do site
function showTime(){
    var time = new Date();
    var hora = time.getHours();
    var minutos = time.getMinutes();  
    var segundo = time.getSeconds();

    if (hora < 10) hora = "0" +hora;
    if (minutos < 10) minutos = "0" +minutos;
    if (segundo < 10) segundo = "0" +segundo;
    var tempo = hora +':' +minutos+':'+segundo;

    document.getElementById('timer').innerHTML=tempo;

}
function initTime(){
    setInterval (showTime, 1000);
}


/*Calculo dos produtos
function enviarprodutos() {
    var gasto_diario = getElementById('gasto-diario')
    var valor_gasto = getElementById('valor-gasto')
    var gasto_tabela = getElementById('gastos-tabela')
         if(p = ''=='') {
           var produto = createElement('option') 
            p.innerHTML.produto = ''
            gasto_tabela.appendChild(produto)
            
        } else {
            let n = Number(numero.value)
            let v = 1
            gasto_tabela = ''
        } while   (v <= 10 ) {
           let valor = createElement('option')
           valor.text = `${n} + ${v} = ${n+v}`
           valor.value = `gasto_tabela ${v}`
           gasto_tabela.appendChild(valor)
           v++
        } 
        var n = Number (numero.value)

} */


//layout interativo
    //   function layout(){
    //       var time = new Date()
    //       var hora = time.getHours()

    //       if(hora < 12) {
    //           document.body.style.background = '#1b98e0'
    //       } else if (hora >=12 && hora<18){
    //           document.body.style.background = '#247ba0'
    //       }else {
    //           document.body.style.background = '#006494'
    //       }
    //   }