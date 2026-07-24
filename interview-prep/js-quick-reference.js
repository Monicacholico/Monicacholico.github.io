// ============================================================
// JS Quick Reference — Review before the interview
// ============================================================
// This isn't a test — it's a cheat sheet. Read through it,
// run the examples, and make sure nothing surprises you.
// ============================================================


// ─── Map (hash map) ───
const map = new Map();
map.set('key', 'value');
map.get('key');           // 'value'
map.has('key');           // true
map.delete('key');
map.size;                 // 0

// Iterating a Map
const counts = new Map([['a', 3], ['b', 1], ['c', 2]]);
for (const [key, value] of counts) {
  // key = 'a', value = 3, etc.
}


// ─── Set (unique values) ───
const set = new Set([1, 2, 2, 3]);
set.size;                 // 3
set.has(2);               // true
set.add(4);
set.delete(1);
[...set];                 // convert to array: [2, 3, 4]


// ─── Array methods you'll use constantly ───

const nums = [3, 1, 4, 1, 5, 9];

// .filter() — keep items that match
nums.filter(n => n > 3);              // [4, 5, 9]

// .map() — transform each item
nums.map(n => n * 2);                 // [6, 2, 8, 2, 10, 18]

// .reduce() — accumulate into a single value
nums.reduce((sum, n) => sum + n, 0);  // 23

// .sort() — CAREFUL: default sort is lexicographic!
[10, 9, 2, 20].sort();                // [10, 2, 20, 9] ← WRONG for numbers
[10, 9, 2, 20].sort((a, b) => a - b); // [2, 9, 10, 20] ← correct ascending
[10, 9, 2, 20].sort((a, b) => b - a); // [20, 10, 9, 2] ← descending

// .find() — first match
nums.find(n => n > 4);                // 5

// .findIndex() — index of first match
nums.findIndex(n => n > 4);           // 4

// .includes() — does it contain?
nums.includes(9);                     // true

// .some() / .every() — any/all match?
nums.some(n => n > 8);                // true
nums.every(n => n > 0);               // true

// .flat() — flatten nested arrays
[[1, 2], [3, 4]].flat();              // [1, 2, 3, 4]

// .forEach() — side effects only, no return value
nums.forEach(n => console.log(n));


// ─── String methods ───

const str = "Hello, World!";

str.split(', ');           // ["Hello", "World!"]
str.includes('World');     // true
str.indexOf('World');      // 7
str.slice(0, 5);           // "Hello"
str.toLowerCase();         // "hello, world!"
str.trim();                // removes whitespace from both ends
str.replace('World', 'NYT'); // "Hello, NYT!"
str.replaceAll('.', '');   // removes all dots

"abc".padStart(5, '0');    // "00abc"
"hello world".split(' ').join('-'); // "hello-world"


// ─── Object methods ───

const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);          // ["a", "b", "c"]
Object.values(obj);        // [1, 2, 3]
Object.entries(obj);       // [["a",1], ["b",2], ["c",3]]

// Destructuring
const { a, b } = obj;      // a = 1, b = 2

// Spread
const obj2 = { ...obj, d: 4 }; // { a:1, b:2, c:3, d:4 }


// ─── Destructuring & Spread with Arrays ───

const [first, second, ...rest] = [10, 20, 30, 40];
// first = 10, second = 20, rest = [30, 40]

const merged = [...[1, 2], ...[3, 4]]; // [1, 2, 3, 4]


// ─── Useful patterns for interviews ───

// Frequency counter (how many times each item appears)
function countFrequency(arr) {
  const freq = new Map();
  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
  }
  return freq;
}
console.log(countFrequency(['a', 'b', 'a', 'c', 'b', 'a']));
// Map { 'a' => 3, 'b' => 2, 'c' => 1 }

// Group by key
function groupBy(arr, keyFn) {
  const groups = {};
  for (const item of arr) {
    const key = keyFn(item);
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  }
  return groups;
}
const people = [
  { name: 'Alice', dept: 'eng' },
  { name: 'Bob', dept: 'design' },
  { name: 'Carol', dept: 'eng' },
];
console.log(groupBy(people, p => p.dept));
// { eng: [Alice, Carol], design: [Bob] }


// ─── Complexity cheat sheet ───
// O(1)       — hash map lookup, array index access
// O(n)       — single loop through array
// O(n log n) — sorting
// O(n²)      — nested loops (try to avoid)
//
// When they ask "what's the complexity?":
// 1. Count your loops
// 2. Map/Set operations are O(1) each
// 3. .sort() is O(n log n)
// 4. .filter() + .map() is O(n) + O(n) = O(n)
