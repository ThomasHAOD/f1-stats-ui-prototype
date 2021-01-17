export const reducer = (array) => {
  const reducedData = array.reduce((prev, curr) => {
    const key = Object.keys(curr)[0];

    let currentKey;
    curr[key] === null ? (currentKey = 'dnf') : (currentKey = curr[key]);

    let value = prev[currentKey];
    value ? prev[currentKey]++ : (prev[currentKey] = 1);

    return prev;
  }, {});

  return reducedData;
};
