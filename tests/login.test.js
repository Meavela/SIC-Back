const questionDB = require('../services/question_db');

test('Get All Questions', async () => {
    const data = questionDB.getAllQuestions();
    expect(JSON.stringify(data)).toBe(JSON.stringify([
        {
            ID: 1,
            Text: 'Etes vous content ?',
            Creator: 1
        },
        {
            ID: 2,
            Text: 'Votre avis sur la congolexicomatisation ?',
            Creator: 3
        }
    ]));
});
