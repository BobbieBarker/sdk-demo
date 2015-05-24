'use strict';

angular.module('sdkDemo.landing.user-list-directive', [])
  .directive('userListPanel', function(){
    return {
      restrict: 'E',
      scope: {
        userList: '=',
        postList: '='
      },
      templateUrl: 'app/main/html/user-list.html',
      controller: 'userListCtrl as vm',
      bindToController: true
    };
  }).controller('userListCtrl', function(Users){
    var vm = this;

    vm.getPosts =function(id){
      Users.getUserPosts(id).then(function(data){
        vm.postList = data;
      });
    };
  });
