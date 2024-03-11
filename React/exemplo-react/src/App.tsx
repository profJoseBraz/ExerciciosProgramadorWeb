import { useState } from 'react'
import MyInput from './assets/components/MyInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyInput type='text' placeholder='Digite algo' bgColor='#f0f0f0'/>
    </>
  )
}

export default App
