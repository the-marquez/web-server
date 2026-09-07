
import http from "http";

const server = http.createServer((req, res) => {

    console.log({ url: req.url });

    if(req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Bienvenidos a mi Web Server!</h1>");
        return;
    }
    else if(req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Acerca de Nosotros</h1>");
        return;
    }

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Pagina No Encontrada!</h1>");
    res.end();

});

server.listen(3000, () => {
    console.log("Server running: http://localhost:3000");
});