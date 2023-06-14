//star the app this is the main file

const app = require('./server');

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
});