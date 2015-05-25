'use strict';

angular.module('sdkDemo.landing.user-post-list', [])
  .directive('displayUserPosts', function(){
    return {
      restrict: 'E',
      scope: {
        postList: '=',
        currentUser: '='
      },
      templateUrl: 'app/main/html/display-posts.html',
      controller: 'userPostsCtrl as vm',
      bindToController: true
    };
  }).controller('userPostsCtrl', function($scope, Users){
    var vm = this;
    var itemsPerPage = 3;

    $scope.$watch(angular.bind(this, function(){
      return this.postList;
    }), function(newVal, oldVal){
      if(!_.isUndefined(vm.postList)){
        vm.posts = Users.paginate(vm.postList, itemsPerPage, 0);
      }
    });
  });
