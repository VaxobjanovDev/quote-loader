import React, { useEffect, useState } from 'react';

interface Props {
  quote: { text: string; author: string };
}

const TYPING_SPEED_MS = 50;

export const TypeWriterQuoteLoader: React.FC<Props> = ({ quote }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [visibleAuthorChars, setVisibleAuthorChars] = useState(0);
  const [textTypingComplete, setTextTypingComplete] = useState(false);

  useEffect(() => {
    setVisibleChars(0);
    setVisibleAuthorChars(0);
    setTextTypingComplete(false);

    const textInterval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= quote.text.length) {
          clearInterval(textInterval);
          setTextTypingComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, TYPING_SPEED_MS);

    return () => clearInterval(textInterval);
  }, [quote]);

  useEffect(() => {
    if (textTypingComplete && quote?.author) {
      const authorInterval = setInterval(() => {
        setVisibleAuthorChars((prev) => {
          if (prev >= quote?.author.length) {
            clearInterval(authorInterval);
            return prev;
          }
          return prev + 1;
        });
      }, TYPING_SPEED_MS);

      return () => clearInterval(authorInterval);
    }
  }, [textTypingComplete, quote.author]);

  return (
    <>
      ❝ {quote.text.slice(0, visibleChars)} ❞
      {textTypingComplete && quote.author && (
        <p className="quote-author">
          – {quote.author.slice(0, visibleAuthorChars)}
        </p>
      )}
    </>
  );
};
