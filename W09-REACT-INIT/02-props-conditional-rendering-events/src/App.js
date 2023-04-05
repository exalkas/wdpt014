import { Card } from "./components/04-card-exercise";
import './App.css'
import Header from './components/Header'
import News from './components/News'

export default function App() {

  const age = 19

  const smoker = true

  return <div>
    <Header title="THIS IS OUR HEADER"/>
    <div className='app'>
      <Card 
        title="First Image" 
        description=" A laptop that will solve all your problems"
      />
      <Card 
        title="Second Image"
        description=" A SECOND laptop that will solve all your problems"
      />
      <Card />
      <Card />

      {
        age > 18 ? <News /> : "You must be greater than 18 to see this message"
      }
      
      {
        smoker === true ? <p>You should quit smoking!</p> : null
      }

      {
        smoker && <p>You should quit smoking!</p>
      }
      
    </div>
  </div>
}