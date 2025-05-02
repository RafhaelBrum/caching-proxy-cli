const cache = new Map();

export function getFromCache(url: String): any | undefined {
    return cache.get(url);
};

export function saveToCache(url: String, data: any): void {
    cache.set(url, data);
};

export function clearCache(): void {
    cache.clear();
};