console.log("DevOps Web App loaded successfully.");
document.getElementById("build-info").innerText =
"Build version: v1 — deployed via GitHub Actions to AWS S3";
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