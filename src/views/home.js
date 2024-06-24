import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Occasional Immediate Salamander</title>
        <meta property="og:title" content="Occasional Immediate Salamander" />
      </Helmet>
      <Navbar4 logoSrc="/pexels-nicola-barts-7926653-1500h.jpg"></Navbar4>
      <Hero9></Hero9>
      <Features1></Features1>
      <Footer1></Footer1>
    </div>
  )
}

export default Home
