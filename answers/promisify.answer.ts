export const promisify = (fnWithCallback: Function): any => {
  return (...args: any[]) => {
    return new Promise((resolve, reject) => {
      fnWithCallback(...args, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
};
