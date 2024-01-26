import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
// for some reason the instructor forgot to import MyComponent??

function App() {
  const [count, setCount] = useState(0)

  // we should avoid using any but for the sake of demonstration 
  const [person, setPerson] = useState<{/*name: string, age: number*/ [key: string]: any }>({});

  return (
    <>
      <MyComponent name="iugilgilg"/>
    </>
  )
}

export default App
// this breif demonstration of type script and react with type script doesnt really
// explain much