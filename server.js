const http = require("http");
const fs = require("fs");
const port = 3300;

let htmlFile, cssFile;

fs.readFile("index.html", (error, data) => {
  if (error) res.writeHead(404);
  htmlFile = data;
});

fs.readFile("styles.css", (err, data) => {
  if (err) res.writeHead(404);
  cssFile = data;
});

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHeader(200, "Content-Type", "text/html");
      res.write(htmlFile);
      res.end();
    }
    if (req.url === "/styles.css") {
      res.writeHeader(200, "Content-Type", "text/css");
      res.write(cssFile);
      res.end();
    }
  })
  .listen(port, (error) => {
    if (error) {
      console.log("problem", error);
    } else {
      console.log(`server running at port ${port}!`);
    }
  });

// http
//   .createServer((req, res) => {
//     switch (req.url) {
//       case "/styles.css":
//         res.writeHeader(200, { "Content-Type": "text/css" });
//         res.write(cssFile);
//         break;
//       default:
//         res.writeHeader(200, { "Content-Type": "text/html" });
//         res.write(htmlFile);
//     }
//     res.end();
//   })
//   .listen(port, (error) => {
//     if (error) {
//       console.log("problem", error);
//     } else {
//       console.log(`server running at port ${port}!`);
//     }
//   });
