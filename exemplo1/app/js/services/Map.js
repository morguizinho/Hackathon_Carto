'use strict';

Carto.factory('Map', function($resource) {
    return $resource('/api/map/:lat1/:lon1/:lat2/:lon2', {
        lat1: '@lat1',
        lon1: '@lon1',
        lat2: '@lat2',
        lon2: '@lon2'
    });
});