import * as React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import AppEntry from './AppEntry';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
          <AppEntry />
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}
