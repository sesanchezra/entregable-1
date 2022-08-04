import { useState } from 'react'
import './App.css'

import icon1 from "./assets/icon/3d-stripy-flower-in-red-pot.png"
import icon2 from "./assets/icon/3d-stripy-light-green-plant-in-beige-pot.png"
import icon3 from "./assets/icon/casual-life-3d-monstera-plant-with-holes-in-its-leaves.png"
import icon4 from "./assets/icon/casual-life-3d-pink-pomegranate.png"
import icon5 from "./assets/icon/casual-life-3d-spotted-blue-succulent-plant.png"
import icon6 from "./assets/icon/casual-life-3d-vase-with-tulips-glasses-and-pencil-2.png"
import Header from './components/Header'
import { useEffect } from 'react'
import axios from 'axios'
import Quotes from './components/Quotes'
import Footer from './components/Footer'
import User from './components/User'


function App() {
  const [count, setCount] = useState(0)

  // Random Icon for quotes
  const iconArray = [
    icon1, icon2, icon3, icon4, icon5, icon6
  ]

  const randomIcon = (iconArray) => {
    return Math.floor(Math.random() * iconArray.length)
  }

  // Random user
  const [randomUser, setRandomUser] = useState()

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(res => setRandomUser(res.data.results[0]))
      .catch(error => console.log(error))
  }, [])

  console.log(randomUser)

  // Link guia - https://dribbble.com/shots/15648656-Govoroon-App/attachments/7441406?mode=media

  // Link pattern - https://doodad.dev/pattern-generator/

  // Estado active de visualizacion

  
  const [footerChange, setFooterChange] = useState(true)
  const [quotesActive, setQuotesActive] = useState(true)
  const [userActive, setUserActive] = useState(false)

  const changeFooter = () => {
    setFooterChange(!footerChange)
    setUserActive(!userActive)
    setQuotesActive(!quotesActive)
  }

  // Like of quote state

  const [liked, setLiked] = useState()
  const [arrayLiked, setArrayLiked] = useState([])

  useEffect(() => {
    let lastArray = arrayLiked
    lastArray.push(liked)
    setArrayLiked(lastArray)
  }, [liked])

  // Load of quotes random 

  const [quotesLoad, setQuotesLoad] = useState()

  useEffect(() => {
    setQuotesLoad(
      <div className="quotes-box">
        <Quotes
          setLiked={setLiked}
        />
        <Quotes
          setLiked={setLiked}
        />
        <Quotes
          setLiked={setLiked}
        />

      </div>
    )
  }, [])

  return (
    <div className="App">
      <Header
        user={randomUser}
      />
      <div className="tittle">
        {
          footerChange ?
            <h2>Quotes</h2>
          :
            <h2>User</h2>
        }
      </div>
      {
        footerChange ?
          quotesLoad
        :
          <User
            arrayLiked={arrayLiked}
            user={randomUser}
          />
      }


      <Footer
        quotesActive={quotesActive}
        userActive={userActive}
        changeFooter={changeFooter}
      />

    </div>
  )
}

export default App
