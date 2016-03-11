(function () {
    'use strict';

    angular
    .module('myApp', ['ngNewRouter'])
    .controller('AppController', AppController);

    AppController.$routeConfig = [
        {
            path: '/',
            component: 'home'
        },
        {
            path: '/detail/:id',
            component: 'detail'
        }
    ];

    function AppController ($router) {
        this.title = 'Mi Aplicación Angular';
    }
})();