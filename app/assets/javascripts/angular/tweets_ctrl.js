app.controller('TweetsCtrl', ['$scope', 'Tweet', function($scope, Tweet) {
  $scope.tweets = Tweet.all();

  $scope.deleteTweet = function(idx) {
    $scope.tweets.splice(idx, 1);
  };
}]);
