import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const ChordDiagram = () => {
  return (
    <View style={styles.container}>
      {/* Vertical lines with spacing */}
      <View style={styles.verticalContainer}>
        {[...Array(6)].map((_, index) => (
            <>
          <View key={index} 
          style={index === 0 || index === 5 ? styles.firstAndLastVerticalLine : styles.verticalLine}
        >
            
          </View>
          <Text style={{
            position: 'absolute',
            // backgroundColor:'blue',
            color: 'blue',
         fontSize: 10,
         }}>{`${index * 150 == 450 ? `Hello` : ''}`}</Text>
          </>
        ))}
      </View>

      {/* Horizontal lines crossing over vertical lines with spacing */}
      <View style={styles.horizontalContainer}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={index === 0 ? styles.firstHorizontalLine : styles.horizontalLine}>
            <Text style={styles.pointLabel}>{`${index * 14 == 28? `Hello` : ''}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ChordDiagram;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Vertical arrangement
    alignItems: 'center',     // Center lines horizontally
  },
  verticalContainer: {
    marginTop: 14,
    flexDirection: 'row', // Horizontal arrangement for vertical lines
    marginVertical: 5,    // Adjust as needed for vertical spacing between lines
  },
  verticalLine: {
    height: 130,
    width: 1,                 // Width of the line
    backgroundColor: 'black', // Color of the line
    marginHorizontal: 15,      // Adjust as needed for horizontal spacing between lines
    // position: 'relative',
  },
  firstAndLastVerticalLine: {
    height: 130,
    width: 3,                 // Width of the first and last lines
    backgroundColor: 'black', // Color of the line
    marginHorizontal: 12,      // Adjust as needed for horizontal spacing between lines
    // position: 'relative',
  },
  horizontalContainer: {
    position: 'absolute', // Position the horizontal lines above the vertical lines
    flexDirection: 'column', // Vertical arrangement for horizontal lines
  },
  firstHorizontalLine: {
    height: 3,                // Height of the first line
    width: 150,               // Width of the line
    backgroundColor: 'black', // Color of the line
    marginVertical: 14,       // Adjust as needed for vertical spacing between lines
    position: 'relative',
  },
  horizontalLine: {
    height: 1,                // Height of lines other than the first one
    width: 150,               // Width of the line
    backgroundColor: 'black', // Color of the line
    marginVertical: 15,       // Adjust as needed for vertical spacing between lines
    position: 'relative',
  },
  pointLabel: {
    position: 'absolute',
    color: 'red',
    fontSize: 10,
  },
});
