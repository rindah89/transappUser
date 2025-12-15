import { useState, useCallback } from 'react';

interface UseToggleReturn {
  set: (value: boolean) => void;
  toggle: (e?: React.MouseEvent) => void;
}

function useToggle(initValue: boolean = false): [boolean, UseToggleReturn] {
  const [value, setValue] = useState<boolean>(initValue);
  
  const toggle = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setValue((flag) => !flag);
  }, []);

  return [
    value,
    {
      set: setValue,
      toggle,
    },
  ];
}

export default useToggle;
