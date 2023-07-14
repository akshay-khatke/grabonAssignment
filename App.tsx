import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "store/store";
import { StyleSheet } from 'react-native';
import AppRoutes from 'navigations/AppRoutes';


function App(): JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Provider>


  );
}

const styles = StyleSheet.create({
 
});

export default App;
