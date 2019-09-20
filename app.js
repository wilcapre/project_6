const express = require ('express');
const app = express();
// middleware setting
app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('index');
});

//setting routes
app.get('/', (req,res) => {
    res.render('index');
});
app.get('/', (req,res) => {
    res.render('about');
});

//error handler
app.use((req, res, next) => {
    console.log('');
    const err = new Error('Oh no, there has been a mistake!');
    err.status = 500;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);

});




app.listen(3000,() => {
    console.log('The application is running on localhost:3000!')
});
