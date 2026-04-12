require('dotenv').config();
const express = require('express');

const app = express();
const classifyRoutes = require('./routes/classifyRoute');

app.use('/api', classifyRoutes);

//Root route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Example endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});