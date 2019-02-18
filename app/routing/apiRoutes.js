var friendsData = require("../data/friends")


module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function(req, res) {
      //two empty arrays, one for userScores and one for ALL of the other scores (array of arrays)
      var userScores = []
      var otherScores = []

      //loops through friendsData (before new one is pushed) and pushes the scores into otherScores array
      for(var i=0; i <friendsData.length; i ++){
        otherScores.push(friendsData[i].scores)
      }
      console.log(otherScores)

      //pushes the form data into friendsData as JSON
      friendsData.push(req.body);
      res.json(true);
      
      //pushes just the scores into an array
      for(var i = 0; i < req.body.scores.length; i++){
        userScores.push(parseFloat(req.body.scores[i]))
      }

      console.log(userScores)

      //logic to calculate the individual differences question by question and add them up
      var difArray = []

      for(var i = 0; i< otherScores.length; i ++){
        var firstDif = (userScores[0] - otherScores[i][0])

        var secondDif = (userScores[1] - otherScores[i][1])

        var thirdDif = (userScores[2] - otherScores[i][2])

        var fourthDif = (userScores[3] - otherScores[i][3])

        var fifthDif = (userScores[4] - otherScores[i][4])

        var sixthDif = (userScores[5] - otherScores[i][5])

        var seventhDif =(userScores[6] - otherScores[i][6])

        var eighthDif = (userScores[7] - otherScores[i][7])

        var ninthDif = (userScores[8] - otherScores[i][8])

        var tenthDif = (userScores[9] - otherScores[i][9])

        var totalDif = (Math.abs(firstDif) + Math.abs(secondDif) + Math.abs(thirdDif) + Math.abs(fourthDif) + Math.abs(fifthDif) + Math.abs(sixthDif) + Math.abs(seventhDif) + Math.abs(eighthDif)+ Math.abs(ninthDif) + Math.abs(tenthDif))
        
        difArray.push(totalDif)
      }

      console.log(difArray)

      //math function to find the lowest item in any array
      Array.min = function( array ){
        return Math.min.apply( Math, array );
      };

      //finds the lowest number in the difArray
      var matchNum = Array.min(difArray);

      //returns the index of the lowest number in the difArray
      var matchDex = difArray.indexOf(matchNum)

      console.log("index of closest match (from difArray i.e othersArray): " + matchDex)
      

    });
    
}