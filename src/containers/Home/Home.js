import React from 'react';

import Splash from '../../components/Splash';
import NavBar from '../../components/NavBar';
import FullWidthImage from '../../components/FullWidthImage';

import powerPlant from '../../images/powerPlant.jpeg'

const Home = ({}) => {
  return (
    <div>
      <Splash />
      {false && 
        <div>
          <NavBar />
          <FullWidthImage src={powerPlant}/>
        </div>
      }
    </div>
  )
}

export default Home;