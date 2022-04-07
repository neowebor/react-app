// import {useEffect, useState} from "react";
//
// export const useDebounce = (value, delay) => {
//   let [debouncedValue, setDebouncedValue] = useState(value);
//
//   useEffect(() => {
//     let timeoutId = setTimeout(() => {
//       setDebouncedValue(value)
//     }, delay)
//
//     return () => {
//       clearTimeout(timeoutId)
//     }
//   }, [value])
//
//   return debouncedValue;
// }

import {useCallback, useRef} from "react";

export function useDebounce(callback, delay) {
  const timer = useRef();

  const debouncedCallback = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback()
    }, delay)
  }, [callback, delay])
  return debouncedCallback;
}