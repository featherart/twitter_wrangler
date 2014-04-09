app.factory('Tweet', ['$resource', function($resource) {
  function Tweet() {
    this.service = $resource('/api/tweets/:tweetId', {tweetId: '@id'});
  };
  Tweet.prototype.all = function() {
    return this.service.query();
  };
  Tweet.prototype.delete = function(tId) {
    this.service.remove({tweetId: tId})
  };
  Tweet.prototype.create = function(attr) {
    return this.service.save(attr);
  }
  return new Tweet;
}]);

 