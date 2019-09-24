const express = require ('express');
const app = express();
const myjson= require ('./data')

//middleware
app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('index');
});
app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/project', (req,res) => {
    res.render('project', { project: myjson});
});
//error handler for 404 error
app.use((req, res, next) => {

    const err = new Error('Oh no, there has been a mistake!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');

});



//local server on port 3000
app.listen(3000,() => {
    console.log('The frontend server is running on localhost:3000!')
});
