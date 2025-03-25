import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CountryClickButton(props: ComponentPropsWithoutRef<'button'>) {
  return (
    <button {...props} className={twMerge('size-8 rounded-md bg-gray-950', props.className)}>
      {props.children}
    </button>
  );
}
