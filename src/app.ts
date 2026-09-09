
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
    }else if(req.url === "/custom" && req.method === "GET") {
        const customHtml = fs.readFileSync("./public/custom.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(customHtml);
        return;
    }

    if(req.url?.endsWith(".css") && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/css" });
        const cssFile = fs.readFileSync(`./public${req.url}`, "utf-8");
        res.end(cssFile);
        return;
    }
    if(req.url?.endsWith(".js") && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const jsFile = fs.readFileSync(`./public${req.url}`, "utf-8");
        res.end(jsFile);
        return;
    }
    if(req.url?.endsWith(".png") && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "image/png" });
        const pngFile = fs.readFileSync(`./public${req.url}`, "utf-8");
        res.end(pngFile);
        return;
    }

    const notFoundHtml = fs.readFileSync("./public/notfound.html", "utf-8");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(notFoundHtml);

});

server.listen(3000, () => {
    console.log("Server running: http://localhost:3000");
});