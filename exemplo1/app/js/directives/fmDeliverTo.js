'use strict';

Carto.directive('fmDeliverTo', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/fmDeliverTo.html',
    scope: {},
    controller: function FmDeliverToController($scope, customer) {
      $scope.customer = customer;
    }
  };
});
