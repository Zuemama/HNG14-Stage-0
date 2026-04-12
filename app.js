require('dotenv').config();
const express = require('express');

const app = express();
const classifyRoutes = require('./routes/classifyRoute');

app.use('/api', classifyRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));