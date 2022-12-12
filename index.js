const fs = require("fs");
const http = require("http");

fs.writeFile(
  "index.html",
  "<h1>Hello World</h1> \n <p>This is Harish Kumar Gattu...</p>",
  (err) => {
    console.log(err);
  }
);

const server = http.createServer((req, res) => {
  var html = fs.readFileSync("index.html");
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
  res.write(html);

  res.end();
});

server.listen(5000, () => {
  console.log("server is up at 5000");
});
