/**
 * CoderByte Challenge - Codeland Username Validation
 */

//	 https://coderbyte.com/editor/Codeland%20Username%20Validation:JavaScript
const CodelandUsernameValidation = (str: string): string => {
  if (str.length < 4 || str.length > 25) return 'false';
  if (!/[a-zA-Z]/.test(str.charAt(0))) return 'false';
  if (str.endsWith('_')) return 'false';
  if (!/^[A-Za-z0-9_]+$/.test(str)) return 'false';
  return 'true';
};
console.log(CodelandUsernameValidation('asdfdfdfd_'));
