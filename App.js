import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import QuestionnaireScreen from './src/screens/QuestionnaireScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Questionnaire">
          <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} 
          options={{
            title: 'Questionnaire',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <Stack.Screen name="Result" component={ResultScreen}
            options={{
              title: 'Result',
              headerStyle: {
                backgroundColor: '#3498db',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
