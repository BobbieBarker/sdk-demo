'use strict';

angular.module('sdkDemo.landing.comment-list', [])
  .directive('displayComments', function(){
    return {
      restrict: 'E',
      scope: {
        comments: '='
      },
      templateUrl: 'app/main/html/display-comments.html',
      controller: 'commentsCtrl as vm',
      bindToController: true
    };
  }).controller('commentsCtrl', function(){
    var vm = this;
  });
