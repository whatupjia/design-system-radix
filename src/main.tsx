import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* One place configures the whole system's look: accent color, gray
        tint, corner radius, density. Change these, everything updates. */}
    <Theme accentColor="teal" grayColor="slate" radius="medium">
      <App />
    </Theme>
  </StrictMode>,
);
