/**
 * 04 Create a Card Component
 * 
 * Create a new functional component called "Card" in a file named "Card.js".
 * The component should display an image, a title, and a description.
 * Use appropriate HTML tags, such as <img>, <h3>, and <p> for the image, title, and 
 * description, respectively.
 * Use a default image and text for the Card component.
 * Import and use multiple Card components in your "App.js" file, arranging them in a grid or a list layout.
 * 
 */
import './card.css'
import Button from './Button'

export function Card(props) {

    console.log("🚀 ~ props:", props)

    return (
        <div className="card">
            <img src="https://cdn.pixabay.com/photo/2023/03/27/07/59/hdd-7880077_960_720.jpg"  alt=""/>
            <h3>{props.title}</h3>
            <p>
                {props.description}
            </p>
            <Button text="Add to cart"/>
        </div>
    )
}