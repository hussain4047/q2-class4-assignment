export interface ICountry {
  name: string,
  population: number|string,
  capital: string
}
export const countries: ICountry[] = [
  { name: 'Australia', population: `25.6M`, capital: 'Canberra' },
  { name: 'Canada', population: `38.23M`, capital: 'Ottawa' },
  { name: 'Germany', population: `83M`, capital: 'Berlin' },
  { name: 'Japan', population: `126M`, capital: 'Tokyo' },
  { name: 'Brazil', population: `212M`, capital: 'Brasília' },
];