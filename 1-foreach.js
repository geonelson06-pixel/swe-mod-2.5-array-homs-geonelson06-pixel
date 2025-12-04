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
// PART 1: forEach
// ===================================

// Example: Log each song title
songs.forEach(song => {
  console.log(song.title);
});

// Example: Log title and artist
songs.forEach(song => {
  console.log(`${song.title} by ${song.artist}`);
});


// GUIDED PRACTICE 1
// Task 1: Use forEach to log each song's year
// Format: "As It Was - 2022"



// Task 2: Use forEach to log songs with over 1 million plays
// Only log if plays > 1000000
// Format: "Anti-Hero has 2000000 plays"

