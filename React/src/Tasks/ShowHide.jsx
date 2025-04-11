import React, { useState } from 'react';

function ShowHide() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <h2>Toggle Show/Hide</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Text
            </button>
            {isVisible && <p>Hello World</p>}
        </div>
    );
}

export default ShowHide;