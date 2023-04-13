import image from './images/iphone.jpg'
import Header from './components/header';
import Button from './components/Button'
import { useState } from 'react';
import Display from './components/Display';

function App(props) {

  const [counter, setCounter] = useState(0)

  const handleIncrease = () => setCounter(counter + 1)
  const handleDecrease = () => setCounter(counter - 1)

  return (
    <div className='container'>
      <Header />
      <img src={image} style={{height: '150px',
      width: '150px',
      objectFit: 'cover'
      
    }} alt=''/>
      
      {/* <img src='/images/iphone.jpg' style={{height: '150px',
      width: '150px',
      objectFit: 'cover'
    }} alt=''/> */}

    <Display message={counter}/>
    

    <Button text='Increase' handleClick={handleIncrease}/>
    <Button text='Decrease' handleClick={handleDecrease}/>
    </div>
  );

}

export default App;