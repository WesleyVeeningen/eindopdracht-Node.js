// hier geef ik aan dat ik express, body-parser, fs, ejs en app gebruik
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { exit } = require('process');
const ejs = require('ejs');
const app = express();
// hier zet ik de poort op 3000
const port = 3000;

// hier geef ik aan dat ik de public map gebruik en dat ik de body-parser gebruik
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// hier laat ik de index.html inladen als iemand er naar toe gaat via een nav
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// hier laat ik de about.html inladen als iemand er naar toe gaat via een nav
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

// hier laat ik de form.html inladen als iemand er naar toe gaat via een nav
app.get('/form', (req, res) => {
    res.render('form', { error: req.query.error });
});

// hier render ik de thankyou pagina als iemadn de form heeft ingevuld
app.get('/thankyou', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;

    res.render('thankyou', { name, email });
});




app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (name && email) {
        fs.appendFile('formdata.txt', `${name}, ${email}\n`, (err) => {
            if (err) throw err;
            console.log('Form data saved to file!');
        });

        res.redirect(`/thankyou?name=${name}&email=${email}`);  // Update the redirect URL
    } else {
        res.redirect('/form?error=empty');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


