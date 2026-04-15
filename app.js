app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
require('dotenv').config();
const express = require('express');

const app = express();
const classifyRoutes = require('./routes/classifyRoute');
// Root route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});


app.use('/api', classifyRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


