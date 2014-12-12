// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "How tuned in to Colorado media are you?",
        "main":    "<p>Let's do it!</p>",
        "results": "<h3>See you next year!</h3><p>Head on back to <a href=\"http://denverpost.com/entertainment\">http://denverpost.com/entertainment</a>.</p>",
        "level1":  "Couch Potato",
        "level2":  "DVR Captain",
        "level3":  "Casual Viewer",
        "level4":  "\"I Don't Even Own A TV...\"",
        "level5":  "Broken Rabbit Ears" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Who signed off Denver TV this year?",
            "a": [
                {"option": "Mike Landess",      "correct": true},
                {"option": "Greg Moody",     "correct": true},
                {"option": "Kirk Montgomery",      "correct": true},
                {"option": "Kyle Dyer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>You're right!</span> In fact, all of them except Dyer, who <a href=\"http://blogs.denverpost.com/ostrow/2014/05/12/kyle-dyer-will-sleep-shell-switch-part-time-9news/18590/\"> left 9News' early morning team </a>but still shows up part-time later in the day, left the air this year.</p>",
            "incorrect": "<p><span>Wrong.</span> In fact, Dyer is the only one on the list who is still on the air, despite <a href=\"http://blogs.denverpost.com/ostrow/2014/05/12/kyle-dyer-will-sleep-shell-switch-part-time-9news/18590/\"> leaving 9News' early morning team</a>.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Who signed off Denver radio this year?",
            "a": [
                {"option": "Michael Floorwax of KRFX", "correct": true},
                {"option": "Murphy Huston of KIMN",   "correct": true},
                {"option": "Jane London of KIMN",  "correct": true},
                {"option": "Peter Boyles of KHOW", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right.</span> Floorwax, Huston and London retired this year (though Huston's still doing fill-in).",
            "incorrect": "<p><span>Nope.</span> Boyles actually left KHOW for KNUS last year. The rest all retired this year (though Huston still does fill-in).</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Which TV news director didn't lose a Denver job this year?",
            "a": [
                {"option": "Jeff Harris, 7News", "correct": false},
                {"option": "Ed Kosowski, Fox31",   "correct": false},
                {"option": "Patti Dennis, 9News",  "correct": true} // no comma here
            ],
            "correct": "<p><span>Wrong.</span> <a href=\"http://www.denverpost.com/television/ci_25588411/9news-gannett-boss-patti-dennis-tv-news-is\">Dennis actually got a promotion.</a>",
            "incorrect": "<p><span>Right.</span> <a href=\"http://www.denverpost.com/television/ci_25588411/9news-gannett-boss-patti-dennis-tv-news-is\">Dennis was actually promoted</a>.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "Which Denver TV entertainment reporter got caught interviewing the stars of a movie he had not seen?",
            "a": [
                {"option": "Chris Parente", "correct": true},
                {"option": "Kirk Montgomery",   "correct": false},
                {"option": "Greg Moody",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Wrong.</span> It was Chris Parente, and you can <a href=\"http://blogs.denverpost.com/ostrow/2014/09/30/fox31s-chris-parente-skewered-kristen-wiig-bill-hader/20092/\">read all about it here</a>. (The other two lost their jobs this year.)",
            "incorrect": "<p><span>Right.</span>It was Chris Parente, and you can <a href=\"http://blogs.denverpost.com/ostrow/2014/09/30/fox31s-chris-parente-skewered-kristen-wiig-bill-hader/20092/\">read all about it here</a>. (The other two lost their jobs this year.)</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "Attack ads! Distortions! Viewers were bombarded by political commercials, but the midterm election ad campaigns rained money on TV outlets. How much was spent in this record-breaking year?",
            "a": [
                {"option": "Nearly $4 billion nationally, according to the watchdog group Center for Responsive Politics, spent by candidates, special-interest groups and political parties.", "correct": true},
                {"option": "At least $89 million on television ads in Colorado alone, <a href=\"http://www.denverpost.com/election2014/ci_26799835/political-cash-floods-colorado-record-breaking-year\">according to analysts</a>. (Not including cable/satellite advertising).",   "correct": true},
                {"option": "Some <a href=\"http://www.denverpost.com/election2014/ci_26799835/political-cash-floods-colorado-record-breaking-year\">$56 million</a> in the Udall-Gardner Senate battle alone.",  "correct": true},
                {"option": "It felt like $4 billion's worth in my living room.",  "correct": true} // no comma here
            ],
            "correct": "<p><span>All of the above.</span></p>",
            "incorrect": "<p><span>All of the above.</span></p>" // no comma here
        },
        { // Question 6 - Multiple Choice, Single True Answer
            "q": " The 2014 Super Bowl was the most-watched program in television history with 111.5 million people tuning in. Which other statistic is true?",
            "a": [
                {"option": "The Seattle Seahawks' demolition of the Denver Broncos, 43-8, was the largest margin of victory in a Super Bowl in 21 years.", "correct": true},
                {"option": "Viewership fell off in the fourth quarter, when it was clear Denver didn't have a chance.",   "correct": false},
                {"option": "The half-time show with Bruno Mars and the Red Hot Chili Peppers couldn't measure up to Beyonc&eacute; or Madonna in the two previous years.",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct.</span> Viewership remained high even through the fourth quarter, with the closing minutes garnering an audience only 5 percent lower than the entire game. And 115.3 million stayed tuned during halftime, beating the two previous years' halftime audiences.</p>",
            "incorrect": "<p><span>Wrong.</span> a) Viewership remained high even through the fourth quarter, with the closing minutes garnering an audience only 5 percent lower than the entire game. And 115.3 million stayed tuned during halftime, beating the two previous years' halftime audiences.</p>" // no comma here
        },
        { // Question 7 - Multiple Choice, Single True Answer
            "q": "Colorado's legalization of recreational marijuana lit up the national journalism scene. Which piece included an overindulging reporter's bad trip as part of the story?",
            "a": [
                {"option": "\"Pot Barons of Colorado\" on MSNBC", "correct": false},
                {"option": "\"Weed\" by Sanjay Gupta on CNN", "correct": false},
                {"option": "\"Medicine Man\" on TruTV", "correct": false},
                {"option": "\"Don't Harsh Our Mellow, Dude\" by Maureen Dowd, New York Times", "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct.</span> However, locals claim <a href=\"http://www.thecannabist.co/2014/06/04/was-maureen-dowd-warned-about-edible-marijuana/13113/\">she was warned</a>.</p>",
            "incorrect": "<p><span>Wrong.</span> The correct answer is Dowd, however, locals claim <a href=\"http://www.thecannabist.co/2014/06/04/was-maureen-dowd-warned-about-edible-marijuana/13113/\">she was warned</a>.</p>" // no comma here
        },
        { // Question 8
            "q": "Even beyond weed, Colorado was a popular setting for TV reality series. Which shot here this year?",
            "a": [
                {"option": "Gordon Ramsay's \"Kitchen Nightmares,\" Fox",    "correct": true},
                {"option": "\"Prospectors,\" The Weather Channel",     "correct": true},
                {"option": "\"The Ultimate Outdoorsman Lodge,\" Great American Country",      "correct": true},
                {"option": "\"Building Off the Grid,\" DIY",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct.</span.> In fact, all of the shows filmed here but \"Building Off the Grid\", which was shot in Alaska by Colorado-based Orion Entertainment.</p>",
            "incorrect": "<p><span>Wrong.</span.> In fact, all of the shows filmed here but \"Building Off the Grid\", which was shot in Alaska by Colorado-based Orion Entertainment.</p></p>" // no comma here
        } // no comma here
    ]
};
