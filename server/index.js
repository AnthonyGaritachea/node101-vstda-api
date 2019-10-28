const server = require('./app');

const PORT = process.env.PORT || 8484;

server.listen(PORT, () => console.log(`Server is litening on ${PORT}`));
