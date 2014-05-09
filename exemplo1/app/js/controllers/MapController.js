'use strict';

Carto.controller('MapController', function MenuController($scope, $routeParams, Map) {

    $scope.map = Map.get({
        lat1: $routeParams.lat1,
        lon2: $routeParams.lon2,
        lat2: $routeParams.lat2,
        lon2: $routeParams.lon2
    });

});