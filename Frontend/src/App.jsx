import React from 'react'
import { Home } from './pages/Home'
import { Studio } from './pages/Studio'
import { Services } from './pages/Services'
import { AboutUs } from './pages/AboutUs'

export const App = () => {
  return (
    <div>
      <Home/>
      <Studio/>
      <Services/>
      <AboutUs/>
    </div>
  )
}
