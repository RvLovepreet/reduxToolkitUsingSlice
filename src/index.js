import React from 'react';
import Counter from './feature/counter/counterExp';
import store from './app/store';
import {Provider} from 'react-redux';
import {View, SafeAreaView} from 'react-native';
const Index = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Provider store={store}>
            <Counter />
          </Provider>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Index;
