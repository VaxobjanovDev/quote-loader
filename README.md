# 📜 Quote Loader

A customizable React component that displays rotating quotes with animations and optional avatars — perfect for splash/loading screens or inspirational widgets.

## 🚀 Installation

```bash
npm install quote-loader
```

## 🧠 Usage

```tsx
import { QuoteLoader } from 'quote-loader';

<QuoteLoader
  animation="typewriter"
  interval={4000}
  category="funny"
  avatarUrl="/avatar.png"
/>
```

## 🛠️ Props

| Prop           | Type                                                                      | Default          | Description                              |
| -------------- | ------------------------------------------------------------------------- | ---------------- | ---------------------------------------- |
| `animation`    | `"fade"` \| `"slide"` \| `"typewriter"`                                   | `"fade"`         | Quote change animation style             |
| `interval`     | `number`                                                                  | `4000`           | Milliseconds between quote changes       |
| `category`     | `"motivational"` \| `"funny"` \| *your custom keys if using customQuotes* | `"motivational"` | Built-in quote category                  |
| `customQuotes` | `{ text: string; author?: string }[]`                                     | `undefined`      | Use your own quotes (overrides category) |
| `avatarUrl`    | `string`                                                                  | `undefined`      | Optional avatar image URL                |
| `className`    | `string`                                                                  | `""`             | Optional custom styles                   |

---

## ✨ Typewriter Animation

When using `animation="typewriter"`, each quote is revealed one character at a time. Once the text is fully shown, the author is typed out in a second phase with the same typing effect.

Example with custom quotes:

```tsx
<QuoteLoader
  animation="typewriter"
  customQuotes=[
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" }
  ]
/>
```

---

If `customQuotes` is provided, the `category` prop will be ignored.

---

> Contributions, bug reports, and feature requests are welcome!
