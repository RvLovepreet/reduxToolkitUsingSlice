import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
  incrementAsync,
} from './counterSlice';
const Counter = () => {
  console.log(selectCount);
  const count = useSelector(selectCount);
  const [data, setData] = useState();
  console.log(typeof count);
  const dispatch = useDispatch();
  const setuserPrimaryPhone = value => {
    setData(Number(value) || 0);
  };
  return (
    <>
      <View>
        <Text>hello World this is Counter {count}</Text>
        <Button onPress={() => dispatch(increment())} title="increment" />
        <Button onPress={() => dispatch(decrement())} title="decrement" />
        <TextInput
          placeholder="enter the number"
          onChangeText={value => setuserPrimaryPhone(value)}
        />
        <Button
          onPress={() => dispatch(incrementByAmount(Number(data))) || 0}
          title="increment by 5"
        />
        <Button
          onPress={() => dispatch(incrementAsync(Number(data))) || 0}
          title="increment by Async"
        />
      </View>
    </>
  );
};
export default Counter;
