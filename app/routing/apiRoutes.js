var friendsData = require("../data/friends")


module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    //my previous post method was much too long. I thought about how to rework/clean it up
    //and it made the functionality a lot easier to understand
    app.post('/api/friends', function(req, res) {
      //grabs the whole request from survey.html
      var userInput = req.body;
  
      //grabs the user's responses as an array
      var userResponses = userInput.scores;

      console.log(userResponses)
      
      //sets up empty string variables to hold future data
      var matchName = ""
      var matchImage = ""
      //sets the totalDifference to a large number so i can calculate the difference between
      //other friends from the friendsData array
      var totalDifference = 10000; 
  
      //cycles through the data held at ../data/friends
      for (var i = 0; i < friendsData.length; i++) {
  
        //sets up the diff variable
        var diff = 0;
        //second loop to go through the user responses
        for (var j = 0; j < userResponses.length; j++) {
          //goes through ALL of the friendsData entries and subtracts the user scores from
          //the scores of each of the friends data
          diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
        }

        console.log("diff from friendsData[" + i + "] " + diff)
        //if the diff number is less than 10000....
        if (diff < totalDifference) {
          //changes the total difference to the actual difference
          totalDifference = diff;
          //assigns the strings to the empty variables
          matchName = friendsData[i].name;
          matchImage = friendsData[i].photo;
        }
      }

      console.log(matchName)
      console.log(matchImage)
      
      //pushes the req.body to the friendsData array
      friendsData.push(userInput);
      
      //sends out these variables to be used by other pages
      res.json({status: 'OK',
       matchName: matchName, 
       matchImage: matchImage});
    });
    
}