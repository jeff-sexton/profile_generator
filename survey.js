const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question(`What's your name? `, (answer) => {
  answers.name = answer;

  rl.question(`What's an activity you like doing? `, (answer) => {
    answers.activity = answer;

    rl.question(`What do you listen to while doing that? `, (answer) => {
      answers.music = answer;

      rl.question(`Which meal is you favourite? `, (answer) => {
        answers.favMeal = answer;

        rl.question(`What's your favourite thing to eat for ${answers.favMeal}? `, (answer) => {
          answers.favFood = answer;

          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            answers.sport = answer;

            rl.question(`What is your superpower? `, (answer) => {
              answers.superpower = answer;

              console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.favFood} for ${answers.favMeal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });


});


