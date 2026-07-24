// ============================================================
// NYT News Stories — CoderPad Practice Problems
// ============================================================
// Work through these in order. For each one:
// 1. Read the problem, restate it in your own words
// 2. Write a plan in comments BEFORE coding
// 3. Talk out loud as if someone is watching
// 4. Write tests and check edge cases
// 5. State the time/space complexity
// 6. Only THEN check the solution at the bottom
// ============================================================


// ─────────────────────────────────────────────────────────────
// PROBLEM 1: Dedupe Ints (Warm-up — ~5 min)
// ─────────────────────────────────────────────────────────────
// Given an array of integers, return a new array with duplicates
// removed, preserving the order of first occurrence.
//
// Examples:
//   dedupe([1, 2, 2, 3, 1])       → [1, 2, 3]
//   dedupe([5, 5, 5, 5])          → [5]
//   dedupe([])                     → []
//   dedupe([1, 2, 3])             → [1, 2, 3]

function dedupe(arr) {
  // YOUR CODE HERE
  const seen = new Set();
  const result = [];
  for (const num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }
  return result;
}

// Tests
console.log('--- Dedupe Ints ---');
console.log(JSON.stringify(dedupe([1, 2, 2, 3, 1])), '→ expected [1,2,3]');
console.log(JSON.stringify(dedupe([5, 5, 5, 5])), '→ expected [5]');
console.log(JSON.stringify(dedupe([])), '→ expected []');
console.log(JSON.stringify(dedupe([1, 2, 3])), '→ expected [1,2,3]');


// ─────────────────────────────────────────────────────────────
// PROBLEM 2: Two Sum (~10 min)
// ─────────────────────────────────────────────────────────────
// Given an array of integers and a target sum, return the indices
// of the two numbers that add up to the target.
// Assume exactly one solution exists. Don't use the same element twice.
//
// Examples:
//   twoSum([2, 7, 11, 15], 9)     → [0, 1]  (because 2 + 7 = 9)
//   twoSum([3, 2, 4], 6)          → [1, 2]  (because 2 + 4 = 6)
//   twoSum([3, 3], 6)             → [0, 1]

function twoSum(nums, target) {
  // YOUR CODE HERE

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
    console.log("Here:", nums[i], "→", i, "| Map so far:", map);
  }
}

twoSum([2, 7, 11, 15], 9);
console.log('\n--- Two Sum ---');
console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)), '→ expected [0,1]');
console.log(JSON.stringify(twoSum([3, 2, 4], 6)), '→ expected [1,2]');
console.log(JSON.stringify(twoSum([3, 3], 6)), '→ expected [0,1]');


// ─────────────────────────────────────────────────────────────
// PROBLEM 3: Unique Emails (~10 min)
// ─────────────────────────────────────────────────────────────
// Every valid email has a local name and domain: local@domain.
// Rules for the LOCAL name only:
//   - Dots (.) are ignored: "a.b" = "ab"
//   - Everything after a plus (+) is ignored: "a+x" = "a"
// The domain is unchanged.
//
// Given a list of emails, return the count of unique addresses.
//
// Examples:
//   uniqueEmails([
//     "test.email+alex@nytimes.com",
//     "test.e.mail+bob@nytimes.com",
//     "testemail@nytimes.com"
//   ]) → 1  (all normalize to "testemail@nytimes.com")
//
//   uniqueEmails([
//     "a@nytimes.com",
//     "b@nytimes.com"
//   ]) → 2

function uniqueEmails(emails) {
  // YOUR CODE HERE
  const normalized = new Set();
  for (const email of emails) {
    const [local, domain] = email.split('@');
    console.log(`Processing: local="${local}", domain="${domain}"`);
    const cleanLocal = local.split('+')[0].replaceAll('.', '');
    normalized.add(cleanLocal + '@' + domain);
  }
  console.log('Normalized emails:', normalized.size, normalized);
  return normalized.size;
}

console.log('\n--- Unique Emails ---');
console.log(uniqueEmails([
  "test.email+alex@nytimes.com",
  "test.e.mail+bob@nytimes.com",
  "testemail@nytimes.com"
]), '→ expected 1');
console.log(uniqueEmails([
  "a@nytimes.com",
  "b@nytimes.com"
]), '→ expected 2');
console.log(uniqueEmails([]), '→ expected 0');


// ─────────────────────────────────────────────────────────────
// PROBLEM 4: Max Non-Repeating Substring (~15 min)
// ─────────────────────────────────────────────────────────────
// Given a string, find the length of the longest substring
// without repeating characters.
//
// This uses the "sliding window" pattern:
// - Maintain a window [start, end] that only contains unique chars
// - Expand end forward; if you see a duplicate, shrink start
// - Track the max window size
//
// Examples:
//   maxNonRepeating("abcabcbb")   → 3  ("abc")
//   maxNonRepeating("bbbbb")      → 1  ("b")
//   maxNonRepeating("pwwkew")     → 3  ("wke")
//   maxNonRepeating("")           → 0

function maxNonRepeating(s) {
  // YOUR CODE HERE
  const lastSeen = new Map(); // char → last index
  let start = 0;
  let maxLen = 0;
  
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (lastSeen.has(char) && lastSeen.get(char) >= start) {
      start = lastSeen.get(char) + 1;
    }
    lastSeen.set(char, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

console.log('\n--- Max Non-Repeating Substring ---');
console.log(maxNonRepeating("abcabcbb"), '→ expected 3');
console.log(maxNonRepeating("bbbbb"), '→ expected 1');
console.log(maxNonRepeating("pwwkew"), '→ expected 3');
console.log(maxNonRepeating(""), '→ expected 0');
console.log(maxNonRepeating("abcdef"), '→ expected 6');


// ─────────────────────────────────────────────────────────────
// PROBLEM 5: Bylines — Article Data Transform (~15 min)
// ─────────────────────────────────────────────────────────────
// THIS IS THE MOST LIKELY QUESTION FORMAT.
//
// Given an array of article objects, produce a summary object
// where each author maps to:
//   - articleCount: number of articles they authored/co-authored
//   - sections: array of unique sections they've appeared in
//
// Example input:
//   [
//     { id: 1, authors: ["Sarah", "Mike"], section: "world" },
//     { id: 2, authors: ["Sarah"], section: "opinion" },
//     { id: 3, authors: ["Mike"], section: "world" },
//     { id: 4, authors: ["Lisa"], section: "tech" },
//     { id: 5, authors: ["Sarah", "Lisa"], section: "politics" }
//   ]
//
// Expected output:
//   {
//     "Sarah": { articleCount: 3, sections: ["world", "opinion", "politics"] },
//     "Mike":  { articleCount: 2, sections: ["world"] },
//     "Lisa":  { articleCount: 2, sections: ["tech", "politics"] }
//   }
//
// Edge cases to consider:
//   - Empty array → {}
//   - Article with no authors → skip
//   - Same author appears in same section multiple times → section listed once

function summarizeBylines(articles) {
  // YOUR CODE HERE
  const summary = {};
  
  for (const article of articles) {
    if (!article.authors) continue;
    for (const author of article.authors) {
      if (!summary[author]) {
        summary[author] = { articleCount: 0, sections: new Set() };
      }
      summary[author].articleCount++;
      summary[author].sections.add(article.section);
    }
  }

  // Convert sets to arrays for output
  for (const author in summary) {
    summary[author].sections = Array.from(summary[author].sections);
  }

  return summary; 
}

console.log('\n--- Bylines ---');
const articles = [
  { id: 1, authors: ["Sarah", "Mike"], section: "world" },
  { id: 2, authors: ["Sarah"], section: "opinion" },
  { id: 3, authors: ["Mike"], section: "world" },
  { id: 4, authors: ["Lisa"], section: "tech" },
  { id: 5, authors: ["Sarah", "Lisa"], section: "politics" }
];
console.log(JSON.stringify(summarizeBylines(articles), null, 2));
// Sarah: 3 articles, sections: world, opinion, politics
// Mike: 2 articles, sections: world
// Lisa: 2 articles, sections: tech, politics

console.log(JSON.stringify(summarizeBylines([])), '→ expected {}');


// ─────────────────────────────────────────────────────────────
// PROBLEM 6: Bylines Extended — Most Prolific Author (~10 min)
// ─────────────────────────────────────────────────────────────
// Using the same data, find the author with the most articles.
// If there's a tie, return any one of them.
//
// This tests: can you build on a previous solution?

function mostProlificAuthor(articles) {
  // YOUR CODE HERE
  // Hint: you can reuse summarizeBylines, or solve from scratch
  const summary = summarizeBylines(articles);
  let maxCount = 0;
  let topAuthor = null;

  for (const [author, data] of Object.entries(summary)) {
    if (data.articleCount > maxCount) {
      maxCount = data.articleCount;
      topAuthor = author;
    }
  }
  return topAuthor;
}

console.log('\n--- Most Prolific Author ---');
console.log(mostProlificAuthor(articles), '→ expected "Sarah"');
console.log(mostProlificAuthor([]), '→ expected null or ""');


// ─────────────────────────────────────────────────────────────
// PROBLEM 7: Filter & Transform Pipeline (~10 min)
// ─────────────────────────────────────────────────────────────
// Given an array of article objects with a publishedAt date string:
//
//   [
//     { id: 1, title: "Breaking News", section: "world", publishedAt: "2026-05-20" },
//     { id: 2, title: "Opinion Piece", section: "opinion", publishedAt: "2026-05-18" },
//     { id: 3, title: "Tech Review", section: "tech", publishedAt: "2026-05-20" },
//     { id: 4, title: "World Update", section: "world", publishedAt: "2026-05-19" },
//   ]
//
// Write a function that:
//   1. Filters to only articles in a given section
//   2. Sorts by publishedAt descending (newest first)
//   3. Returns an array of just the titles
//
// Example:
//   getRecentTitles(articles, "world") → ["Breaking News", "World Update"]

function getRecentTitles(articles, section) {
  // YOUR CODE HERE
  
}

console.log('\n--- Filter & Transform ---');
const articles2 = [
  { id: 1, title: "Breaking News", section: "world", publishedAt: "2026-05-20" },
  { id: 2, title: "Opinion Piece", section: "opinion", publishedAt: "2026-05-18" },
  { id: 3, title: "Tech Review", section: "tech", publishedAt: "2026-05-20" },
  { id: 4, title: "World Update", section: "world", publishedAt: "2026-05-19" },
];
console.log(JSON.stringify(getRecentTitles(articles2, "world")), '→ expected ["Breaking News","World Update"]');
console.log(JSON.stringify(getRecentTitles(articles2, "opinion")), '→ expected ["Opinion Piece"]');
console.log(JSON.stringify(getRecentTitles(articles2, "sports")), '→ expected []');


// ============================================================
// SOLUTIONS — Don't look until you've attempted each problem!
// ============================================================
// Scroll down...
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
// ─── SOLUTION 1: Dedupe Ints ───
function dedupe(arr) {
  const seen = new Set();
  const result = [];
  for (const num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }
  return result;
  // Time: O(n), Space: O(n)
}
// One-liner alternative: [...new Set(arr)]
// But the manual version shows you understand what Set does.


// ─── SOLUTION 2: Two Sum ───
function twoSum(nums, target) {
  const seen = new Map(); // value → index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
  // Time: O(n), Space: O(n)
}


// ─── SOLUTION 3: Unique Emails ───
function uniqueEmails(emails) {
  const normalized = new Set();
  for (const email of emails) {
    const [local, domain] = email.split('@');
    const cleanLocal = local.split('+')[0].replaceAll('.', '');
    normalized.add(cleanLocal + '@' + domain);
  }
  return normalized.size;
  // Time: O(n * m) where m is avg email length, Space: O(n)
}


// ─── SOLUTION 4: Max Non-Repeating Substring ───
function maxNonRepeating(s) {
  const lastSeen = new Map(); // char → last index
  let start = 0;
  let maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (lastSeen.has(char) && lastSeen.get(char) >= start) {
      start = lastSeen.get(char) + 1;
    }
    lastSeen.set(char, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
  // Time: O(n), Space: O(min(n, alphabet size))
}


// ─── SOLUTION 5: Bylines ───
function summarizeBylines(articles) {
  const summary = {};

  for (const article of articles) {
    if (!article.authors) continue;

    for (const author of article.authors) {
      if (!summary[author]) {
        summary[author] = { articleCount: 0, sections: new Set() };
      }
      summary[author].articleCount++;
      summary[author].sections.add(article.section);
    }
  }

  // Convert Sets to arrays for output
  for (const author in summary) {
    summary[author].sections = [...summary[author].sections];
  }

  return summary;
  // Time: O(a * b) where a = articles, b = avg authors per article
  // Space: O(unique authors * unique sections)
}


// ─── SOLUTION 6: Most Prolific Author ───
function mostProlificAuthor(articles) {
  const summary = summarizeBylines(articles);
  let maxCount = 0;
  let topAuthor = null;

  for (const [author, data] of Object.entries(summary)) {
    if (data.articleCount > maxCount) {
      maxCount = data.articleCount;
      topAuthor = author;
    }
  }
  return topAuthor;
  // Time: O(a * b + unique authors), Space: O(unique authors)
}


// ─── SOLUTION 7: Filter & Transform Pipeline ───
function getRecentTitles(articles, section) {
  return articles
    .filter(a => a.section === section)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(a => a.title);
  // Time: O(n log n) due to sort, Space: O(n)
}
// Note: localeCompare works for ISO date strings (YYYY-MM-DD)
// because they sort lexicographically the same as chronologically.
*/
