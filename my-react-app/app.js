const express = require('express');
const cors = require('cors');
const stoneRouter = require('./routes/stone.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', stoneRouter);

app.listen(PORT, () => {
    console.log(`Сервер працює на порті http://localhost:%s`, PORT);
});
