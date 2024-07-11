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
import { inquirerMenu, pause } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';

const main = async() => {

    console.log('Hello World');

    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();
        console.log({opt});

        await pause(); 

    } while(opt !== '0');

}

main();