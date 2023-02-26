export const flatten = (arrays: any[]): any[] => {
  const toReturn = [];

  for (const entry of arrays) {
    if (Array.isArray(entry)) {
      toReturn.push(...flatten(entry));
    } else if (entry !== null && entry !== undefined) {
      toReturn.push(entry);
    }
  }

  return toReturn;
};
