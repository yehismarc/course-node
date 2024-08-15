import { TicketControl } from "../models/ticket_control.js";


const ticketControl = new TicketControl();

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.emit('last-ticket', ticketControl.last);
    socket.emit('current-status', ticketControl.last4);
    socket.emit('pending-ticket', ticketControl.tickets.length);

    socket.on('next-ticket', (payload, callback) => {

        const next = ticketControl.next();
        callback(next);

        // TODO: Notificar que hay un nuevo ticket pendiente de asignar
        socket.broadcast.emit('pending-ticket', ticketControl.tickets.length);

    });

    socket.on('attend-ticket', ({desktop}, callback) => {
        if (!desktop) {
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            });
        }

        const ticket = ticketControl.attendToTicket(desktop);

        // TODO: Notificar cambio en los ultimos 4
        socket.broadcast.emit('current-status', ticketControl.last4);
        socket.emit('pending-ticket', ticketControl.tickets.length);
        socket.broadcast.emit('pending-ticket', ticketControl.tickets.length);

        if (!ticket) {
            callback({
                ok: false,
                msg: 'Ya no hay tickets pendientes'
            });
        } else {
            callback({
                ok: true,
                ticket
            });
        }

    });

    ticketControl.init();
}

export {
    socketController
}

