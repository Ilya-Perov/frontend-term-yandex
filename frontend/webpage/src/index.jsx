import React from 'react';
import App from "./components/app/App"
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
const root = createRoot(domNode);


root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
