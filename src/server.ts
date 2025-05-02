import http from 'http';
import axios from 'axios';
import { getFromCache, saveToCache } from "./cache";

export function startProxyServer(port: number, origin: string) {
    const server = http.createServer(async (req, res) => {
        if (req.method !== 'GET' || !req.url) {
            res.writeHead(405);
            res.end('Only GET requests are supported');
            return;
        }

        const fullUrl = origin + req.url;
        const cachedData = getFromCache(fullUrl);

        if (cachedData) {
            res.writeHead(200, { 'Content-Type': 'application/json', 'X-Cache': 'HIT' });
            res.end(JSON.stringify(cachedData));
        } else {
            try {
                const response = await axios.get(fullUrl);
                saveToCache(fullUrl, response.data);

                res.writeHead(200, { 'Content-Type': 'application/json', 'X-Cache': 'MISS' });
                res.end(JSON.stringify(response.data));
            } catch (error) {
                res.writeHead(502);
                res.end('Error fetching from origin');
            }
        }

    });
    server.listen(port, () => {
        console.log(`Proxy server running at http://localhost:${ port }`);
    });
};