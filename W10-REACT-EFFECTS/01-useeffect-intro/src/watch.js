import {useEffect, useState} from 'react';

function Watch(props) {

    const [time, setTime] = useState(new Date(Date.now()).toLocaleString())

    useEffect(() => {

        const interval = setInterval( () => setTime(new Date(Date.now()).toLocaleString()), 1000)

        return () => clearInterval(interval)
    })

    return (
        <div>
            time is {time}
        </div>
    );
}

export default Watch;