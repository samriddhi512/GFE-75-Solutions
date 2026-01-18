/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let count = iterable.length;
    if (!count) resolve([]);
    const result = new Array(count);

    iterable.forEach(async (element, idx) => {
      try {
        const dt = await element;
        result[idx] = dt;
        count--;
        if (count === 0) resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}
