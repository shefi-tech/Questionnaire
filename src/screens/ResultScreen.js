import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const calculateScore = (responses) => {
  let totalScore = 0;
  Object.values(responses).forEach(score => {
    totalScore += score;
  });
  return totalScore;
};

const getRiskProfileCategory = (score) => {
  if (score <= 7) return 'Low';
  if (score <= 12) return 'Medium';
  return 'High';
};

const ResultScreen = ({ navigation }) => {
  const responses = useSelector(state => state.responses);
  const totalScore = calculateScore(responses);
  const riskProfileCategory = getRiskProfileCategory(totalScore);

  return (
    <View>
      <Text style={styles.textScore}>Total Score: {totalScore}</Text>
      <Text style={styles.textProfile}>Risk Profile: {riskProfileCategory}</Text>
      <View style={styles.buttonStyle} >
      <Button title="Retake Questionnaire" onPress={() => navigation.navigate('Questionnaire')} />
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  textScore: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16, 
    marginRight:16,
    marginTop:20
  },
  textProfile: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16, 
    marginRight:16,
    marginTop:10
  },
  buttonStyle: {
    marginTop:60
  }
});
export default ResultScreen;
