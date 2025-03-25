import Countries from '../components/Countries';
import useCountry from '../shared/hooks/useCounty';

export default function WantToVisitCountriesContainer() {
  const { wantToVisitCountries: countries, onClick } = useCountry();
  return <Countries type='wantToVisit' countries={countries} onClick={onClick} />;
}
