import React, { useRef, useState, useEffect } from "react";

export default function AutoSuggestionOutClick(intialVal: boolean) {
  
  const [isAutosuggestion, setIsAuttoSuggestion] = useState<boolean>(intialVal);
  const ref = useRef<HTMLInputElement>(null);

  const outsideClickHandle = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsAuttoSuggestion(false);
    }
  };

  useEffect(() => {
    
    document.addEventListener("click", outsideClickHandle, true);

    return () =>
      document.removeEventListener("click", outsideClickHandle, false);
  }, []);

  return { ref, isAutosuggestion, setIsAuttoSuggestion };

}
