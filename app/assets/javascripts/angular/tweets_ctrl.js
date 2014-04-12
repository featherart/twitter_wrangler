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
     // only way to get data here seems to be setting up a promise
     // need to do more research on that
     console.log("response: " + res);

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