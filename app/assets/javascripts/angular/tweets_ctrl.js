app.controller('TweetsCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Tweets = $resource('/api/tweets');
  $scope.tweets = Tweets.query();
}]);