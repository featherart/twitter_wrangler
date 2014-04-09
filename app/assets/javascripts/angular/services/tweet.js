app.factory('Tweet', ['$resource', function($resource) {
  function Tweet() {
    //this.service = $resource('/api/tweets');
    this.service = $resource('/api/tweets/:tweetId', {tweetId: '@id'});
    //var Tweets = $resource('/api/tweets');
  };
  Tweet.prototype.all = function() {
    return this.service.query();
  };
  return new Tweet;
}]);