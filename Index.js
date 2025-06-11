// Import express
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ghostforge.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Spectra is live at http://localhost:${PORT}`);
});
