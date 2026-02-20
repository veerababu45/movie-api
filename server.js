const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const movies = require("./movies.json");

// root route
app.get("/", (req, res) => {
    res.send("Movie API running");
});

// get all movies
app.get("/api/movies", (req, res) => {
    res.json(movies);
});

// get single movie
app.get("/api/movies/:rank", (req, res) => {
    const rank = parseInt(req.params.rank);
    const movie = movies.find(m => m.rank === rank);

    if(movie){
        res.json(movie);
    } else {
        res.status(404).json({message: "Movie not found"});
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});