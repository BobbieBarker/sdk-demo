'use strict';

angular.module('sdkDemo')
  .controller('MainCtrl', function ($scope, $http) {
    var itemsPerPage = 5;
    $scope.pagination = [];
    $scope.pageList = [];
    /*$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      $scope.postList = data.data;

    });*/

    $http.get('http://jsonplaceholder.typicode.com/users/').then(function(data){
      $scope.userList = data.data;
      console.log($scope.userList);
    });

    $scope.getPosts = function(id){
      $http.get('http://jsonplaceholder.typicode.com/users/' + id +'/posts/').then(function(data){
        $scope.postList = data.data;
        console.log(data.data)
        pageCount();
      });
    }

    $scope.getComments = function(post){
      console.log(post)
      $http.get('http://jsonplaceholder.typicode.com/comments?postId=' + post.id).then(function(data){
        $scope.commentList = data.data;
        console.log(data.data)
        secondPagination();
        console.log($scope.pageList)
        console.log($scope.commentList)
      });
    }

  var secondPagination = function(){
    if(!_.isUndefined($scope.postList)){
      var divisor = Math.ceil($scope.commentList.length/itemsPerPage);
      for(var i = 0; i < divisor; i++){
        $scope.pageList.push({currentPage: i});
      }
      $scope.commentList = _.chunk($scope.commentList, itemsPerPage);
    }
  }


    var pageCount = function(){
      if(!_.isUndefined($scope.postList)){
        var divisor = Math.ceil($scope.postList.length/itemsPerPage);
        for(var i = 1; i < divisor; i++){
          $scope.pagination.push({currentPage: i});
        }
        $scope.postList = _.chunk($scope.postList, itemsPerPage);
      }
    }
  });
// users -> albums -> photos
// users -> posts -> comments
