
/**
 *  -listing:
 *      {   'uuid-123515132326465': { id:12, desc:ad, completedIn:46545546 }     }
 * 
 */

import { Task } from "./task.js";

class Tasks {

    _listing = {};

    get listingArr() {

        const listing = [];
        Object.keys(this._listing).forEach( key => {
            listing.push(this._listing[key])
        });

        return listing;
    };

    constructor() {
        this._listing = {};
    };

    loadingTasksFromArray( tasks = []) {

        tasks.forEach(task => {
            this._listing[task.id] = task;

        });

        
    };

    createTask(desc = '') {

        const task = new Task(desc);
        this._listing[task.id] = task;

    };

    listOftasks() {

        console.log();

        this.listingArr.forEach( (task, i) => {

            const idx = `${i + 1}`.green;
            const {desc, completedIn} = task;

            const status = (completedIn) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${idx}. ${desc} :: ${status}`);

        });

    }

    completedAndPendingList(completed = true) {

        console.log();

        let counter = 0;

        this.listingArr.forEach( task => {

            const {desc, completedIn} = task;

            const status = (completedIn) ? 'Completado'.green : 'Pendiente'.red;

            if(completed) {

                if(completedIn){
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} :: ${completedIn.green}`);
                }

            } else {

                if(!completedIn){
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} :: ${status}`);
                }

            }

        });

    }

    deleteTask(id = '') {
        
        if(this._listing[id]) {
            delete this._listing[id];
        }
    }

    toggleCompleted(ids = []) {
        
        ids.forEach( id => {

            const task = this._listing[id];

            if(!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }

        });

        this.listingArr.forEach(task => {

            if(!ids.includes(task.id)) {
                this._listing[task.id].completedIn = null;
            }

        });
    }
 

}

export {
    Tasks
}