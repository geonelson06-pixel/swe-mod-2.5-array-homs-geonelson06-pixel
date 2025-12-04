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
// PART 5: find
// ===================================

// Example: Find a specific song
const antiHero = songs.find(song => song.title === "Anti-Hero");
console.log(antiHero);

// Example: Find first song from before 2020
const oldSong = songs.find(song => song.year < 2020);
console.log(oldSong);

// Example: What if nothing matches?
const notFound = songs.find(song => song.title === "Blinding Lights");
console.log(notFound);  // undefined

// Example: Find and update (reference types!)
const songToUpdate = songs.find(song => song.title === "Flowers");
songToUpdate.plays = songToUpdate.plays + 1;
console.log(songs[2].plays);  // Original array is updated!


// GUIDED PRACTICE 4
// Task 1: Find the song "Calm Down"



// Task 2: Find a song by Taylor Swift



// Task 3: Find "Watermelon Sugar" and increase its plays by 50000
// Hint: First find it, then update the plays property



// Task 4: Try to find a song called "Levitating" (which doesn't exist)
// What gets returned?
