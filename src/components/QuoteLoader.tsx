import React, {useEffect, useState} from 'react';
import {quoteData} from '../constants/quotes';
import './QuoteLoader.css';
import type {QuoteLoaderProps} from "../types.ts";
import {TypeWriterQuoteLoader} from "./TypeWriterQuoteLoader.tsx";

export const QuoteLoader: React.FC<QuoteLoaderProps> = ({
                                                          animation = 'typewriter',
                                                          interval = 5000,
                                                          category = 'funny',
                                                          customQuotes,
                                                          avatarUrl,
                                                          className,
                                                        }) => {
  const quotes = customQuotes || quoteData[category];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, quotes.length]);

  return (
    <div className="loader-wrapper">
      <div className={`quote-loader ${animation} ${className || ''}`}>
        {avatarUrl && (
          <img src={avatarUrl} alt="avatar" className="quote-avatar"/>
        )}
        {animation === 'typewriter' ? (
          <TypeWriterQuoteLoader quote={quotes[index]}/>
        ) : (<p className="quote-text">{quotes[index]}</p>)}
      </div>
    </div>
  );
};
