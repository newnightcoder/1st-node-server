const http = require("http");

const port = 1234;

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
      `<body style="height:100vh; width:100vw; background-color:black; display:flex; justify-content:center; align-items:center">
  <h1 style="color:deepskyblue">Hello World!!</h1>
  </body>`
    );
  })
  .listen(port, (error) => {
    if (error) {
      console.log("problem", error);
    } else {
      console.log(`server running at port ${port}!`);
    }
  });
