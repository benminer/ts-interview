type LegacyData = {
  [key: number | string]: string[];
};

type ConvertedData = {
  [key: string]: number;
};

export const etl = (data: LegacyData): ConvertedData =>
  Object.keys(data).reduce(
    (prev, curr) => ({
      ...prev,
      ...data[curr]
        .map((v) => v.toLowerCase())
        .reduce((prev, currVal) => ({ ...prev, [currVal]: Number(curr) }), {}),
    }),
    {} as ConvertedData
  );
