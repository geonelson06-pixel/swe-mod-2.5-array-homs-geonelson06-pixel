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
// PART 4: reduce
// ===================================

// Example: Calculate total plays across all songs
const totalPlays = songs.reduce((sum, song) => {
  return sum + song.plays;
}, 0);  // 0 is the starting value
console.log(totalPlays);

// Step-by-step breakdown:
// 1st: sum=0, song="As It Was", return 0 + 1500000 = 1500000
// 2nd: sum=1500000, song="Anti-Hero", return 1500000 + 2000000 = 3500000
// 3rd: sum=3500000, song="Flowers", return 3500000 + 1800000 = 5300000
// 4th: sum=5300000, song="Watermelon Sugar", return 5300000 + 1200000 = 6500000
// 5th: sum=6500000, song="Calm Down", return 6500000 + 950000 = 8450000

// Example: Count songs from 2022
const songsFrom2022 = songs.reduce((count, song) => {
  if (song.year === 2022) {
    return count + 1;
  }
  return count;
}, 0);
console.log(songsFrom2022);


// GUIDED PRACTICE 5
// Task 1: Calculate the average play count
// Hint: First sum all plays, then divide by songs.length



// Task 2: Count how many songs are by Harry Styles
// Hint: Start at 0, add 1 when artist matches



// Task 3: Find the highest play count
// Hint: Start with 0, compare each song's plays to current max

