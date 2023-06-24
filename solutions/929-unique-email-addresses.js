const assert = require('assert');

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const emailSet = new Set();

  for (const email of emails) {
    const [ local, domain ] = email.split('@');
    const beforePlus = local.split('+')[0];
    emailSet.add(`${beforePlus.replace(/\./g, '')}@${domain}`);
  }

  return emailSet.size;
};

assert.equal(numUniqueEmails([
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com'
]), 2);
assert.equal(numUniqueEmails(['a@leetcode.com','b@leetcode.com','c@leetcode.com']), 3);
assert.equal(numUniqueEmails(['a.a.a@leetcode.com','aaa@leetcode.com']), 1);
