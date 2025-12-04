# Array Higher-Order Methods - Cheat Sheet

**Table of Contents:**
- [Quick Method Comparison](#quick-method-comparison)
- [1. forEach - Do Something With Each Item](#1-foreach---do-something-with-each-item)
- [2. filter - Get Items That Pass a Test](#2-filter---get-items-that-pass-a-test)
- [3. map - Transform Each Item](#3-map---transform-each-item)
- [4. find - Get First Matching Item](#4-find---get-first-matching-item)
- [5. reduce - Calculate a Single Value](#5-reduce---calculate-a-single-value)
- [Chaining Methods](#chaining-methods)
- [Decision Tree: Which Method Should I Use?](#decision-tree-which-method-should-i-use)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Arrow Function Syntax Reminder](#arrow-function-syntax-reminder)
- [Quick Reference: What Each Method Returns](#quick-reference-what-each-method-returns)
- [Practice Questions](#practice-questions)

---

## Quick Method Comparison

| Method | Returns | Use When... | Changes Original? |
|--------|---------|-------------|-------------------|
| `forEach` | undefined (nothing) | You want to DO something with each item | No |
| `filter` | New array (≤ original length) | You want items that pass a test | No |
| `map` | New array (= original length) | You want to transform each item | No |
| `find` | One item or `undefined` | You want a single specific item | No* |
| `reduce` | Single value (any type) | You want to calculate an aggregate | No |

*`find` returns a reference to the object, so modifying it changes the original array

---

## 1. forEach - Do Something With Each Item

```javascript
array.forEach(element => {
  // Do something with element
});
```

**Purpose:** Perform an action on each element (like logging, updating external data)

**Returns:** `undefined` (nothing)

**Example:**
```javascript
const songs = [
  { title: "Song A", plays: 1000 },
  { title: "Song B", plays: 2000 }
];

songs.forEach(song => {
  console.log(song.title);
});
// Output: "Song A", "Song B"
```

**When to use:** You need to do something with each item but don't need a new array back

---

## 2. filter - Get Items That Pass a Test

```javascript
const result = array.filter(element => {
  return true/false;  // Test condition
});
```

**Purpose:** Create a new array containing only elements that pass a test

**Returns:** New array (same or fewer items than original)

**Example:**
```javascript
const songs = [
  { title: "Song A", plays: 1500000 },
  { title: "Song B", plays: 500000 }
];

const popular = songs.filter(song => song.plays > 1000000);
// Returns: [{ title: "Song A", plays: 1500000 }]
```

**When to use:** You want a subset of the array based on a condition

**Common patterns:**
```javascript
// Get items with specific property value
array.filter(item => item.status === "active")

// Get items above/below threshold
array.filter(item => item.price > 100)

// Get items NOT matching condition
array.filter(item => item.category !== "archived")
```

---

## 3. map - Transform Each Item

```javascript
const result = array.map(element => {
  return transformedElement;
});
```

**Purpose:** Create a new array by transforming each element

**Returns:** New array (SAME length as original, but with transformed elements)

**Example:**
```javascript
const songs = [
  { title: "Song A", artist: "Artist 1" },
  { title: "Song B", artist: "Artist 2" }
];

const titles = songs.map(song => song.title);
// Returns: ["Song A", "Song B"]

const summaries = songs.map(song => `${song.title} by ${song.artist}`);
// Returns: ["Song A by Artist 1", "Song B by Artist 2"]
```

**When to use:** You want to transform every element in the array

**Common patterns:**
```javascript
// Extract a single property
array.map(item => item.name)

// Transform objects into new objects
array.map(item => ({ id: item.id, name: item.name }))

// Perform calculations
array.map(item => item.price * 1.1)

// Create formatted strings
array.map(item => `${item.name} (${item.year})`)
```

---

## 4. find - Get First Matching Item

```javascript
const result = array.find(element => {
  return true/false;  // Test condition
});
```

**Purpose:** Find and return the FIRST element that passes a test

**Returns:** One element or `undefined` (if nothing matches)

**Example:**
```javascript
const songs = [
  { title: "Song A", artist: "Artist 1" },
  { title: "Song B", artist: "Artist 2" }
];

const songB = songs.find(song => song.title === "Song B");
// Returns: { title: "Song B", artist: "Artist 2" }

const notFound = songs.find(song => song.title === "Song C");
// Returns: undefined
```

**When to use:** You expect ONE specific item and want to find it

**Common patterns:**
```javascript
// Find by ID
array.find(item => item.id === 123)

// Find by unique property
array.find(user => user.email === "user@example.com")

// Find first item matching condition
array.find(item => item.status === "pending")
```

**⚠️ Important:** `find` returns a reference to the object. Modifying it changes the original array!

```javascript
const song = songs.find(s => s.title === "Song A");
song.plays = song.plays + 1;  // This updates the original array!
```

---

## 5. reduce - Calculate a Single Value

```javascript
const result = array.reduce((accumulator, element) => {
  return updatedAccumulator;
}, startingValue);
```

**Purpose:** Combine all elements into a single value

**Returns:** A single value (number, string, object, array, etc.)

**Parameters:**
- `accumulator`: The running total/result (starts with `startingValue`)
- `element`: Current element being processed
- `startingValue`: Initial value for the accumulator

**Example:**
```javascript
const songs = [
  { title: "Song A", plays: 1000000 },
  { title: "Song B", plays: 2000000 }
];

// Sum all plays
const totalPlays = songs.reduce((sum, song) => {
  return sum + song.plays;
}, 0);
// Returns: 3000000

// Count items matching condition
const popularCount = songs.reduce((count, song) => {
  if (song.plays > 1500000) {
    return count + 1;
  }
  return count;
}, 0);
// Returns: 1
```

**When to use:** You want to calculate a single aggregate value from the array

**Common patterns:**
```javascript
// Sum numbers
array.reduce((sum, item) => sum + item.value, 0)

// Find maximum
array.reduce((max, item) => item.value > max ? item.value : max, 0)

// Count items
array.reduce((count, item) => {
  if (item.status === "active") return count + 1;
  return count;
}, 0)

// Build an object
array.reduce((obj, item) => {
  obj[item.id] = item.name;
  return obj;
}, {})
```

**💡 Tip:** Always provide the starting value (second argument) to avoid unexpected behavior!

---

## Chaining Methods

You can chain methods together—the output of one becomes the input of the next:

```javascript
const result = songs
  .filter(song => song.year === 2022)     // Step 1: Get 2022 songs
  .map(song => song.title)                // Step 2: Extract titles
  .sort();                                 // Step 3: Sort alphabetically

// Another example
const total = songs
  .filter(song => song.artist === "Harry Styles")  // Get Harry's songs
  .reduce((sum, song) => sum + song.plays, 0);     // Sum their plays
```

**Mental model:** Think of it as a pipeline—data flows left to right, being transformed at each step

---

## Decision Tree: Which Method Should I Use?

```
What do I need to do?
├─ Do something with each item (log, update external data)
│  └─ Use: forEach
│
├─ Get a subset of items based on a condition
│  └─ Use: filter
│
├─ Transform every item into something else
│  └─ Use: map
│
├─ Find one specific item
│  └─ Use: find
│
└─ Calculate a single value (sum, count, max, etc.)
   └─ Use: reduce
```

---

## Common Mistakes to Avoid

❌ **Confusing filter and map**
```javascript
// Wrong: Using filter to extract properties
const titles = songs.filter(song => song.title);  // Returns full objects!

// Right: Use map to extract properties
const titles = songs.map(song => song.title);
```

❌ **Using find when you need filter**
```javascript
// Wrong: find only returns ONE item
const harryStyles = songs.find(song => song.artist === "Harry Styles");

// Right: filter returns ALL matching items
const harryStyles = songs.filter(song => song.artist === "Harry Styles");
```

❌ **Forgetting return with curly braces**
```javascript
// Wrong: No return statement
const titles = songs.map(song => {
  song.title  // This doesn't return anything!
});

// Right: Add return
const titles = songs.map(song => {
  return song.title;
});

// OR: Remove curly braces (implicit return)
const titles = songs.map(song => song.title);
```

❌ **Forgetting starting value in reduce**
```javascript
// Wrong: No starting value
const total = songs.reduce((sum, song) => sum + song.plays);

// Right: Provide starting value
const total = songs.reduce((sum, song) => sum + song.plays, 0);
```

---

## Arrow Function Syntax Reminder

**Without curly braces (implicit return):**
```javascript
array.map(item => item.name)
// Automatically returns item.name
```

**With curly braces (explicit return needed):**
```javascript
array.map(item => {
  return item.name;  // Must use return keyword
})
```

**With condition:**
```javascript
array.filter(item => {
  if (item.price > 100) {
    return true;
  }
  return false;
})
```

---

## Quick Reference: What Each Method Returns

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n))     // undefined
numbers.filter(n => n > 3)               // [4, 5]
numbers.map(n => n * 2)                  // [2, 4, 6, 8, 10]
numbers.find(n => n > 3)                 // 4
numbers.reduce((sum, n) => sum + n, 0)   // 15
```

---

## Practice Questions

**Given this array:**
```javascript
const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Monitor", price: 300, inStock: true }
];
```

**Which method would you use to:**
1. Get all in-stock products? → `filter`
2. Get an array of product names? → `map`
3. Find the product named "Mouse"? → `find`
4. Calculate total value of in-stock products? → `filter` then `reduce` (or chain them)
5. Log each product name? → `forEach`
