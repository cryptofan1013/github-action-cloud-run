const http = require("http");

function requestHandler(req, res) {
  res.write("A simple project hosted by GCP.");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("Soon, it will be replaced by Rafiki Testnet.");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("\n");
  res.write("Please wait...");
  res.end();
}

const server = http.createServer(requestHandler);
const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`listening on port ${port}`));
