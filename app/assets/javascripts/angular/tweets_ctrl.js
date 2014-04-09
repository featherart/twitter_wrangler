app.controller('TweetsCtrl', ['$scope', 'Tweet', function($scope, Tweet) {
  //var Tweets = $resource('/api/tweets');
  //$scope.tweets = Tweets.query();
  $scope.tweets = Tweet.all();
}]);
