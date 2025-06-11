
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the GhostForge page as the default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ghostforge.html'));
});

app.listen(PORT, () => {
  console.log(`Spectra deployed at http://localhost:${PORT}`);
});
