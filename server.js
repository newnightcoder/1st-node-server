const http = require("http");

const port = 1234;

const server = http.createServer((req, res) => {
  res.write(
    `<body 
        style="height:100vh; width:100vw; background-color:black; display:flex; justify-content:center; align-items:center"
        >
        <h1 style="color:deepskyblue; font-family:"courier">
            Hello World!!
        </h1>
    </body>`
  );
  res.end();
});

server.listen(port, (error) => {
  if (error) {
    console.log("problem", error);
  } else {
    console.log(`server listening on port ${port}!`);
  }
});
