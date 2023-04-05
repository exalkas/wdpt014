export default function header(props) {

    const handleChange = e => {
        console.log("🚀 ~ e:", e.target.value)
        
    }

    return (
        <header>
            {props.title}
            <input onChange={handleChange}/>
        </header>
    )
}