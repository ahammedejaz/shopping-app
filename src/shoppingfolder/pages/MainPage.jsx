import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import {Gents} from '../data' 

const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents)

  console.log(Gents)

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
