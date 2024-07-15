
import http from 'http';

http.createServer((request, response) => {

    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    response.writeHead(200, { 'Content-Type': 'application/csv'});

    response.write('id, nombre\n');
    response.write('1, Yehismar\n');
    response.write('2, Ehismar\n');
    response.write('3, Rehiner\n');
    response.write('4, Yamileth\n');

    response.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080);