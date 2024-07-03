import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper';

const Question = ({ question, options, selectedOption, onSelectOption }) => {
  return (
    <View >
      <Text style={styles.text}>{question}</Text>
      <View>
        {options.map((option, index) => (
          <RadioButton.Item
            key={index}
            style={styles.radioButton}
            labelStyle={styles.radioButtonLabel}
            label={option.text}
            value={option.value}
            status={selectedOption === option.value ? 'checked' : 'unchecked'}
            onPress={() => onSelectOption(option.value)}
        />
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16, 
    marginRight:16
  }, radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    marginLeft: 0,
    marginRight: 0,
  },
  radioButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Question;
