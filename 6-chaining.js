// ===================================
// DATASET: Music Streaming App
// ===================================

const songs = [
  { title: "As It Was", artist: "Harry Styles", plays: 1500000, year: 2022 },
  { title: "Anti-Hero", artist: "Taylor Swift", plays: 2000000, year: 2022 },
  { title: "Flowers", artist: "Miley Cyrus", plays: 1800000, year: 2023 },
  { title: "Watermelon Sugar", artist: "Harry Styles", plays: 1200000, year: 2019 },
  { title: "Calm Down", artist: "Rema", plays: 950000, year: 2022 }
];

// ===================================
// PART 6: CHAINING METHODS
// ===================================

// Example: Get titles of songs from 2022 with over 1 million plays
const result = songs
  .filter(song => song.year === 2022)
  .filter(song => song.plays > 1000000)
  .map(song => song.title);
console.log(result);

// Example: Total plays of Harry Styles songs
const harryTotalPlays = songs
  .filter(song => song.artist === "Harry Styles")
  .reduce((sum, song) => sum + song.plays, 0);
console.log(harryTotalPlays);


// GUIDED PRACTICE 6
// Task: Get an array of artists who have songs with over 1.5 million plays
// Steps:
// 1. Filter songs with plays > 1500000
// 2. Map to get just the artists
