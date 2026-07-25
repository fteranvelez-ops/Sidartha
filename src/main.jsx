import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

/* Design system, in the order styles.css declares it. */
import './styles/tokens/fonts.css';
import './styles/tokens/colors.css';
import './styles/tokens/typography.css';
import './styles/tokens/spacing.css';
import './styles/base.css';

/* Marketing site styles. */
import './styles/site.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
