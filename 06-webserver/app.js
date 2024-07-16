import express from 'express';
import path from 'path';
import hbs from 'hbs';
import 'dotenv/config'

import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Yehismar Carvajal',
        titulo: 'Course Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Yehismar Carvajal',
        titulo: 'Course Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Yehismar Carvajal',
        titulo: 'Course Node'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/generic.html'));
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/elements.html'));
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/404.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});