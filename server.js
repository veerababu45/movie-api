const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

const movies = [];
const genres = ["Action", "Drama", "Comedy", "Sci-Fi", "Crime", "Adventure", "Thriller"];

for (let i = 1; i <= 250; i++) {
  movies.push({
    id: i,
    title: `Top IMDb Movie ${i}`,
    year: 1950 + (i % 75),
    rating: (8 + (i % 20) / 10).toFixed(1),
    genre: genres[i % genres.length],
    img_link: `https://picsum.photos/seed/movie${i}/200/300`
  });
}

app.get("/", (req, res) => {
  res.json({
    total: movies.length,
    movies: movies
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});