import useState from 'react'

import FirstComponent from './components/firstComponent'
import templeteExpression from './components/templeteExpression'
import myComponent from './components/myComponent'
import Events from './components/Events'
import dataComponent from './components/dataComponent'
import listRender from './components/listRender'
import condicionalRender from './components/condicionalRender'
import showUserNameProps from './components/showUserNameProps'
import destructoringProps from './components/destructoringProps'
import Fragment from './components/Fragment'
import Container from './components/Children'
import message from './components/Message'
import Changemessage from './components/Changemessage'

import './App.css'

const cars = [
  {id: 1, brand: "KIA", color: "White", km: 0 },
  {id: 2, brand: "VW", color: "Black", km: 1000 },
  {id: 3, brand: "FIAT", color: "Red", km: 0 },
  {id: 4, brand: "PEGOUT", color: "Blue", km: 2555 },
]

// State Lift

const [ message, setMessage ] = useState("")
const handleMessage = (msg) => {
  setMessage(msg)
}

function App() {
  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      <h1>Fundamentos do React</h1>
      <templeteExpression/>
      <FirstComponent/>
      <myComponent/>
      <Events/>
      <dataComponentq/>
      <listRender/>
      <condicionalRender/>
      <showUserNameProps name="Matheus"/>
      <destructoringProps brand="VW" km={1000} color= "White"/>
      {cars.map((car) => (
        <destructoringProps 
          key = {car.id} 
          brand = {car.brand}
          color= {car.color}
          km = {car.km} />
      ))
      }

      <Fragment/>
      <Container>
        <p>A children aqui</p>
      </Container>

      <Message msg={message}/>
      <Changemessage handleMessag={handleMessage}/>
    </div>
    
  )
}

export default App
