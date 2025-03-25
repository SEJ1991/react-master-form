import Countries from '../components/Countries';
import useCountry from '../shared/hooks/useCounty';

export default function FavoriteCountriesContainer() {
  const { favoriteCountries: countries, onClick } = useCountry();
  return <Countries type='favorite' countries={countries} onClick={onClick} />;
}
