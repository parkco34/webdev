import React, {useState, useEffect} from 'react';

const Test = props => {
    const [theWindow, setTheWindow] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowSize() {
            setTheWindow(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowSize);
        return () => window.removeEventListener('resize', handleWindowSize);
    }, []);

    return (
        <div style={{margin: '15% 0 0 0', border: '1px solid white', width: '300px', height: '30px', padding: '1px 1px 1px 1px', color: 'white'}}>
            <strong>THE CURRENT WINDOW SIZE IS: {theWindow}</strong>
        </div>
    );
}

export default Test;
