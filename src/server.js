const app = require('./app.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT);
console.log(`server listening at ${PORT}`);
