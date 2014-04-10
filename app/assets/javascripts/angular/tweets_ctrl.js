app.controller('TweetsCtrl', ['$scope', 'Tweet', '$http', function($scope, Tweet, $http) {
  console.log("in controller");
  $scope.tweets = Tweet.all();
  $scope.error = false;

  $scope.createTweet = function() {
    console.log("in create tweet");
    var attr = {};
    attr.username = $scope.twitterName;
    console.log("attr.username: " + attr.username);
    $http({
      method: 'POST',
      url: '/create',
      data: {
        name: attr.username
      }
    }).success(function(data, status, headers, config) {
     $scope.error = false;

     attr.text = data.query.results.username["text"];
     
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



// app.controller('StocksCtrl', ['$scope', 'Stock', '$filter', function($scope, Stock, $filter) {
//   $scope.stocks = Stock.all();

//   $scope.createStock = function() {
//     var attr = {};
//     attr.symbol = $filter('uppercase')($scope.newSymbol);
//     var newStock = Stock.create(attr);
//     $scope.stocks.push(newStock);
//     $scope.newSymbol = "";
//   };

//   $scope.deleteStock = function(id, idx) {
//     Stock.delete(id);
//     $scope.stocks.splice(idx, 1);
//   };
// }]);