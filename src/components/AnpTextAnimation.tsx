import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Text, View} from 'react-native';

// const characters = 'Developed by Aung Naing Phyo';

const ShowChar = ({char, translateY}:{char:string,translateY:number}) => {
  return (
    <Animated.Text
      style={{
        // color:'white',
        fontSize:16,
        fontWeight:'800',
       color: '#278BCB',
        marginLeft: 3,
        transform: [{translateY}],
      }}>
      {char}
    </Animated.Text>
  );
};

const AnpTextAnimation = ({characters}:{characters:string}) => {
  const animatedRefs = characters
    .split('')
    .map(() => useRef(new Animated.Value(0)).current);

  const startAnimation = (index :number)=> {
    if (index === characters.length) {
      // Animation loop completed, restart it
      startAnimation(0);
      return;
    }

    Animated.sequence([
      // Animated.delay(180), // Delay before starting the animation for each character
      Animated.timing(animatedRefs[index], {
        toValue: -18,
        duration: 1,
        // easing: Easing.step0,
        useNativeDriver: true,
      }),
      Animated.timing(animatedRefs[index], {
        toValue: 0,
        duration: 100,
        // easing: Easing.step1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      startAnimation(index + 1); // Start animation for the next character
    });
  };

  useEffect(() => {
    startAnimation(0); // Start the animation loop
  }, []);

  return (
    <View style={{flexDirection: 'row'}}>
      {characters.split('').map((char, index) => (
        <ShowChar key={index} char={char} translateY={animatedRefs[index]} />
      ))}
    </View>
  );
};

export default AnpTextAnimation;