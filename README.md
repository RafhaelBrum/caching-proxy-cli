# Caching Proxy CLI

> roadmap.sh backend project – https://roadmap.sh/projects/caching-server

A command-line interface (CLI) proxy server that caches responses from an origin server. Forward requests to the origin, store responses in memory, and serve from cache on repeated requests.

---

## ✅ Features

- Start a local caching proxy server via CLI
- Forward requests to a specified origin URL
- Cache responses in memory using a JavaScript Map
- Serve repeated requests from cache
- Add `X-Cache: HIT` or `MISS` headers to every response
- Clear the in-memory cache via CLI

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Axios (for origin requests)
- Native `http` module (no Express)
- In-memory caching with `Map`

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/RafhaelBrum/caching-proxy-cli.git
cd caching-proxy-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npx tsc
```

### 4. Start the proxy server

```bash
npx ts-node src/index.ts --port 3000 --origin http://dummyjson.com
```

This will start the proxy server at [http://localhost:3000](http://localhost:3000).

---

## 📘 Usage

### Forwarding requests

```bash
npx ts-node src/index.ts --port 3000 --origin http://dummyjson.com
```

Then visit:

```
http://localhost:3000/products
```

- The first request will return `X-Cache: MISS`
- Subsequent requests will return `X-Cache: HIT`

### Clear the cache

```bash
npx ts-node src/index.ts --clear-cache
```

---

## ⚠️ Notes

- Only supports `GET` requests
- Cache is in-memory and resets when the app restarts
- Useful for learning about reverse proxies and caching logic

---

## 📄 License

This project is for educational purposes only. Free to use and modify.
