// serve.mjs — minimal dependency-free static file server for the boot test.
// usage: node tools/serve.mjs [--port 8791] [--root .]
//
// Serves the mirror root (the repo root) on loopback with directory indexing
// (GET /x/ -> x/index.html), which is what the origin's sub-path deploy needs:
// the captured site lives under tokyo/, so /tokyo/ must map to tokyo/index.html
// exactly as it does upstream. Exists so a boot test needs no npx/network.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const argVal = (name, dflt) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt;
};
const PORT = Number(argVal("--port", "8791"));
const ROOT = path.resolve(argVal("--root", path.resolve(here, "..")));

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".bin": "application/octet-stream",
  ".wasm": "application/wasm",
};

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let rel = urlPath.replace(/^\/+/, "");
    let abs = path.join(ROOT, rel);
    if (!path.resolve(abs).startsWith(ROOT)) {
      res.writeHead(403).end("forbidden");
      return;
    }
    try {
      let st = fs.statSync(abs);
      if (st.isDirectory()) {
        abs = path.join(abs, "index.html");
        st = fs.statSync(abs);
      }
      const body = fs.readFileSync(abs);
      res.writeHead(200, {
        "content-type": TYPES[path.extname(abs).toLowerCase()] ?? "application/octet-stream",
        "content-length": body.length,
        "cache-control": "no-cache",
      });
      res.end(body);
      console.log(`200 ${urlPath} (${body.length} B)`);
    } catch {
      res.writeHead(404, { "content-type": "text/plain" }).end("404");
      console.log(`404 ${urlPath}`);
    }
  })
  .listen(PORT, "127.0.0.1", () => console.log(`serving ${ROOT} on http://127.0.0.1:${PORT}/`));
