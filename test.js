const fs = require("fs");
const requiredFiles = ["src/index.html", "src/style.css","src/app.js"];
let allPresent = true;
requiredFiles.forEach((file) => {
if (!fs.existsSync(file)) {
console.error(`Missing file: ${file}`);
allPresent = false;
}
});
if (!allPresent) {
process.exit(1);
}
console.log("All required files present. Test passed.");