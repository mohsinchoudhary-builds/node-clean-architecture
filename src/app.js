const express = require("express");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

const PORT = 3000;

app.use(healthRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});