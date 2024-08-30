import React from 'react';
import Dropdown from './ui/Drowpdown';

function App() {
    const items = ['Java', 'Python', 'C#', 'Javascript'];

    return (
        <div className="App">
            <h1>What is your favourite language</h1>
            <Dropdown items={items} />
        </div>
    );
}

export default App;
