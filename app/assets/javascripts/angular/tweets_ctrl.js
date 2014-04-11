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
      method: 'GET',
      url: '/',
      data: {
        username: attr.username
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

  $scope.createStock = function() {
    var attr = {};
    attr.symbol = $filter('uppercase')($scope.newSymbol);
    $http({method: 'GET', url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D" + "'" + attr.symbol + "'" + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
      }).success(function(data, status, headers, config) {
     $scope.error = false;
     attr.name = data.query.results.quote["Name"];
     attr.bid = data.query.results.quote["Bid"];
     attr.ask = data.query.results.quote["Ask"];
     attr.year_low = data.query.results.quote["YearLow"];
     attr.year_high = data.query.results.quote["YearHigh"];
     var newStock = Stock.create(attr);
     $scope.stocks.push(newStock);
     $scope.newSymbol = "";
      }).error(function(data, status, headers, config) {
     $scope.error = true;
      });
  };