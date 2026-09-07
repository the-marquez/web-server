
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

    console.log(`${req.method} ${req.url}`);

    if(req.url === "/" && req.method === "GET") {

        const indexHtml = fs.readFileSync("./public/index.html", "utf-8");

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(indexHtml);
        return;
    }
    else if(req.url === "/about" && req.method === "GET") {

        const aboutHtml = fs.readFileSync("./public/about.html", "utf-8");
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(aboutHtml);
        return;
    }

    const notFoundHtml = fs.readFileSync("./public/notfound.html", "utf-8");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(notFoundHtml);

});

server.listen(3000, () => {
    console.log("Server running: http://localhost:3000");
});