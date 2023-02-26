// Extract-Transform-Load (ETL) is a fancy way of saying, "We have some crufty, legacy data over in this system, and now we need it in this shiny new system over here, so we're going to migrate this."

// (Typically, this is followed by, "We're only going to need to run this once." That's then typically followed by much forehead slapping and moaning about how stupid we could possibly be.)

// {
//   1: ['A', 'B']
// }
type LegacyData = {
  [key: number]: string[];
};

type ConvertedData = {
  [key: string]: number;
};

export const etl = (data: LegacyData): ConvertedData => {
  return {};
};
