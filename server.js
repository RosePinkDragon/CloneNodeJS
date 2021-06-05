const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url); //returns the current url

  // **Sending data to server
  // res.write("<p>Hello Guys</p>");
  // res.write("<p>This comes from the server</p>");
  // res.end();

  // fs.readFile("./views/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   res.write(data);
  //   res.end();
  // });

  res.setHeader("Content-Type", "text/html");
  // ** basic routing
  let route = "./views/";
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      route += "index.html"; // ./views/index.html
      break;
    case "/about":
      res.statusCode = 200;
      route += "about.html"; // ./views/index.html
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      // route += "about.html"; // ./views/index.html
      break;
    default:
      route += "404.html"; // ./views/404.html
      res.statusCode = 404;
  }

  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    // res.write(data);
    res.end(data);
  });
});

server.listen(4000, "localhost", () => {
  console.log("listening currently on port 4000");
}); //this intializes the server
