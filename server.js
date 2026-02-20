const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// API route
app.get("/api/movies", (req, res) => {
    res.json([
        { title: "The Shawshank Redemption", rating: 9.3 },
        { title: "The Godfather", rating: 9.2 },
        { title: "The Dark Knight", rating: 9.0 }
    ]);
});

// IMPORTANT: use process.env.PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});