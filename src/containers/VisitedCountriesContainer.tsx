import Countries from '../components/Countries';
import useCountry from '../shared/hooks/useCounty';

export default function VisitedCountriesContainer() {
  const { visitedCountries: countries, onClick } = useCountry();
  return <Countries type='visited' countries={countries} onClick={onClick} />;
}
