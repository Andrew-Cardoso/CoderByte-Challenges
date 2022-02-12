/**
 * CoderByte Challenge - Find Intersection
 */

//	 https://coderbyte.com/editor/Min%20Window%20Substring:JavaScript

const recursiveResult = ([N, K]: string[], len?: number, result?: string): string => {
  if (N.length < K.length && !!result) return result;
  const k = K.split('');
  let frstIndex = null;
  let lastIndex = 0;
  for (let i = 0; i < N.length; i++) {
    const letter = N[i];
    if (k.includes(letter)) {
      k.splice(
        k.findIndex((l) => l === letter),
        1
      );
      if (frstIndex === null) frstIndex = i;
      if (k.length === 0) {
        lastIndex = i + 1;
        break;
      }
    }
  }
  const r = N.substring(frstIndex || 0, lastIndex);
  const newN = N.substring(frstIndex || 0 + 1);
  if ((!len || r.length < len) && k.length === 0) return recursiveResult([newN, K], r.length, r);
  return recursiveResult([newN, K], len, result);
};

const MinWindowSubstring = (strArr: string[]): string => {
  return recursiveResult(strArr);
};

console.log(MinWindowSubstring(['ahffaksfajeeubsne', 'jefaa']));
console.log(MinWindowSubstring(['aaffhkksemckelloe', 'fhea']));
