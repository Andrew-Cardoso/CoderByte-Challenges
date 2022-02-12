/**
 * CoderByte Challenge - Bracket Matcher
 */

//	 https://coderbyte.com/editor/Bracket%20Matcher:JavaScript

const BracketMatcher = (str: string) => {
  let bracketsCount = 0;
  for (const letter of str) {
    '(' === letter && bracketsCount++;
    if (')' === letter) {
      bracketsCount--;
      if (bracketsCount < 0) return 0;
    }
  }
  return bracketsCount === 0 ? 1 : 0;
};
console.log(BracketMatcher(')((())()'));
