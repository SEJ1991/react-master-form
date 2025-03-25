import { useAtomValue, useSetAtom } from 'jotai';
import {
  countriesAtom,
  favoriteCountriesSelector,
  visitedCountriesSelector,
  wantToVisitCountriesSelector,
} from '../../atoms/country';
import { ChangeCountryStatus, CountryType } from '../../types';

export default function useCountry() {
  const setCountries = useSetAtom(countriesAtom);
  const wantToVisitCountries = useAtomValue(wantToVisitCountriesSelector);
  const visitedCountries = useAtomValue(visitedCountriesSelector);
  const favoriteCountries = useAtomValue(favoriteCountriesSelector);

  const onClick: ChangeCountryStatus =
    (selectedCountry: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const prop = e.currentTarget.dataset.prop as keyof CountryType | undefined;

      console.log({ selectedCountry, prop });

      if (!prop) {
        setCountries(prev => prev.filter(({ name }) => name !== selectedCountry));
        return;
      }

      setCountries(prev =>
        prev.map(country =>
          country.name === selectedCountry ? { ...country, [prop]: !country[prop] } : country
        )
      );
    };

  return {
    wantToVisitCountries,
    visitedCountries,
    favoriteCountries,
    onClick,
  };
}
