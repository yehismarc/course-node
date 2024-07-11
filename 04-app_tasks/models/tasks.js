
/**
 *  -listado:
 *      {   'uuid-123515132326465': { id:12, desc:ad, completedIn:46545546 }     }
 * 
 */

import { Task } from './models/task.js';

class Tasks {

    _listado = {};

    constructor() {
        this._listado = {};
    };

    createTask(desc = '') {

        const task = new Task(desc);

        this._listado[task.id] = task;

    }
 

}

export {
    Tasks
}