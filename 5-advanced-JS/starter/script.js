
(function(){
    "use strict";
    var Question = function(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    Question.prototype = {
    showQuestion: function() {
        console.log(this.question);
        for (var i = 0; i < this.options.length; i++) {
            console.log(`${i}. ${this.options[i]}`);
        }
    },
    checkAnswer: function(input) {
        var ans = parseInt(input);
        if (ans === this.answer) {
            console.log('Correct!');
            return true;
        } else {
            console.log('Wrong answer, try again:');
            return false;
        }
    }
    };

    var Game = function () {
        this.score = 0;
        this.questions = [
            new Question(
                'Is JavaScript the coolest programming language in the world?',
                ['Yes', 'No'], 0),
            new Question('What is the name of this course\'s teacher?',
                ['John', 'Micheal', 'Jonas'], 2),
            new Question('What does best describe coding?',
                ['Boring', 'Hard', 'Fun', 'Tediuos'], 2)
        ];
    }

    Game.prototype = {
        startRandomQuestion: function() {
            var q = Math.floor(Math.random() * this.questions.length);
            var question = this.questions[q];
            question.showQuestion();

            var input = prompt('Please select the correct answer.');
            if (input === 'exit') {
                console.log(`Game end, your score: ${this.score}`);
                return;
            }
            if (question.checkAnswer(input)) {
                this.score += 1;
            }
            this.startRandomQuestion();
        }
    };

    var game = new Game();
    game.startRandomQuestion();

})()