import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const names = ['Dax', 'Dev', 'Kalpan', 'Kalp', 'Ishaa', 'Prem', 'Sujal', 'Mahir'];

    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h2>Live Search Filter</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search names"
            />
            <ul>
                {filteredNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;