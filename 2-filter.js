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
// PART 2: filter
// ===================================

// Example: Get songs with over 1.5 million plays
const popularSongs = songs.filter(song => song.plays > 1500000);
console.log(popularSongs);

// Example: Get songs from 2022 or later
const recentSongs = songs.filter(song => song.year >= 2022);
console.log(recentSongs);

// Example: Get songs by Harry Styles
const harryStylesSongs = songs.filter(song => song.artist === "Harry Styles");
console.log(harryStylesSongs);


// GUIDED PRACTICE 2
// Task 1: Get all songs from 2022



// Task 2: Get all songs with less than 1 million plays



// Task 3: Get all songs NOT by Harry Styles
// Hint: Use !== for "not equal"




