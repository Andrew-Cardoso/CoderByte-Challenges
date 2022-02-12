/**
 * CoderByte Challenge - Tree Constructor
 */

//	 https://coderbyte.com/editor/Tree%20Constructor:JavaScript

const TreeConstructor = (strArr: string[]) => {
  type Tuple = [string, string];
  const parents: string[] = [];
  const children: string[] = [];
  for (const str of strArr) {
    const [child, parent] = str.match(/\d/g) as Tuple;
    parents.push(parent);
    if (parents.filter((p) => p === parent).length > 2) return 'false';
    children.push(child);
    if (children.filter((c) => c === child).length > 1) return 'false';
  }
  return 'true';
};
console.log(TreeConstructor(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)']));
console.log(TreeConstructor(['(1,2)', '(3,2)', '(2,12)', '(5,2)']));
