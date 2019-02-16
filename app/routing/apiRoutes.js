var friendsData = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function(req, res) {

      friendsData.push(req.body);
      res.json(true);
      var scores = req.body.scores 
      
      for(var i =0; i <scores.length; i ++)
          var newScores = []
          newScores.push(scores[i])
        console.log(newScores)
      });
    
}