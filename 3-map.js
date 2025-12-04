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
// PART 3: map
// ===================================

// Example: Get array of all song titles
const titles = songs.map(song => song.title);
console.log(titles);

// Example: Get array of all artists
const artists = songs.map(song => song.artist);
console.log(artists);

// Example: Create formatted strings
const songSummaries = songs.map(song => {
  return `${song.title} by ${song.artist}`;
});
console.log(songSummaries);

// Example: Create new objects with only some properties
const simplifiedSongs = songs.map(song => {
  return { title: song.title, artist: song.artist };
});
console.log(simplifiedSongs);


// GUIDED PRACTICE 3
// Task 1: Get an array of all the years



// Task 2: Get an array of play counts in millions (divide by 1,000,000)



// Task 3: Create an array of strings: "As It Was (2022)"
// Format: title followed by year in parentheses

