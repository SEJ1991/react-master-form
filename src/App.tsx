import CountryFormContainer from './containers/CountryFormContainer';
import FavoriteCountriesContainer from './containers/FavoriteCountriesContainer';
import VisitedCountriesContainer from './containers/VisitedCountriesContainer';
import WantToVisitCountriesContainer from './containers/WantToVisitCountriesContainer';

function App() {
  return (
    <section className='w-dvw h-dvh flex-center flex-col py-50 bg-gray-700 gap-10'>
      <CountryFormContainer />
      <WantToVisitCountriesContainer />
      <VisitedCountriesContainer />
      <FavoriteCountriesContainer />
    </section>
  );
}

export default App;
