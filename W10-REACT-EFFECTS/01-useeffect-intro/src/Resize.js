import {useEffect, useState} from 'react'

function Resize(props) {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            console.log("🚀 ~ handleResize fired")
            setSize({
                ...size,
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    
        window.addEventListener('resize', handleResize)

        // CLEANUP
        return () => window.removeEventListener('resize', handleResize)
    }, []) 

    return (
        <div>
            <p>height is {size.height}</p>
            <p>width is {size.width}</p>
        </div>
    );
}

export default Resize;