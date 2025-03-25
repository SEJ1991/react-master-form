export interface CountryType {
  name: string;
  visited: boolean;
  favorite: boolean;
}

export type CountryFormType = Pick<CountryType, 'name'>;
export type CountriesType = 'wantToVisit' | 'visited' | 'favorite';
export type ChangeCountryStatus = (
  selectedCountry: string
) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
