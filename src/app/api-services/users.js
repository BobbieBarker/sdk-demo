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

    this.paginate = function(postList, perPage, countAt){
      var result = {};
      result.pagination = [];
      if(!_.isUndefined(postList)){
        var divisor = Math.ceil(postList.length/perPage);
        for(var i = countAt; i < divisor; i++){
          result.pagination.push({currentPage: i});
        }
        result.list = _.chunk(postList, perPage);
      }
      return result;
    };
  });
