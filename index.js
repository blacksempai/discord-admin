require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || '25505';
app.listen(port, () => console.log(`App has been started on port ${port}...`));