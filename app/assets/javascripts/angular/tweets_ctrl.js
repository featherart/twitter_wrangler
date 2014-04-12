app.controller('TweetsCtrl', ['$scope', 'Tweet', '$http', function($scope, Tweet, $http) {
  console.log("in controller");
  $scope.tweets = Tweet.all();
  $scope.error = false;

  $scope.createTweet = function() {
    console.log("in create tweet");
    var attr = {};
    attr.username = $scope.twitterName;
    console.log("attr.username: " + attr.username);
    var res = $http({
      method: 'GET',
      url: '/',
      data: {
        username: attr.username
      }
    }).success(function(data, status, headers, config) {
     $scope.error = false;
     // data still not holding data
     // need data to create object that gets iterated through in view
     //attr.text = data.query.results.username["text"];
     attr.text = "hi world";
     console.log("response: " + res.data);
     debugger;
     var newTweet = Tweet.create(attr);
     $scope.tweets.push(newTweet);
     $scope.twitterName = ""; // clear form
    }).error(function(data, status, headers, config) {
     $scope.error = true;
    });

  };

  $scope.deleteTweet = function(id, idx) {
    $scope.tweets.splice(idx, 1);
    return Tweet.delete(id);
  };
}]);