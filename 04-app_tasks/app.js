/* 

  En versiones nuevas se cambian los require por import haciendo una modificacion en el package.json.
    - package.json => Se agrega el "type": "module"
    - app.js => Se cambian los require por import
    - inquirer.js => Se cambian los require por import
    - messages.js => Se cambian los require por import
    - Los module.exports = {} paar a ser export {}
    - Las exportaciones se cambian los require por import

*/


//require('colors');
import colors from 'colors'
import { showMenu } from './helpers/messages.js';
import { 
    inquirerMenu, 
    pause,
    readInput,
    listOfTaskToDelete,
    confirm,
    showCheckList
} from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';
import { saveDB, readDB } from './helpers/saveFile.js';

const main = async() => {

    //console.log('Hello World');

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if(tasksDB){ // Loading Tasks
        tasks.loadingTasksFromArray(tasksDB);
    }

    do {
        // Print menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1': // Create task
                const desc = await readInput('Descripción:');
                tasks.createTask(desc);
            break;
            case '2': // Tasks list
                tasks.listOftasks();
                
            break;
            case '3': // Completed list
                tasks.completedAndPendingList(true);
                
            break;
            case '4': // Pending list
                tasks.completedAndPendingList(false);
                
            break;
            case '5': // Completed | Pending
                const ids = await showCheckList(tasks.listingArr);
                tasks.toggleCompleted(ids);

            break;
            case '6': // Delete task
                const id = await listOfTaskToDelete(tasks.listingArr);

                if(id !== '0') {
                    const confirmDelete = await confirm('¿Está seguro que desea borrarlo?');

                    if(confirmDelete) {
                        tasks.deleteTask(id);   
                        console.log('Tarea borrada exitosamente!!');
                    }
                }
                
            break;
        }

        saveDB(tasks.listingArr);


        await pause(); 

    } while(opt !== '0');

}

main();