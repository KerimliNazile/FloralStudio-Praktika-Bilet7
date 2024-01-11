import React from 'react'
import Header from '../../Components/HomePageComponents/HeaderSection'
import { Helmet } from 'react-helmet'
import Mission from '../../Components/HomePageComponents/MissionSection'
import Events from '../../Components/HomePageComponents/EventsSection'
import OurTeam from '../../Components/HomePageComponents/OurTeamSection'
import Flowers from '../../Components/HomePageComponents/FlowersPricing'

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Your page description" />
        <title>Home </title>

      </Helmet>
      <Header/>
      <Mission/>
      <Flowers/>
      <Events/>
      <OurTeam/>
    </div>
  )
}

export default Home
