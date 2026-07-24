// ============================================================
// NYT Interview — Parentheses (Valid Parentheses)
// ============================================================
// Write a function that, given a string containing just '(' and ')',
// determines if the input string is valid.
//
// A string is valid if:
//   - Every '(' has a matching ')'
//   - They close in the correct order
//
// Hint: Think of it like a counter.
//   - '(' means "I opened one" → counter goes up
//   - ')' means "I closed one" → counter goes down
//   - If counter ever goes NEGATIVE → a ')' appeared without a matching '('
//   - At the end, counter must be exactly 0
// ============================================================

function isValidParentheses(str) {
    // YOUR CODE HERE
    if (!str) return;
    let  counter = 0;
    for(const char of str){
      if(char === '('){
        counter++;
      }
      if(char === ')'){
        counter--;
      }
      if(counter < 0) return false;
    }
    return counter === 0;

}

// Tests
console.log("--- Valid Parentheses ---");
console.log(isValidParentheses("()"), "→ expected true");
console.log(isValidParentheses("())"), '→ expected false');
console.log(isValidParentheses("("), '→ expected false');
console.log(isValidParentheses("()()()"), '→ expected true');
console.log(isValidParentheses("(()((())))"),'→ expected true');
console.log(isValidParentheses(")("), '→ expected false');
console.log(isValidParentheses("())))(()"),'→ expected false');
console.log(isValidParentheses(""), '→ expected true (empty is valid)');
console.log(isValidParentheses(")()()()("), '→ expected FALSE');
console.log(isValidParentheses(null), '→ expected true or false (your choice)');

// ============================================================
// SOLUTION — Don't look until you've attempted it!
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

/*
function isValidParentheses(str) {
  if (!str) return true;

  let counter = 0;

  for (const char of str) {
    if (char === '(') {
      counter++;
    } else if (char === ')') {
      counter--;
    }

    // If counter goes negative, a ')' appeared without a matching '('
    if (counter < 0) return false;
  }

  // At the end, all opened parens must be closed
  return counter === 0;
}
// Time: O(n) — one pass through the string
// Space: O(1) — just one counter variable
//
// Key insight: checking counter < 0 INSIDE the loop catches ")(" 
// which has counter 0 at the end but is still invalid.
// Without that check, ")(" would incorrectly return true.
*/
