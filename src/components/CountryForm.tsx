import { useForm } from 'react-hook-form';
import { CountryFormType } from '../types';

interface Props {
  onSubmit: (data: CountryFormType, reset: () => void) => void;
}
export default function CountryForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CountryFormType>({
    defaultValues: {
      name: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(data => onSubmit(data, reset))}>
      <fieldset className='flex-center flex-col gap-2'>
        <legend className='text-center mb-2 animate-bounce'>✈️ 내가 가고싶은 나라는? ✈️</legend>
        <div className='flex flex-col gap-1'>
          <input
            {...register('name', { required: '가고싶은 나라를 적어주세요 🙏' })}
            type='text'
            placeholder='국가명'
            className='rounded-md w-50 p-2 bg-gray-800'
          />
          {errors.name && <span className='text-red-400 animate-pulse'>{errors.name.message}</span>}
        </div>
        <button type='submit' className='rounded-md w-50 p-2 bg-gray-800 hovering'>
          🔥 가자 🔥
        </button>
      </fieldset>
    </form>
  );
}
