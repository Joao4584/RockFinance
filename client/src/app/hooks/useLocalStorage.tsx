import { useCallback, useState } from 'react';

export default function useLocalStorage(key: string, initialValue: any = '') {


  let INIT = initialValue;

  if (INIT == '') {
    const verify = localStorage.getItem(key);
    if (verify != null || verify != undefined) {

      try {
        INIT = JSON.parse(verify);
      }
      catch (e) {
        INIT = '';
      }

    }
  }

  const [state, setState] = useState(
    () => {
      try {

        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : INIT;

      } catch {
        return INIT;
      }
    });

  const setValue = useCallback((value: any) => {
    try {
      if (value != '') {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));

      }
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return [state, setValue];

}