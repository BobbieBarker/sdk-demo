'use strict';

angular.module('sdkDemo.landing.user-post', [])
  .directive('viewPost', function(){
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: 'app/main/html/post.html',
      controller: 'postCtrl as vm',
      bindToController: true
    };
  }).controller('postCtrl', function(Users){
    var vm = this;
    var itemsPerPage = 5;

    vm.getComments = function(id){
      Users.getPostsComments(id).then(function(data){
        vm.comments = Users.paginate(data, itemsPerPage, 0);
      });
    };
  });
