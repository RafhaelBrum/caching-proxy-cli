// npx tsc src/index.ts --port 3000 --origin http://dummyjson.com
// npx ts-node src/index.ts --clear-cache

const portIndex = process.argv.indexOf('--port');
const originIndex = process.argv.indexOf('--origin');

if (process.argv[2] === '--clear-cache') {
    console.log('call clearCache()');
}
else if (portIndex !== -1 && originIndex !== -1) {
    const port = process.argv[portIndex + 1];
    const origin = process.argv[originIndex + 1];

    console.log('call startProxyServer(port, origin)');
} else {
    console.log('Invalid parameters')
};