const fs = require("fs");
const path = require("path");

// Ensure api folder exists
const apiDir = path.join(__dirname, "api");
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir);
}

// Copy dist/server.js to api/server.js
fs.copyFileSync(
  path.join(__dirname, "dist", "server.js"),
  path.join(apiDir, "server.js")
);

console.log("✅ server.js copied to api/server.js");
