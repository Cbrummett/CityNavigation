import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Chicago">
        <Drawer.Screen name="Chicago" component={ArtInstituteOfChicagoScreen} />
        <Drawer.Screen name="MagnificentMile" component={MagnificentMileScreen} />
        <Drawer.Screen name="NavyPier" component={NavyPierScreen} />
        <Drawer.Screen name="WaterTower" component={WaterTowerScreen} />
        <Drawer.Screen name="WillisTower" component={WillisTowerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ArtInstituteOfChicagoScreen({ navigation }) {
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/art.png')}
      />
    </View>
  );
}

function MagnificentMileScreen({ navigation }) {
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/mile.png')}
      />
    </View>
  );
}

function NavyPierScreen({ navigation }) {
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/pier.png')}
      />
    </View>
  );
}

function WaterTowerScreen({ navigation }) {
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/water.png')}
      />
    </View>
  );
}

function WillisTowerScreen({ navigation }) {
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/willis.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,

  },

});
