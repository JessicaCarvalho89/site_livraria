//1- usuario clica no botão Whatsapp
const showMessage = ()=>{
    var divMessage = document.getElementById("whats-message")
    //2- verifica se a propriedade display tem valor "none"
    if (divMessage.style.display == 'none') {
        //3- se valor for "none" modifica para "block" 

        divMessage.style.display = 'block'
    } else { 
         //4- caso contratio modifica para "none" 
        divMessage.style.display = 'none'

    }


}
/* envia mensagem para um numero dw whatsapp */
const enviaMsg = ()=> {
    const numero = 551292244269;
    const mensagem = document.getElementById( 'msg' ).value;
    //aumentar a segurança
    const msgCodificada = encodeURIComponent (mensagem);



    /* evita o envio se a caixa de texto estive vazia  */

    if( !mensagem.trim()){
          alert( 'Por favor digite uma mensagem' );
        //interromper a função
        return;
    }
       

    const url = `https://whats.me${numero}?${msgCodificada}`; 

  /*   abre a url do whatsapp com os parametros passados */
  window.open(url,'blank') 
}
