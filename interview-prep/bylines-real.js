// ============================================================
// NYT Bylines — The Real Interview Question
// ============================================================
// Work through the helper functions first (Steps 1-3),
// then combine them in the main function (Step 4).
// ============================================================

const bylines = {
  authors: [
    {
      firstName: "jonah",
      middleName: "Engel",
      lastName: "bromwich",
      block: {
        __typename: "Bold"
      }
    },
    { random: "node" },
    {},
    {
      firstName: "matthew",
      middleName: "",
      lastName: "sChneier",
      block: {
        __typename: "Italics"
      }
    },
    {
      firstName: "Niraj",
      middleName: "",
      lastName: "chokshi",
      block: {}
    }
  ]
};

// Expected output:
// "By <strong>Jonah Engel Bromwich</strong>, <em>Matthew Schneier</em> and Niraj Chokshi"


// ─────────────────────────────────────────────────────────────
// STEP 1: Validate an author
// ─────────────────────────────────────────────────────────────
// An author is valid if they have at least one name field
// (firstName, lastName, or middleName) that is a non-empty string.
//
// isValidAuthor({ firstName: "jonah", lastName: "bromwich" }) → true
// isValidAuthor({ random: "node" }) → false
// isValidAuthor({}) → false
// isValidAuthor({ firstName: "", lastName: "" }) → false

function isValidAuthor(author) {
  // YOUR CODE HERE

  if(author.firstName || author.middleName || author.lastName) {
    return true;
  }
    return false;
}


// Tests
console.log('--- Step 1: Validate ---');
console.log(isValidAuthor({ firstName: "jonah", lastName: "bromwich", middleName: "", block: {} }), '→ expected true');
console.log(isValidAuthor({ random: "node" }), '→ expected false');
console.log(isValidAuthor({}), '→ expected false');
console.log(isValidAuthor({ firstName: "", middleName: "", lastName: "" }), '→ expected false');


// ─────────────────────────────────────────────────────────────
// STEP 2: Capitalize a name
// ─────────────────────────────────────────────────────────────
// First letter uppercase, rest lowercase.
//
// capitalize("jonah")     → "Jonah"
// capitalize("sChneier")  → "Schneier"
// capitalize("Engel")     → "Engel"
// capitalize("")          → ""
//
// Hint: look at str[0], str.slice(1), .toUpperCase(), .toLowerCase()

function capitalize(str) {
  // YOUR CODE HERE
  if(!str) return;
  const firstLetter = str.charAt(0).toUpperCase();
  const restOfName = str.slice(1).toLowerCase();
  return firstLetter + restOfName;
 
}

// Tests
console.log('\n--- Step 2: Capitalize ---');
console.log(capitalize("jonah"), '→ expected "Jonah"');
console.log(capitalize("sChneier"), '→ expected "Schneier"');
console.log(capitalize("Engel"), '→ expected "Engel"');
console.log(capitalize(""), '→ expected ""');


// ─────────────────────────────────────────────────────────────
// STEP 3: Format a single author
// ─────────────────────────────────────────────────────────────
// Given a valid author object, return the formatted HTML string.
//
// Steps:
//   a) Capitalize firstName, middleName, lastName
//   b) Join the non-empty name parts with a space
//   c) Wrap in the appropriate HTML tag based on block.__typename:
//      - "Bold" → <strong>Name</strong>
//      - "Italics" → <em>Name</em>
//      - anything else (or empty) → just the name, no tag
//
// formatAuthor({ firstName: "jonah", middleName: "Engel", lastName: "bromwich",
//                block: { __typename: "Bold" } })
//   → "<strong>Jonah Engel Bromwich</strong>"
//
// formatAuthor({ firstName: "Niraj", middleName: "", lastName: "chokshi",
//                block: {} })
//   → "Niraj Chokshi"
//
// Hint: to skip empty middleName, try .filter(Boolean) on the name parts array

function formatAuthor(author) {
  // YOUR CODE HERE

  const textStyle = author.block?.__typename;
  const fullName = [
    capitalize(author.firstName || ""),
    capitalize(author.middleName || ""),
    capitalize(author.lastName || "")
  ].filter(Boolean).join(" ");
  
    if(textStyle === 'Bold'){
       return `<strong>${fullName}</strong>`; 
    } else if (textStyle === 'Italics') {
      return `<em>${fullName}</em>`; 
    } else {
      return fullName;
    }
}

// Tests
console.log('\n--- Step 3: Format Author ---');
console.log(formatAuthor({
  firstName: "jonah", middleName: "Engel", lastName: "bromwich",
  block: { __typename: "Bold" }
}), '→ expected "<strong>Jonah Engel Bromwich</strong>"');

console.log(formatAuthor({
  firstName: "matthew", middleName: "", lastName: "sChneier",
  block: { __typename: "Italics" }
}), '→ expected "<em>Matthew Schneier</em>"');

console.log(formatAuthor({
  firstName: "Niraj", middleName: "", lastName: "chokshi",
  block: {}
}), '→ expected "Niraj Chokshi"');


// ─────────────────────────────────────────────────────────────
// STEP 4: Build the full byline string
// ─────────────────────────────────────────────────────────────
// Given the bylines object:
//   1. Filter out invalid authors
//   2. Format each valid author
//   3. Join them properly:
//      - 1 author:  "By Name"
//      - 2 authors: "By Name1 and Name2"
//      - 3+ authors: "By Name1, Name2 and Name3"
//      (Note: no comma before "and" — NYT style, no Oxford comma)
//
// This is the main function they'll ask you to write.

function formatBylines(bylines) {
  // YOUR CODE HERE

  console.log(bylines.authors);
  const preparingBylines = bylines.authors || [];
  const authors = preparingBylines.filter(author => isValidAuthor(author))
  .map(author => formatAuthor(author));

  if(authors.length === 0) return "";
  if(authors.length < 3){
    return `By ${authors.join(' and ')}`;
  } else if (authors.length > 2) {
    const allButLast = authors.slice(0, -1).join(', ');
    let lastOne = authors[authors.length - 1];
    return `By ${allButLast} and ${lastOne}`;
  }

  return `By ${authors}`;

}

// Tests
console.log('\n--- Step 4: Full Byline ---');
// console.log(formatBylines(bylines));
console.log(formatBylines(bylines), '→ expected: "By <strong>Jonah Engel Bromwich</strong>, <em>Matthew Schneier</em> and Niraj Chokshi"');

// Edge cases — add these yourself after the main solution works:
console.log('\n--- Edge Cases ---');
console.log(formatBylines({ authors: [] }), '→ expected "" or "By "');
console.log(formatBylines({}), '→ expected "" or "By "');
console.log(formatBylines({
  authors: [{ firstName: "Niraj", middleName: "", lastName: "chokshi", block: {} }]
}), '→ expected "By Niraj Chokshi"');
console.log(formatBylines({
  authors: [
    { firstName: "Alice", middleName: "", lastName: "Smith", block: {} },
    { firstName: "Bob", middleName: "", lastName: "Jones", block: {} }
  ]
}), '→ expected "By Alice Smith and Bob Jones"');


// ============================================================
// SOLUTIONS — Don't look until you've attempted each step!
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
// ─── SOLUTION 1: Validate ───
function isValidAuthor(author) {
  return !!(author.firstName || author.middleName || author.lastName);
}
// The !! converts a truthy/falsy value to a clean true/false.
// If all three are undefined or empty strings, it's falsy → false.


// ─── SOLUTION 2: Capitalize ───
function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


// ─── SOLUTION 3: Format Author ───
function formatAuthor(author) {
  const name = [
    capitalize(author.firstName || ""),
    capitalize(author.middleName || ""),
    capitalize(author.lastName || "")
  ].filter(Boolean).join(" ");

  const typename = author.block?.__typename;

  if (typename === "Bold") return `<strong>${name}</strong>`;
  if (typename === "Italics") return `<em>${name}</em>`;
  return name;
}
// .filter(Boolean) removes empty strings from the array
// so middleName: "" doesn't create "Jonah  Bromwich" with double space.
//
// author.block?.__typename uses optional chaining (?.)
// so if block is undefined or {}, it returns undefined instead of crashing.


// ─── SOLUTION 4: Full Byline ───
function formatBylines(bylines) {
  const authors = (bylines.authors || [])
    .filter(isValidAuthor)
    .map(formatAuthor);

  if (authors.length === 0) return "";
  if (authors.length === 1) return `By ${authors[0]}`;
  if (authors.length === 2) return `By ${authors[0]} and ${authors[1]}`;

  const allButLast = authors.slice(0, -1).join(", ");
  return `By ${allButLast} and ${authors[authors.length - 1]}`;
}
// For 3+ authors: join all except the last with ", "
// then add " and " before the last one.
// slice(0, -1) gives everything except the last element.
// authors[authors.length - 1] gives the last element.
*/
