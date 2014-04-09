app.controller('TweetsCtrl', ['$scope', 'Tweet', function($scope, Tweet) {
  $scope.tweets = Tweet.all();

  $scope.deleteTweet = function(id, idx) {
    $scope.tweets.splice(idx, 1);
    return Tweet.delete(id);
  };
}]);