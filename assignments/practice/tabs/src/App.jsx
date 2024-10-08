import React from 'react';
import Tabs from './components/Tabs';

function App() {
    const tabItems = [
        { label: "Tab 1", content: "This is the content for Tab 1." },
        { label: "Tab 2", content: "This is the content for Tab 2.", onClick: () => alert("Tab 2 clicked!") },
        { label: "Tab 3", content: "This is the content for Tab 3." },
    ];

    return (
        <div className="App">
            <h1>Tabs Component</h1>
            <Tabs items={tabItems} />
        </div>
    );
}

export default App;