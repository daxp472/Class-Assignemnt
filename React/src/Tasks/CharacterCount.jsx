import React, { useState } from 'react';

function CharacterCount() {
    const [text, setText] = useState('');

    return (
        <div>
            <h2>Character Count</h2>
            <textarea 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type something here"
            />
            <p>Character count: {text.length}</p>
        </div>
    );
}

export default CharacterCount;