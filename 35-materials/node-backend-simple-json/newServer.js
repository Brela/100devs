// this is my version of the server request js file
// the assignment was to try to write a cleaner version of the server.js file

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const fileMap = {
    '/': 'index.html',
    '/otherpage': 'otherpage.html',
    '/otherotherpage': 'otherotherpage.html',
    '/css/style.css': 'css/style.css',
    '/js/main.js': 'js/main.js'
};
// create an HTTP server
const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
            name: params['student'] === 'breland' ? 'breland' : 'unknown',
            status: params['student'] === 'breland' ? 'Boss Man' : 'unknown',
            currentOccupation: params['student'] === 'breland' ? 'Baller' : 'unknown'
        };
        res.end(JSON.stringify(objToJson));
    } else {
        const filePath = fileMap[page];
        if (filePath) {
            fs.readFile(filePath, function (err, data) {
                // set the response header with a 200 status and 'Content-Type' of 'text/html'
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // write an HTML heading to the response body
                res.write(data);
                // end the response
                res.end();
            });
        } else {
            figlet('404!!', function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                res.write(data);
                res.end();
            });
        }
    }
});
// start the server on port 8000
server.listen(8000);



