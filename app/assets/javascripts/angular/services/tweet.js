// app.factory('Tweet', ['$resource', function($resource) {
//   function Tweet() {
//     this.service = $resource('/api/stocks/:stockId', {stockId: '@id'});
//   };
//   Stock.prototype.all = function() {
//     return this.service.query();
//   };
//   Stock.prototype.delete = function(stId) {
//     this.service.remove({stockId: stId});
//   };
//   Stock.prototype.create = function(attr) {
//     return this.service.save(attr);
//   };
//   return new Stock;
// }]);