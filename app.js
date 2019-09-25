//variabled that will be used
const express = require ('express');
const app = express();
const myjson= require ('./data');
const projects = myjson.projects;


//setting up the middleware and the routes
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req,res) => {
    res.render('index', {projects});
    
});
app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/projects/:id', (req,res) => {
    const {id} = req.params

    const project = projects[id]
    res.render('project', {project});
    
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
