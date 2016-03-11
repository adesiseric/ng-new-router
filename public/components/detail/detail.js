(function () {
    'use strict';

    angular
    .module('myApp')
    .controller('DetailController', ['$routeParams', DetailController]);

    function DetailController ($routeParams) {
        this.id = $routeParams.id;
    }
})();