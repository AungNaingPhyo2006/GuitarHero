import { useEffect } from "react";
import { Animated, Easing } from "react-native";

const spinValue = new Animated.Value(0);

useEffect(() => {
  spin();
}, []);

const spin = () => {
  spinValue.setValue(0);
  Animated.timing(
    spinValue,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }
  ).start(() => spin());
};

 export const spinAnimation = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});