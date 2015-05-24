'use strict';

angular.module('sdkDemo.api.users', [])
  .service('Users', function($http){

    this.getUsersList = function(){
      return $http.get('http://jsonplaceholder.typicode.com/users/').then(function(data){
        return data.data
      });
    }

    this.getUserPosts = function(id){
      return $http.get('http://jsonplaceholder.typicode.com/users/' + id +'/posts/').then(function(data){
        return data.data
      });
    }

    this.getPostsComments = function(id){
      return $http.get('http://jsonplaceholder.typicode.com/comments?postId=' + id).then(function(data){
        return data.data
      });
    }
  });
