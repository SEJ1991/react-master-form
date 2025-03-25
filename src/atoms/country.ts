import { atom } from 'jotai';
import { CountryType } from '../types';

export const countriesAtom = atom<CountryType[]>([]);

export const wantToVisitCountriesSelector = atom(get =>
  get(countriesAtom).filter(({ visited, favorite }) => !visited && !favorite)
);
export const visitedCountriesSelector = atom(get =>
  get(countriesAtom).filter(({ visited, favorite }) => visited && !favorite)
);
export const favoriteCountriesSelector = atom(get =>
  get(countriesAtom).filter(({ favorite }) => favorite)
);
