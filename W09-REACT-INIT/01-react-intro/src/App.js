import Button from './components/Button'
import News from './components/News'
import {DemoObject} from './components/DataDemo'

import './demo.css';

export default function Demo() { // THIS IS A REACT COMPONENT = A JS FUNCTION

  return <div className="abc">
      Hello world
      <span style={{color: "red", fontSize: '2rem'}}>{2 + 3}</span>
      <Button />
      <News />
      <DemoObject />
    </div> // this is JSX = JS + XML
}