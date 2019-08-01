import React from 'react';
import { Text, View  } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer  } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
      <Text>Home!</Text>
      </View>
    );
  }

}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
      <Text>Settings!</Text>
      </View>
    );
  }

}

class InfoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
      <Text>Infos!</Text>
      </View>
    );
  }

}

const TabNavigation = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    InfosScreen: InfoScreen
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 200,

      },
      style: {
        backgroundColor: 'blue',

      }
    }
  }
);

export default createAppContainer(TabNavigation);
