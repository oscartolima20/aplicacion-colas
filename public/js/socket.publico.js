// Comando para establecer la conexion
var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

// el cliente recibe el estado actual de los ticker
socket.on('estadoActual', function(resp) {
    console.log(resp);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(resp.ultimos4);
});
/**
 * Funcion que permite iterar la respues del servido
 * @param {*} ultimosCuatro recibe los ultimos cuatro tickets que estan atendiendo
 */
function actualizaHTML(ultimosCuatro) {
    for (var i = 0; i <= ultimosCuatro.length - 1; i++) {
        lblTickets[i].text('Ticket ' + ultimosCuatro[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio);
    }

}