app.factory('Tweet', ['$resource', function($resource) {
  function Tweet() {
    this.service = $resource('/api/tweets/:tweetId', {tweetId: '@id'});
  };
  Tweet.prototype.all = function() {
    return this.service.query();
  };
  return new Tweet;
}]);