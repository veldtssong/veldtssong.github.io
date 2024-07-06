const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
