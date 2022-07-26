import React, {useEffect, useState} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/splash/splash-screen';
import DiscoverScreen from '../screens/discover/discover-screen';
import DetailPost from '../screens/detail/detail-screen';
import ProfileScreen from '../screens/profile/profile-screen';

const RootStack = createStackNavigator();

const Navigation = () => {
  const [splashActive, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3100);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {splashActive ? (
          <RootStack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <RootStack.Screen name="Discover" component={DiscoverScreen} />
            <RootStack.Screen
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              }}
              name="DetailPost"
              component={DetailPost}
            />
            <RootStack.Screen
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              }}
              name="Profile"
              component={ProfileScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
