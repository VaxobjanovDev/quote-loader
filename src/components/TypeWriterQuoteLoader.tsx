// QuoteLoader.tsx
import React, {useEffect, useState} from 'react';
import './QuoteLoader.css';

interface Props {
  quote: string;
}

export const TypeWriterQuoteLoader: React.FC<Props> = ({ quote }) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= quote.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <>
      ❝ {quote.slice(0, visibleChars)} ❞
    </>
  );
};
