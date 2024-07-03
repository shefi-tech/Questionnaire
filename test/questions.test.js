const questions = require('./questions');

describe('Questions Array', () => {
  it('should contain 15 questions', () => {
    expect(questions.length).toBe(15);
  });

  it('each question should have an id, text, and options', () => {
    questions.forEach(question => {
      expect(question).toHaveProperty('id');
      expect(question).toHaveProperty('text');
      expect(question).toHaveProperty('options');
    });
  });

  it('each option should have text and value', () => {
    questions.forEach(question => {
      question.options.forEach(option => {
        expect(option).toHaveProperty('text');
        expect(option).toHaveProperty('value');
      });
    });
  });

  it('should have unique ids for each question', () => {
    const ids = questions.map(question => question.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
