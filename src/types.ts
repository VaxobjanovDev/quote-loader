
export type AnimationType = 'fade' | 'slide' | 'typewriter';
export type QuoteCategory = 'motivational' | 'funny';

export interface QuoteLoaderProps {
  animation?: AnimationType;
  interval?: number;
  category: QuoteCategory;
  customQuotes?: string[];
  avatarUrl?: string;
  className?: string;
}
