
# Quote Loader

A customizable React component that displays rotating quotes with animations and optional avatars during loading screens.

## Installation

```bash
npm install quote-loader
```

## Usage

```tsx
import { QuoteLoader } from 'quote-loader';

<QuoteLoader 
  animation="fade" 
  interval={3000} 
  category="funny" 
  avatarUrl="/avatar.png"
/>
```

## Props

| Prop          | Type                  | Default         | Description |
|---------------|-----------------------|-----------------|-------------|
| `animation`   | `"fade" | "slide" | "typewriter"` | `"fade"` | Quote change animation |
| `interval`    | `number`              | `4000`          | Milliseconds between quote changes |
| `category`    | `"motivational" | "funny"`        | `"motivational"` | Quote category |
| `customQuotes`| `string[]`            | `undefined`     | Use your own quotes |
| `avatarUrl`   | `string`              | `undefined`     | Avatar image URL |
| `className`   | `string`              | `""`            | Optional custom styles |
