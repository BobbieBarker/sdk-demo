'use strict';

angular.module('sdkDemo.landing.user-post-list', [])
  .directive('displayUserPosts', function(){
    return {
      restrict: 'E',
      scope: {
        postList: '='
      },
      templateUrl: 'app/main/html/display-posts.html',
      controller: 'userPostsCtrl as vm',
      bindToController: true
    }
  }).controller('userPostsCtrl', function($scope, Users){
    var vm = this;
    var itemsPerPage = 5;

    $scope.$watch(angular.bind(this, function(){
      return this.postList;
    }), function(newVal, oldVal){
      if(!_.isUndefined(vm.postList)){
        vm.posts = pageCount(vm.postList, itemsPerPage);
      }
    });

    vm.getComments = function(id){
      Users.getPostsComments(id).then(function(data){
        vm.comments = pageCount(data, itemsPerPage);
        console.log(vm.comments)
      })
    }

    var pageCount = function(postList, perPage){
      var result = {};
      result.pagination = [];
      if(!_.isUndefined(postList)){
        var divisor = Math.ceil(postList.length/itemsPerPage);
        for(var i = 1; i < divisor; i++){
          result.pagination.push({currentPage: i});
        }
        result.list = _.chunk(postList, itemsPerPage);
      }
      return result;
    }
  });
