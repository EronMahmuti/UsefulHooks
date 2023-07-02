import { useState } from 'react';


type ToggleValueFunction = (value: boolean) => void;

const useToggle = (defaultValue: boolean | undefined): [boolean | undefined, ToggleValueFunction] => {
  const [value, setValue] = useState<boolean | undefined>(defaultValue);

  const toggleValue: ToggleValueFunction = (value) => {
    setValue((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  }
  return [value, toggleValue];
};

export default useToggle;