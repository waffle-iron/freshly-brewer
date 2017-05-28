import React from 'react';

import CountdownSection from '../../components/CountdownSection';
import FullWidthImage from '../../components/FullWidthImage';
import NavBar from '../../components/NavBar';
import PersonalInfo from '../../components/PersonalInfo';
import Splash from '../../components/Splash';

import powerPlant from '../../images/powerPlant.jpeg'
import views from '../../images/views.jpg';

const Home = ({}) => {
  return (
    <div>
      <NavBar />
      <FullWidthImage src={powerPlant}/>
      <PersonalInfo />
      <CountdownSection backgroundImage={views}/>
    </div>
  )
}

export default Home;