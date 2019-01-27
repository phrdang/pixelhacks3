// var answer = true;
// var wrongAnswer = false;
// var questions = [10];
// var buttons = [];
// var num_buttons = 4;

var data = [
    {
        question: 'What is cyber security?',
        answers: ['A lock you put on your computer.', 
        'The act of protecting networks, systems and programs from digital harm.',
        'A man you hire to protect your information.',
        'Securing your google searches.']
    },


    {
        question: 'What is the purpose of cyber security?',
        answers: ['To protect networks.',
        'To protect the systems of your computer.',
        'To protect your programs.', 
        'All of the above.']
    },

    {
        question: 'What is phishing?',
        answers: ['The act of baiting someone into signing up for memberships.',
        'A hacker breaking into your information.',
        'The act of targeting someone by acting to be from a business or institution to lure the target into giving them personal information.',
        'The activity of catching fish, either for food or as a sport.']
    },

    {
        question: 'What is one way you can avoid ransomware?',
        answers: ['Buying a new phone every week.',
        'Making sure to backup all of your files so that you will be able to restore them.',
        'Download various files from the internet.',
        'Giving your information to a person who says you can trust them.']
    },

    {
        question: 'How many types of man-in-the-middle attacks are there?',
        answers: ['3', '7', '9', '11']
    },

    {
        question: 'Which of these is an example of a man-in-the-middle attack?',
        answers: ['DNS Spoofing',
        'IP Spoofing',
        'Wi-Fi eavesdropping',
        'All of the above']
    },

    {
        question: 'What is one criteria for a strong password?',
        answers: ['Having special characters.',
        'Having multiple consecutive numbers.',
        'Writing down your password somewhere visible.',
        'Having your password be your name.']
    },

    {
        question: 'Which of these is the strongest password?',
        answers: ['abc123',
        'JackGoldberg',
        'MyD0g',
        'H3ll0W0rld!']
    },

    {
        question: 'What is a major danger of having a weak password?',
        answers: ['Your information may be stolen.',
        'Someone can change your profile picture.',
        'Your mom will be upset with you',
        'You will have to reset your password']
    },

    {
        question: 'True or False? Your identity may be stolen if your cyber security is weak.',
        answers: ['true', 'false']
    }
];

data.forEach(function(datum){

    var $widget = $('<h4>').text(datum.question);
    $widget.append($('<br>'));
    $widget.append($('<br>'));
    
    datum.answers.forEach(function(answer){
        var $button = $('<button>').text(answer);
        
        $widget.append($button);
        $widget.append($('<br>'));
        

        $button.click(function(){
            var hm = answer;
            var test = $(this).text();

        if(test === 'The act of protecting networks, systems and programs from digital harm.' ||
           test === 'All of the above.' ||
           test === 'The act of targeting someone by acting to be from a business or institution to lure the target into giving them personal information.'||
           test === 'Making sure to backup all of your files so that you will be able to restore them.'||
           test === '7'||
           test === 'All of the above'||
           test === 'Having special characters.'||
           test === 'H3ll0W0rld!'||
           test === 'Your information may be stolen.'||
           test === 'true')
        {
            $(this).css("background-color","rgb(165, 255, 124)");
            $(this).css("color","black");
        }
        else
        {
           $(this).css("background-color", "rgb(255, 142, 142)")
           $(this).css("color","black");
        }
           


        });
    });
    $('body').append($widget);
})

function securityQuiz() {
    for (var i = 0; i < 10; i++) 
    {

    }

    document.getElementById('passwordOutput').innerHTML = button + "<br>";


    if(button == answer)
    {

    }
    else
    {
        
    }
}