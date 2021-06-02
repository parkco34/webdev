import React, {useState, useEffect} from 'react';

const TheBackground = props => {
    const [theImage, setTheImage] = useState(props);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
    });

    return (
        <div className="TheBackground">
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>Date: {date.toLocaleDateString()}</p>
        </div>
    );
}

export default TheBackground;
