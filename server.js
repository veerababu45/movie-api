const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const API_KEY = "YOUR_TMDB_API_KEY";

// root test
app.get("/", (req, res) => {
    res.send("Movie API running");
});

// get top rated movies
app.get("/api/movies", async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );

        res.json(response.data.results);

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running");
});