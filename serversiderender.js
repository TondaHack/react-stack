var express = require('express');
var app = express();
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    var React = require('react');
    var ReactDOMServer = require('react-dom/server');
    var element = React.createElement('div', null, 'Hello World!');

    res.render('index', { body: ReactDOMServer.renderToString(element) })
});

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});