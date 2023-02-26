export const mode = (arr: Array<number>): number | null => {
  arr.sort((a, b) => a - b);

  let highestCount = 0;
  let count = 0;
  let mode: null | number = null;

  arr.forEach((numb, index) => {
    const nextNumb = arr[index + 1];
    if (nextNumb !== undefined && numb === nextNumb) {
      count++;
    }

    if (count > highestCount) {
      highestCount = count;
      count = 0;
      mode = numb;
    }
  });

  return mode;
};

export const mean = (arr: Array<number>): number => {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
};

export const median = (arr: Array<number>): number => {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};
