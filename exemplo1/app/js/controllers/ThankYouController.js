'use strict';

Carto.controller('ThankYouController', function ThankYouController($scope, $routeParams) {
  $scope.orderId = $routeParams.orderId;
});
