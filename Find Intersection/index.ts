/**
 * CoderByte Challenge - Find Intersection
 */

//	 https://coderbyte.com/editor/Find%20Intersection:JavaScript

const FindIntersection = ([strings_1, strings_2]: string[]): string =>
  strings_1
    .replace(/\s/g, '')
    .split(',')
    .filter((n) => strings_2.replace(/\s/g, '').split(',').includes(n))
    .sort((a, b) => +a - +b)
    .toString() || 'false';

console.log(FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']));
console.log(FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']));
console.log(FindIntersection(['1, 3, 77, 99, 88', '1, 77, 3, 88, 99']));
console.log(FindIntersection(['99, 77, 88, 55, 66, 22, 1, 34, 2', '1, 77, 3, 88, 99']));
