var TimeLimitedCache = function() {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const now = Date.now();
  const returnVal = this.isValid(key);
  this.cache.set(key, { value, expiry: now + duration });

  return returnVal;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  const kvp = this.cache.get(key);
  if (this.isValid(key)) {
    return kvp.value;
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  let count = 0;
  for (const key of this.cache.keys()) {
    count += this.isValid(key) ? 1 : 0;
  }

  return count;
};

/**
 * @param {number} key
 * @return {boolean} Is the un-expired?
 */
TimeLimitedCache.prototype.isValid = function(key) {
  const now = Date.now();
  const currentKvp = this.cache.get(key);
  return currentKvp?.expiry >= now;
};
