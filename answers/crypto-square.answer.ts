const calculateSquareSize = (
  textLength: number,
  columns = 1
): {
  columns: number;
  rows: number;
} => {
  let rows = Math.ceil(textLength / columns);
  if (columns >= rows && columns - rows <= 1) {
    return { columns, rows };
  } else {
    return calculateSquareSize(textLength, columns + 1);
  }
};

export const squareEncrypt = (text: string): string => {
  const normalizedText = text
    // Remove all spaces
    .replaceAll(" ", "")
    // Remove all punctuation
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    // Convert to lowercase
    .toLowerCase();

  const textLength = normalizedText.length;
  const { columns: _columns, rows } = calculateSquareSize(textLength);

  let columns = _columns;
  let splitText = normalizedText.split("");
  const resultArr: Array<Array<string>> = [];

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (resultArr[j] === undefined) {
        resultArr[j] = [];
      }
      resultArr[j].push(splitText.shift() || " ");
    }
  }

  return resultArr
    .map((row) => {
      return row.join("");
    })
    .join("\n");
};
