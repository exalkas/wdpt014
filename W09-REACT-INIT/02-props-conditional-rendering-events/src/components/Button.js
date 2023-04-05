export default function Button(wdpt014) {

    const handleClick = () => {
        console.log("BUTTON CLICKED")
    }

    return (
        <button onClick={handleClick}>{wdpt014.text}</button>
    )
}