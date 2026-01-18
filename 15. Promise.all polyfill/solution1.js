export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let count = iterable.length;
    if (!count) resolve([]);
    const ans = new Array(count);
    iterable.forEach((it, idx) => {
      Promise.resolve(it).then((res) => {
        count--;
        ans[idx] = res;
        if (count == 0) resolve(ans);
      }).catch((err) => reject(err));
    })

  })
}

// edge case:
// If the input array is empty, the returned Promise resolves with an empty array.
// If we don't add if (!count) resolve([]), the promise would never resolve.