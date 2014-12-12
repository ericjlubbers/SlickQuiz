// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "TV 2014 Quiz",
        "main":    "<p style=\"padding:12px 0;\">Ladies and gentlemen, start your DVRs.</p>",
        "results": "<h3>Learn More</h5><p>Head on back to <a href=\"http://denverpost.com/entertainment\">http://denverpost.com/entertainment</a>.</p>",
        "level1":  "Couch Potato",
        "level2":  "DVR Captain",
        "level3":  "Casual Viewer",
        "level4":  "\"I Don't Even Own A TV...\"",
        "level5":  "Broken Rabbit Ears" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Who finally won the Emmy Award this year for best actress in a drama, for the show she calls \"my cable series on broadcast TV\"?",
            "a": [
                {"option": "Kerry Washington",      "correct": false},
                {"option": "Michelle Dockery",     "correct": false},
                {"option": "Julianna Margulies",      "correct": true},
                {"option": "Claire Danes",     "correct": false} // no comma here
            ],
            "correct": "<p><span>You're right!</span> Margulies won for her role as Alicia Florrick in CBS's \"The Good Wife.\" (She and the series both would have won long ago if it were on HBO.)</p>",
            "incorrect": "<p><span>Oooh, sorry!</span> It was Julianna Margulies Who won for her role as Alicia Florrick in CBS's \"The Good Wife.\" (She and the series both would have won long ago if it were on HBO.)</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Which of these upheavals did not occur in 2014?",
            "a": [
                {"option": "Jay Leno performs at a Vegas firearms trade show", "correct": true},
                {"option": "Stephen Colbert leaves Comedy Central",   "correct": false},
                {"option": "Diane Sawyer leaves ABC anchor desk",  "correct": false},
                {"option": "Barbara Walters retires", "correct": false},
                {"option": "Craig Ferguson out at \"Late, Late Show\"", "correct": false},
                {"option": "Jimmy Fallon reinvents the \"Tonight Show\"", "correct": false}// no comma here
            ],
            "correct": "<p><span>That's right.</span> Jay Leno, finally off the air at NBC, <a href=\"http://news.yahoo.com/jay-leno-cancels-gig-vegas-firearms-trade-show-223918904.html\">canceled a planned appearance </a>when victims of gun violence protested.</p>",
            "incorrect": "<p><span>Nope.</span>  Jay Leno, finally off the air at NBC, <a href=\"http://news.yahoo.com/jay-leno-cancels-gig-vegas-firearms-trade-show-223918904.html\">canceled a planned appearance </a>when victims of gun violence protested.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Which was an actual reality TV show in 2014?",
            "a": [
                {"option": "\"Dating Naked\"", "correct": false},
                {"option": "\"Dating in the Dark\"", "correct": false},
                {"option": "\"Sex Sent Me to the ER\"", "correct": false},
                {"option": "All of the above", "correct": true} // no comma here
            ],
            "correct": "<p><span>You're right, of course. </span></p>",
            "incorrect": "<p><span>You're sort of right.</span> They're all real.</p>" // no comma here
        },
        { // Question 4
            "q": "What was most distracting?",
            "a": [
                {"option": "Bob Costas' eye infection during Olympics",    "correct": false},
                {"option": "The midterm political ads",     "correct": false},
                {"option": "The growing number of Cosby accusers",      "correct": false},
                {"option": "All of the above",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Could there be any other answer? *sigh*</span> At least Costas got better.</p>",
            "incorrect": "<p><span>If only.</span> The correct answer is all of the above, because 2014 was the year of distractions.</p>" // no comma here
        },
        { // Question 5
            "q": "Which networks this year announced Internet video (also known as \"over-the-top\" or \"stand-alone\" services)?",
            "a": [
                {"option": "HBO",    "correct": true},
                {"option": "CBS",     "correct": true},
                {"option": "Netflix",     "correct": false}, // no comma here
            ],
            "correct": "<p><span>You're right!</span>Both HBO and CBS have announced standalone subscription services that won't require a cable or satellite subscription, aka \"how Netflix has always operated.\"</p>",
            "incorrect": "<p><span>Both HBO and CBS have announced standalone subscription services that won't require a cable or satellite subscription, aka \"how Netflix has always operated.\"</p>" // no comma here
        },
        { // Question 6
            "q": "Which romcom was the season's first show canceled?",
            "a": [
                {"option": "\"You're the Worst\"",    "correct": false},
                {"option": "\"A to Z\"",     "correct": false},
                {"option": "\"Manhattan Love Story\"",      "correct": true},
                {"option": "\"Marry Me\"",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Bingo</span> \"Manhattan Love Story,\" in which each character's thoughts were audible.</p>",
            "incorrect": "<p><span>Nope.</span> That would be \"Manhattan Love Story,\" in which each character's thoughts were audible.</p>" // no comma here
        },
        { // Question 7
            "q": "If you followed ABC's legal drama \"How to Get Away with Murder\" as it jumped back and forth in time in its first season, you know there are several unresolved loose ends. Which is not among them?",
            "a": [
                {"option": "The location of Michaela's engagement ring.",    "correct": false},
                {"option": "How does #HTGAWM get away with those steamy gay male sex scenes?",     "correct": false},
                {"option": "The role Marcia Gay Harden will play when she joins the cast at midseason.",      "correct": false},
                {"option": "Who is the angrier black woman: Viola Davis or producer Shonda Rimes?",   "correct": true} // no comma here
            ],
            "correct": "<p><span>You're unfortunately right.</span> The unfortunate \"angry black woman\" characterization was the work of a New York Times critic who was blasted on social media as a result.</p>",
            "incorrect": "<p><span>Wrong.</span> The unfortunate \"angry black woman\" characterization was the work of a New York Times critic who was blasted on social media as a result.</p>" // no comma here
        } // no comma here
    ]
};
