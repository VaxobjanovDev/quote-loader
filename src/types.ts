import { quoteData } from "./constants/quotes";

export interface Quote {
  text: string;
  author: string;
}

export interface QuoteLoaderProps {
  animation?: 'typewriter' | 'fade' | 'slide';
  interval?: number;
  category?: keyof typeof quoteData;
  customQuotes?: Quote[];
  avatarUrl?: string;
  className?: string;
}
