import CountryClickButton from '../shared/components/CountryClickButton';
import { ChangeCountryStatus, CountriesType, CountryType } from '../types';

interface Props {
  type: CountriesType;
  countries: CountryType[];
  onClick: ChangeCountryStatus;
}
export default function Countries({ type, countries, onClick }: Props) {
  const heading = GET_HEADING(type);

  const Buttons = (country: string) => {
    switch (type) {
      case 'wantToVisit':
        return (
          <>
            <CountryClickButton data-prop='visited' onClick={onClick(country)}>
              ✅
            </CountryClickButton>
            <CountryClickButton onClick={onClick(country)}>🗑️</CountryClickButton>
          </>
        );

      case 'visited':
        return (
          <>
            <CountryClickButton data-prop='favorite' onClick={onClick(country)}>
              👍
            </CountryClickButton>
            <CountryClickButton data-prop='visited' onClick={onClick(country)}>
              ❌
            </CountryClickButton>
          </>
        );

      case 'favorite':
        return (
          <CountryClickButton data-prop='favorite' onClick={onClick(country)}>
            👎
          </CountryClickButton>
        );
    }
  };

  return (
    <div className='flex-center flex-col gap-5'>
      <h2>{heading}</h2>
      <ul className='flex flex-col gap-2'>
        {countries.map(({ name }, idx) => (
          <li key={`${name}_${idx}`}>
            <div className='flex items-center w-50 gap-10 p-2 bg-gray-800 rounded-md'>
              <span className='w-[70%] truncate block'>{name}</span>
              <div className='flex gap-2'>{Buttons(name)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GET_HEADING(type: CountriesType) {
  switch (type) {
    case 'wantToVisit':
      return '내가 가고싶은 나라들';

    case 'visited':
      return '내가 방문했던 나라들';

    case 'favorite':
      return '내가 좋아하는 나라들';
  }
}
