import React, { useState } from 'react';
import { View, Button,StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setResponse } from '../redux/actions';
import Question from '../components/Question';

const questions = [
    {
      id: 1,
      text: '1. How would you describe your investment knowledge?',
      options: [
        { text: 'Novice', value: 1 },
        { text: 'Intermediate', value: 2 },
        { text: 'Advanced', value: 3 },
      ],
    },
    {
      id: 2,
      text: '2. Investment duration',
      options: [
        { text: 'Short-term (less than 1 year)', value: 1 },
        { text: 'Medium-term (1-5 years)', value: 2 },
        { text: 'Long-term (More than 5 years)', value: 3 },
      ],
    },
    {
      id: 3,
      text: '3. How comfortable are you with taking risks?',
      options: [
        { text: 'Very risk-averse', value: 1 },
        { text: 'Somewhat risk-averse', value: 2 },
        { text: 'Neutral', value: 3 },
        { text: 'Somewhat risk-tolerant', value: 4 },
        { text: 'Very risk-tolerant', value: 5 },
      ],
    },
    {
      id: 4,
      text: '4. What percentage of your income are you willing to invest?',
      options: [
        { text: 'Less than 10%', value: 1 },
        { text: '10-25%', value: 2 },
        { text: '25-50%', value: 3 },
        { text: 'More than 50%', value: 4 },
      ],
    },
    {
      id: 5,
      text: '5. How would you react to a sudden drop in the value of your investment?',
      options: [
        { text: 'Panic and sell immediately', value: 1 },
        { text: 'Monitor closely and consider selling', value: 2 },
        { text: 'Hold and wait for recovery', value: 3 },
        { text: 'See it as a buying opportunity and invest more', value: 4 },
      ],
    },
    {
      id: 6,
      text: '6. What type of investments are you most interested in?',
      options: [
        { text: 'Stocks', value: 1 },
        { text: 'Bonds', value: 2 },
        { text: 'Real Estate', value: 3 },
        { text: 'Cryptocurrency', value: 4 },
      ],
    },
    {
      id: 7,
      text: '7. How often do you review your investment portfolio?',
      options: [
        { text: 'Daily', value: 1 },
        { text: 'Weekly', value: 2 },
        { text: 'Monthly', value: 3 },
        { text: 'Quarterly', value: 4 },
        { text: 'Annually', value: 5 },
      ],
    },
    {
      id: 8,
      text: '8. How important is liquidity to you?',
      options: [
        { text: 'Very important', value: 1 },
        { text: 'Somewhat important', value: 2 },
        { text: 'Neutral', value: 3 },
        { text: 'Not very important', value: 4 },
        { text: 'Not important at all', value: 5 },
      ],
    },
    {
      id: 9,
      text: '9. What is your primary investment goal?',
      options: [
        { text: 'Capital preservation', value: 1 },
        { text: 'Income generation', value: 2 },
        { text: 'Capital appreciation', value: 3 },
        { text: 'Speculation', value: 4 },
      ],
    },
    {
      id: 10,
      text: '10. How much time are you willing to spend managing your investments?',
      options: [
        { text: 'Less than 1 hour per week', value: 1 },
        { text: '1-3 hours per week', value: 2 },
        { text: '3-5 hours per week', value: 3 },
        { text: 'More than 5 hours per week', value: 4 },
      ],
    },
    {
      id: 11,
      text: '11. How do you prefer to invest?',
      options: [
        { text: 'Self-directed', value: 1 },
        { text: 'With a financial advisor', value: 2 },
        { text: 'Using a robo-advisor', value: 3 },
        { text: 'Through mutual funds or ETFs', value: 4 },
      ],
    },
    {
      id: 12,
      text: '12. What is your annual income range?',
      options: [
        { text: 'Less than $50,000', value: 1 },
        { text: '$50,000 - $100,000', value: 2 },
        { text: '$100,000 - $200,000', value: 3 },
        { text: 'More than $200,000', value: 4 },
      ],
    },
    {
      id: 13,
      text: '13. How much of your total assets do you want to invest?',
      options: [
        { text: 'Less than 10%', value: 1 },
        { text: '10-25%', value: 2 },
        { text: '25-50%', value: 3 },
        { text: 'More than 50%', value: 4 },
      ],
    },
    {
      id: 14,
      text: '14. Which factor influences your investment decisions the most?',
      options: [
        { text: 'Market trends', value: 1 },
        { text: 'Financial news', value: 2 },
        { text: 'Personal research', value: 3 },
        { text: 'Advice from others', value: 4 },
      ],
    },
    {
      id: 15,
      text: '15. How would you rate your overall financial stability?',
      options: [
        { text: 'Very unstable', value: 1 },
        { text: 'Somewhat unstable', value: 2 },
        { text: 'Neutral', value: 3 },
        { text: 'Somewhat stable', value: 4 },
        { text: 'Very stable', value: 5 },
      ],
    }
  ];
  

const QuestionnaireScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    dispatch(setResponse(questions[currentQuestionIndex].id, selectedOption));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      navigation.navigate('Result');
    }
  };

  return (
    <View>
      <Question
        question={questions[currentQuestionIndex].text}
        options={questions[currentQuestionIndex].options}
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
      />
      <Button title="Next" onPress={handleNext} disabled={selectedOption === null} />
    </View>
  );
};


export default QuestionnaireScreen;
