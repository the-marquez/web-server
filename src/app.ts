
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
    }else if(req.url === "/galeria" && req.method === "GET") {
        const galeriaHtml = fs.readFileSync("./public/galeria.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(galeriaHtml);
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

    // Manejo de imágenes
    if (req.url?.endsWith(".png") && req.method === "GET") {
        
        const imagePath = `./public${req.url}`;

        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.error(err);
                // Si falla, enviamos el 404
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Imagen no encontrada");
            } else {
                // Si tiene éxito, enviamos el 200 y el Buffer binario
                res.writeHead(200, { "Content-Type": "image/png" });
                res.end(data);
            }
        });
        return;
    }

    const notFoundHtml = fs.readFileSync("./public/notfound.html", "utf-8");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(notFoundHtml);

});

server.listen(3000, () => {
    console.log("Server running: http://localhost:3000");
});