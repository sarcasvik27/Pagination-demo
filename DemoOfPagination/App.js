import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/Navigation/RootNavigation';

const App=()=>{
  return(
    <NavigationContainer independent={true}>
    <RootNavigation />
    </NavigationContainer>
  )
}
export default App;
