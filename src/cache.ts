const cache = new Map();

export function getFromCache(url: string): any | undefined {
    return cache.get(url);
};

export function saveToCache(url: string, data: any): void {
    cache.set(url, data);
};

export function clearCache(): void {
    cache.clear();
    console.log('Cache cleared');
};