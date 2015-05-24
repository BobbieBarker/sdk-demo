'use strict'
angular.module('sdkDemo.landing.config', [])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/html/main.html',
      controller: 'MainCtrl as vm',
      resolve: {
        userList: function(Users){
          return Users.getUsersList().then(function(data){
            return data
          });
        }
      }
    });

  $urlRouterProvider.otherwise('/');
});
