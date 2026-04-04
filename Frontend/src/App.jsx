import React from 'react'
import { Home } from './pages/Home'
import { Studio } from './pages/Studio'
import { Services } from './pages/Services'
import { AboutUs } from './pages/AboutUs'
import { Footer } from './pages/Footer'

export const App = () => {
  return (
    <div>
      <Home/>
      <Studio/>
      <Services/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}
