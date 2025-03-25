import { useSetAtom } from 'jotai';
import CountryForm from '../components/CountryForm';
import { CountryFormType } from '../types';
import { countriesAtom } from '../atoms/country';

export default function CountryFormContainer() {
  const setCountries = useSetAtom(countriesAtom);
  const handleSubmit = ({ name }: CountryFormType, reset: () => void) => {
    setCountries(prev =>
      prev.concat({
        name,
        visited: false,
        favorite: false,
      })
    );
    reset();
  };
  return <CountryForm onSubmit={handleSubmit} />;
}
