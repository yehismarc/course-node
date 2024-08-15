
import json from '../db/data.json' assert { type: "json" };

import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

class Ticket {

    constructor(number, desktop) {
        this.number = number;
        this.desktop = desktop;
    }
}

class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDate();

        this.tickets = [];
        this.last4 = [];


    }

    get toJson() {
        return {
            last: this.last,
            today: this.today,
            tickets: this.tickets,
            last4: this.last4
        }
    }

    init() {
        const {last, today, tickets, last4} = json;

        if(today === this.today) {
            this.tickets = tickets;
            this.last = last;
            this.last4 = last4;
        } else {
            // is another day
            this.saveDB();
        }
    }

    saveDB() {

        const dbPath = path.join(__dirname, '../db/data.json');

        fs.writeFileSync(dbPath, JSON.stringify(this.toJson));

    }

    next() {
        this.last += 1;

        const ticket = new Ticket(this.last, null);
        this.tickets.push(ticket);

        this.saveDB();

        return 'Ticket ' + ticket.number;
    }

    attendToTicket(desktop) {

        // Validate if we do not have tickets
        if(this.tickets.length === 0) {
            return null;
        }

        // The ticket is deleted from the list because it is being attended.
        const ticket = this.tickets.shift(); //this.tickets[0];
        
        // This is the ticket that is being attended to.
        ticket.desktop = desktop;

        // It is added to the last 4 - At the beginning to be displayed on the screen.
        this.last4.unshift(ticket);

        // Validate if there are 4
        if(this.last4.length > 4) {
            this.last4.splice(-1, 1);
        }

        console.log(this.last4);

        // Save DB
        this.saveDB();

        return ticket
    }
}

export {
    TicketControl
}