const http = require('http');
const url = require('url');

const httpServer = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    const pathname = parsedUrl.pathname;
    const trimedPath = pathname.replace(/^\/+|\/+$/g, "");

    const method = req.method;

    const queryString = parsedUrl.query;
    console.log("query obj", queryString);

    const headers = req.headers;
    console("headers obj", headers);

    res.setHeader("content-type, application/json");
    res.write(JSON.stringify({response: "request got to server"}));
    res.end();

    res.write('the write: request got to server');
    res.end();
    console.log(`the url visited was ${trimedPath} an method ${method}`);

});

httpServer.listen(8000, () => {
    console.log('server is listening on port 8000')
})