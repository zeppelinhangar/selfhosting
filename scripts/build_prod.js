const fs = require("fs");
const pathLib = require("path");
const BUILD_DIR = pathLib.join("build");
const TBD_TEMPLATE = "<WIP>";

function recursiveCheckDir(path) {
  if (!fs.existsSync(path)) return;
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const pt = pathLib.join(path, file);
    if (fs.lstatSync(pt).isDirectory()) {
      recursiveCheckDir(pt);
    }
    else {
      const content = fs.readFileSync(pt, "utf8");
      if (content.includes(TBD_TEMPLATE)) {
        fs.unlinkSync(pt);
        // fs.writeFileSync(pt, '');
      }
    }
  });
  if (fs.lstatSync(path).isDirectory() && fs.existsSync(path)) {
    const fileCount = fs.readdirSync(path).length;
    if (fileCount === 0) fs.rmdirSync(path);
  }
}

function checkup() {
  if (!process.env.PRODUCTION) return;
  recursiveCheckDir(BUILD_DIR);
}
checkup();
