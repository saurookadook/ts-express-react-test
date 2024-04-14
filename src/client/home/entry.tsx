import React from 'react';
import { createRoot } from 'react-dom/client';

import reportWebVitals from 'client/reportWebVitals';

function App({ data }: { data?: Record<string, unknown> | null }) {
    console.log('home - App', { data });
    return (
        <div className="home">
            <header className="home-header">{`💸 🤑 💸 Welcome to NLP SSA 💸 🤑 💸`}</header>
            <div>
                <p>
                    <em>{`a.k.a.`}</em>
                </p>
                <p>
                    <b>{`💸 🤑 💸 THE MONEY MAKERRRRR 💸 🤑 💸 `}</b>
                </p>
            </div>
        </div>
    );
}

(window as any).renderApp = async (initialPageData) => {
    const root = createRoot(document.getElementById('nlpssa-main'));

    root.render(
        <React.StrictMode>
            <App data={initialPageData} />
        </React.StrictMode>,
    );
};

reportWebVitals();
