// src/ -> docs/ (GitHub Pages)
const fs = require("fs");
const path = require("path");
const src = path.join(__dirname, "..", "src");
const out = path.join(__dirname, "..", "docs");
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(src, out, { recursive: true, filter: (p) => !p.endsWith(".map") && !p.endsWith("scss") && !p.includes(path.sep + "scss") });
console.log("docs/ updated");
