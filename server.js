const http = require('http');
const { getProducts } = require('./controllers/productController')

const server = http.createServer((req, res) => {
    if(req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res);
    } else if(req.url.match(/\/api\/products\/([09])/)) {

    } else {
        res.writeHead(404, {'Content-Type': 'aplication/json'});
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));